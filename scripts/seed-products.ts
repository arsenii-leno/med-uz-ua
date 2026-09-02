import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "astro/zod";
import {
  PRODUCT_CATEGORIES,
  productSchema,
  type ProductCategory,
} from "../src/schemas/product.ts";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const SEED_FILE = path.join(PROJECT_ROOT, "shop_seed.json");
const GENERATED_MANIFEST_FILE = path.join(
  SCRIPT_DIR,
  "seed-products.manifest.json",
);
const TARGET_DIR = path.join(PROJECT_ROOT, "src", "content", "products");

const sourceProductSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    sku: z.string().optional(),
    title: z.string().trim().min(1),
    category: z.enum(PRODUCT_CATEGORIES),
    brand: z.string().trim().min(1),
    price: z.number().int().positive().refine(Number.isSafeInteger),
    inStock: z.boolean(),
    image: z.string().min(1),
    description: z.string().trim().min(1),
  })
  .passthrough();

function compileProducts(): void {
  const seedRaw = fs.readFileSync(SEED_FILE, "utf8");
  const rawProducts = JSON.parse(seedRaw);
  if (!Array.isArray(rawProducts)) {
    throw new Error("shop_seed.json must contain an array of products");
  }

  const generatedFiles: string[] = [];
  const categoryCounts: Record<ProductCategory, number> = {
    lenses: 0,
    care: 0,
    frames: 0,
    sunglasses: 0,
  };

  fs.mkdirSync(TARGET_DIR, { recursive: true });

  let filesChanged = 0;
  let filesUnchanged = 0;

  for (const raw of rawProducts) {
    const parsed = sourceProductSchema.parse(raw);
    const normalized = productSchema.parse({
      title: parsed.title,
      description: parsed.description,
      category: parsed.category,
      brand: parsed.brand,
      priceMinor: parsed.price * 100,
      currency: "UAH",
      image: parsed.image,
      imageKind: "product",
      inStock: parsed.inStock,
      status: "active",
      verificationStatus: "verified",
    });

    const filename = `${parsed.id}.json`;
    const targetFile = path.join(TARGET_DIR, filename);
    const contentStr = `${JSON.stringify(normalized, null, 2)}\n`;

    if (fs.existsSync(targetFile) && fs.readFileSync(targetFile, "utf8") === contentStr) {
      filesUnchanged += 1;
    } else {
      fs.writeFileSync(targetFile, contentStr, "utf8");
      filesChanged += 1;
    }

    generatedFiles.push(filename);
    categoryCounts[normalized.category] += 1;
  }

  const existingFiles = fs.readdirSync(TARGET_DIR).filter((f) => f.endsWith(".json"));
  let staleRemoved = 0;
  const activeSet = new Set(generatedFiles);
  for (const file of existingFiles) {
    if (!activeSet.has(file)) {
      fs.unlinkSync(path.join(TARGET_DIR, file));
      staleRemoved += 1;
    }
  }

  fs.writeFileSync(
    GENERATED_MANIFEST_FILE,
    `${JSON.stringify({ version: 1, generatedFiles: generatedFiles.sort() }, null, 2)}\n`,
    "utf8"
  );

  console.log(
    JSON.stringify(
      {
        canonicalProducts: generatedFiles.length,
        filesChanged,
        filesUnchanged,
        staleGeneratedFilesRemoved: staleRemoved,
        categoryCounts,
      },
      null,
      2
    )
  );
}

try {
  compileProducts();
} catch (error) {
  console.error(error instanceof Error ? error.message : "Seed failure");
  process.exitCode = 1;
}
