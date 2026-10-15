import { clinicImageAssets, type OwnerSuppliedImageAsset } from "../lib/assets";
import type { Locale } from "../lib/i18n";

export interface SpecializationCard {
  readonly id: "pediatric" | "adult-diagnostics" | "care-pathway" | "programs";
  readonly title: string;
  readonly description: string;
  readonly image: OwnerSuppliedImageAsset;
  readonly imageAlt: string;
  readonly href: string;
}

const specializations: Readonly<Record<Locale, readonly SpecializationCard[]>> = {
  uk: [
    {
      id: "pediatric",
      title: "Дитяча офтальмологія",
      description:
        "Дбайлива перевірка зору з перших років життя: раннє виявлення короткозорості, амбліопії, косоокості та індивідуальний підбір дитячої оптики в спокійній ігровій формі.",
      image: clinicImageAssets.pediatricExamination,
      imageAlt: "Дитина під час діагностичного огляду у дитячого офтальмолога",
      href: "/services/pediatric",
    },
    {
      id: "adult-diagnostics",
      title: "Комплексна діагностика",
      description:
        "Повне апаратне обстеження очей на цифровому обладнанні: точна авторефрактометрія, безконтактне вимірювання внутрішньоочного тиску, біомікроскопія та огляд очного дна.",
      image: clinicImageAssets.adultExamination,
      imageAlt: "Огляд пацієнта на сучасній щілинній лампі",
      href: "/services/adult",
    },
    {
      id: "care-pathway",
      title: "Хірургічний та амбулаторний супровід",
      description:
        "Амбулаторні процедури, видалення сторонніх тіл, зондування слізних шляхів та передопераційний і післяопераційний супровід за сучасними медичними стандартами.",
      image: clinicImageAssets.diagnosticConsultation,
      imageAlt: "Консультація лікаря-офтальмолога та діагностичне обладнання",
      href: "/services/surgical",
    },
    {
      id: "programs",
      title: "Апаратне лікування та зорова терапія",
      description:
        "Курси апаратної корекції та підтримки зору для дітей і дорослих: зняття спазму акомодації, лікування амбліопії, контроль міопії та соціальні пільгові програми.",
      image: clinicImageAssets.doctorInCabinet,
      imageAlt: "Кабінет апаратної терапії та діагностики зору",
      href: "/services/programs",
    },
  ],
  en: [
    {
      id: "pediatric",
      title: "Pediatric Ophthalmology",
      description:
        "Gentle eye care for children of all ages: early detection of myopia, amblyopia, strabismus, and friendly optical selection in a relaxed environment.",
      image: clinicImageAssets.pediatricExamination,
      imageAlt: "Child during diagnostic eye examination",
      href: "/services/pediatric",
    },
    {
      id: "adult-diagnostics",
      title: "Advanced Diagnostics",
      description:
        "Comprehensive eye examination using modern digital devices: computerized autorefraction, intraocular pressure measurement, and detailed fundus evaluation.",
      image: clinicImageAssets.adultExamination,
      imageAlt: "Slit-lamp examination of an adult patient",
      href: "/services/adult",
    },
    {
      id: "care-pathway",
      title: "Surgical & Outpatient Care",
      description:
        "Outpatient procedures, foreign body removal, lacrimal duct probing, and attentive preoperative and postoperative care according to modern clinical standards.",
      image: clinicImageAssets.diagnosticConsultation,
      imageAlt: "Ophthalmologist consultation and clinical diagnostic equipment",
      href: "/services/surgical",
    },
    {
      id: "programs",
      title: "Vision Therapy & Special Programs",
      description:
        "Hardware vision training courses: accommodation spasm relief, amblyopia therapy, myopia progression control, and supportive social care programs.",
      image: clinicImageAssets.doctorInCabinet,
      imageAlt: "Vision therapy and diagnostic clinical equipment room",
      href: "/services/programs",
    },
  ],
  sk: [
    {
      id: "pediatric",
      title: "Detská oftalmológia",
      description:
        "Starostlivé vyšetrenie zraku detí od útleho veku: včasná diagnostika refrakčných chýb, tupozrakosti a šetrný výber korekčnej optiky v priateľskej atmosfére.",
      image: clinicImageAssets.pediatricExamination,
      imageAlt: "Dieťa počas vyšetrenia zraku u detského oftalmológa",
      href: "/services/pediatric",
    },
    {
      id: "adult-diagnostics",
      title: "Komplexná diagnostika",
      description:
        "Prístrojové vyšetrenie zraku pomocou moderných digitálnych metód: autorefraktometria, bezkontaktná tonometria a podrobné vyšetrenie očného pozadia.",
      image: clinicImageAssets.adultExamination,
      imageAlt: "Vyšetrenie dospelého pacienta na štrbinovej lampe",
      href: "/services/adult",
    },
    {
      id: "care-pathway",
      title: "Chirurgická a ambulantná starostlivosť",
      description:
        "Ambulantné zákroky, odstránenie cudzích teliesok, sondáž slzných ciest a predoperačný aj pooperačný manažment podľa európskych štandardov.",
      image: clinicImageAssets.diagnosticConsultation,
      imageAlt: "Odborná oftalmologická konzultácia a vyšetrovacie prístroje",
      href: "/services/surgical",
    },
    {
      id: "programs",
      title: "Prístrojová terapia a špeciálne programy",
      description:
        "Kurzy prístrojovej korekcie a tréningu zraku: uvoľnenie kŕča akomodácie, liečba tupozrakosti, spomalenie progresie krátkozrakosti a sociálne programy.",
      image: clinicImageAssets.doctorInCabinet,
      imageAlt: "Ambulancia prístrojovej terapie a diagnostiky zraku",
      href: "/services/programs",
    },
  ],
  hu: [
    {
      id: "pediatric",
      title: "Gyermekszemészet",
      description:
        "Gondos látásvizsgálat gyermekeknek már kiskortól: a rövidlátás, tompalátás és kancsalság korai felismerése, valamint kényelmes szemüvegválasztás.",
      image: clinicImageAssets.pediatricExamination,
      imageAlt: "Gyermek szemészeti vizsgálat közben",
      href: "/services/pediatric",
    },
    {
      id: "adult-diagnostics",
      title: "Komplex diagnosztika",
      description:
        "Teljes körű műszeres szemvizsgálat digitális berendezésekkel: pontos autorefraktometria, szemnyomásmérés és részletes szemfenékvizsgálat.",
      image: clinicImageAssets.adultExamination,
      imageAlt: "Felnőtt páciens vizsgálata réslámpával",
      href: "/services/adult",
    },
    {
      id: "care-pathway",
      title: "Sebészeti és járóbeteg-ellátás",
      description:
        "Járóbeteg-beavatkozások, idegentest-eltávolítás, könnycsatorna-szondázás, valamint műtét előtti és utáni gondozás modern klinikai protokollok szerint.",
      image: clinicImageAssets.diagnosticConsultation,
      imageAlt: "Szemész szakorvosi konzultáció és diagnosztikai berendezések",
      href: "/services/surgical",
    },
    {
      id: "programs",
      title: "Látásterápia és speciális programok",
      description:
        "Műszeres látásjavító és terápiás tanfolyamok: akkomodációs görcsoldás, tompalátás kezelése, rövidlátás progressziójának fékezése és szociális programok.",
      image: clinicImageAssets.doctorInCabinet,
      imageAlt: "Műszeres terápia és látásdiagnosztikai rendelő",
      href: "/services/programs",
    },
  ],
};

export function getSpecializations(locale: Locale): readonly SpecializationCard[] {
  return specializations[locale];
}
