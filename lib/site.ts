export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://guarda-three.vercel.app").replace(/\/$/, "");
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001").replace(/\/$/, "");

export type BillingInterval = "monthly" | "yearly";

// The app's register page carries ?next=upgrade through sign-up and opens Polar checkout.
export function upgradeUrl(interval: BillingInterval) {
  return `${APP_URL}/register?next=upgrade&interval=${interval}`;
}
