import type { AppointmentInput } from "../../schemas/appointment";

type Fetcher = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

export interface LeadDispatchEnvironment {
  readonly TELEGRAM_BOT_TOKEN?: string;
  readonly TELEGRAM_CHAT_ID?: string;
  readonly LEAD_API_URL?: string;
  readonly LEAD_API_TOKEN?: string;
}

export type AppointmentDispatcher = (
  appointment: AppointmentInput,
) => Promise<void>;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatTelegramMessage(appointment: AppointmentInput): string {
  const safeName = escapeHtml(appointment.name);
  const safePhone = escapeHtml(appointment.phone);
  const duration =
    appointment.elapsedMs !== undefined
      ? `${(appointment.elapsedMs / 1000).toFixed(1)} с`
      : "—";

  const sourceLines: string[] = [];
  if (appointment.gclid) {
    sourceLines.push(`🎯 <b>Джерело:</b> Google Ads (Пошук)`);
    sourceLines.push(`🔗 <b>GCLID:</b> <code>${escapeHtml(appointment.gclid.slice(0, 40))}...` + `</code>`);
  } else if (appointment.utmSource) {
    const med = appointment.utmMedium ? ` / ${escapeHtml(appointment.utmMedium)}` : "";
    sourceLines.push(`🎯 <b>Джерело:</b> ${escapeHtml(appointment.utmSource)}${med}`);
    if (appointment.utmCampaign) {
      sourceLines.push(`📢 <b>Кампанія:</b> ${escapeHtml(appointment.utmCampaign)}`);
    }
  } else {
    sourceLines.push(`🌐 <b>Джерело:</b> Прямий перехід / Органіка`);
  }

  if (appointment.pagePath) {
    sourceLines.push(`📄 <b>Сторінка:</b> ${escapeHtml(appointment.pagePath)}`);
  }

  return [
    `🏥 <b>Новий запис на прийом (med.uz.ua)</b>`,
    ``,
    `👤 <b>Пацієнт:</b> ${safeName}`,
    `📞 <b>Телефон:</b> <code>${safePhone}</code>`,
    ...sourceLines,
    `⏱ <b>Час заповнення:</b> ${duration}`,
    `📅 <b>Дата:</b> ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}`,
  ].join("\n");
}

export function createLeadDispatcher(
  environment: LeadDispatchEnvironment,
  fetcher: Fetcher = fetch,
): AppointmentDispatcher {
  return async (appointment) => {
    const botToken = environment.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = environment.TELEGRAM_CHAT_ID?.trim();
    const leadApiUrl = environment.LEAD_API_URL?.trim();
    const leadApiToken = environment.LEAD_API_TOKEN?.trim();

    let delivered = false;

    // 1. Пряма відправка в Telegram
    if (botToken && chatId) {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetcher(telegramUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatTelegramMessage(appointment),
          parse_mode: "HTML",
        }),
        signal: AbortSignal.timeout(8_000),
      });

      if (response.ok) {
        delivered = true;
      }
    }

    // 2. Резервна відправка в Lead CRM API (якщо налаштовано)
    if (leadApiUrl && leadApiToken) {
      try {
        const response = await fetcher(leadApiUrl, {
          method: "POST",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${leadApiToken}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(appointment),
          signal: AbortSignal.timeout(8_000),
        });
        if (response.ok) delivered = true;
      } catch {
        // ігноруємо помилку, якщо Telegram уже доставив
      }
    }

    if (!delivered) {
      throw new Error("LEAD_DISPATCH_FAILED");
    }
  };
}
