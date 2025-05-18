import { site } from "@/config/site-config";

export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = site.recaptcha.siteKey;
      if (!siteKey) {
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(siteKey, { action: "booking" });
      resolve(token);
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Secret key is not found");
  }

  // A reCAPTCHA API URL-ja
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const response = await fetch(url, { method: "POST" });

  const captchaData: CaptchaData = await response.json();

  if(!response.ok) {
    return null;
  }

  return captchaData;
}

type CaptchaData = {
    success: true;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
} | {
    success: false;
    "error-codes": string[];
};
