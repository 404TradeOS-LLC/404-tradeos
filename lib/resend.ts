import { Resend } from "resend";

export const FROM_EMAIL = process.env.RESEND_FROM ?? "hello@404tradeos.com";
export const NOTIFY_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL ?? "billy@404tradeos.com";

// Constructed lazily so importing this module doesn't require RESEND_API_KEY
// to be present at build time — only when an email is actually sent.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendOwnerNotification(lead: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  business_name?: string;
  trade_type?: string;
  plan_interest?: string;
  city?: string;
  message?: string;
}) {
  return getResend().emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    subject: `New lead: ${lead.first_name} ${lead.last_name} — ${lead.trade_type ?? "Trade"} in ${lead.city ?? "Unknown"}`,
    html: `
      <div style="font-family: 'Courier New', monospace; background: #0D0A07; color: #C8C0B0; padding: 32px; border-radius: 8px;">
        <div style="background: #1E1610; border: 1px solid #3d2a10; border-radius: 4px; padding: 8px 14px; display: inline-block; margin-bottom: 20px;">
          <span style="color: #E8C99A; letter-spacing: 0.12em;">404</span>
          <span style="color: #3d2a10; margin: 0 6px;">|</span>
          <span style="color: #B87333; letter-spacing: 0.12em;">TRADE</span>
          <span style="color: #3d2a10; margin: 0 6px;">|</span>
          <span style="color: #E8C99A; letter-spacing: 0.12em;">OS</span>
        </div>
        <h1 style="color: #F7F2EC; font-size: 24px; margin: 0 0 4px;">New lead received</h1>
        <p style="color: #B87333; font-size: 12px; letter-spacing: 0.16em; margin: 0 0 24px;">tradeos://leads — new submission</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px;">Name</td><td style="padding: 8px 0; color: #E8C99A;">${lead.first_name} ${lead.last_name}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Phone</td><td style="padding: 8px 0; color: #E8C99A; font-size: 16px; font-weight: bold;">${lead.phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Email</td><td style="padding: 8px 0; color: #E8C99A;">${lead.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Business</td><td style="padding: 8px 0; color: #F7F2EC;">${lead.business_name ?? "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Trade</td><td style="padding: 8px 0; color: #F7F2EC;">${lead.trade_type ?? "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Plan</td><td style="padding: 8px 0; color: #F7F2EC;">${lead.plan_interest ?? "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">City</td><td style="padding: 8px 0; color: #F7F2EC;">${lead.city ?? "—"}</td></tr>
        </table>
        ${lead.message ? `<div style="background: #0D0A07; border: 1px solid #3d2a10; border-radius: 6px; padding: 16px; margin-top: 20px;"><p style="color: #5a3d1e; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px;">Message</p><p style="color: #C8C0B0; margin: 0;">${lead.message}</p></div>` : ""}
      </div>
    `,
  });
}

export async function sendCustomerConfirmation(lead: {
  first_name: string;
  email: string;
}) {
  return getResend().emails.send({
    from: FROM_EMAIL,
    to: lead.email,
    subject: `Got it, ${lead.first_name} — we'll be in touch within 24 hours`,
    html: `
      <div style="font-family: system-ui, sans-serif; background: #0D0A07; color: #C8C0B0; padding: 32px; border-radius: 8px; max-width: 480px;">
        <div style="font-family: 'Courier New', monospace; background: #1E1610; border: 1px solid #3d2a10; border-radius: 4px; padding: 8px 14px; display: inline-block; margin-bottom: 24px;">
          <span style="color: #E8C99A;">404</span>
          <span style="color: #3d2a10; margin: 0 6px;">|</span>
          <span style="color: #B87333;">TRADE</span>
          <span style="color: #3d2a10; margin: 0 6px;">|</span>
          <span style="color: #E8C99A;">OS</span>
        </div>
        <h1 style="color: #F7F2EC; font-size: 22px; font-weight: 500; margin: 0 0 12px;">Hi ${lead.first_name} — we got your quote request.</h1>
        <p style="color: #C8C0B0; line-height: 1.7; margin: 0 0 20px;">We review every submission personally and will get back to you within 24 hours — usually much faster.</p>
        <p style="color: #C8C0B0; line-height: 1.7; margin: 0 0 28px;">While you wait, feel free to check out our work and see what we've built for other trade businesses.</p>
        <a href="https://www.404tradeos.com/work" style="display: inline-block; background: #B87333; color: #0D0A07; font-weight: 700; padding: 12px 24px; border-radius: 4px; text-decoration: none;">See our work →</a>
        <div style="border-top: 1px solid #3d2a10; margin-top: 32px; padding-top: 20px;">
          <p style="color: #5a3d1e; font-size: 12px; margin: 0;">hello@404tradeos.com · (812) 562-8504 · www.404tradeos.com</p>
          <p style="color: #5a3d1e; font-size: 12px; margin: 4px 0 0;">7175 Robertson Rd., Terre Haute, IN 47802</p>
        </div>
      </div>
    `,
  });
}
