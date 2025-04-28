"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';

interface ReCaptchaV3Props {
  onVerify: (token: string) => void;
  action?: string;
}

export function ReCaptchaV3({ onVerify, action = 'booking' }: ReCaptchaV3Props) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // reCAPTCHA script betöltése után token generálás
  const handleReCaptchaLoad = () => {
    if (!window.grecaptcha || !siteKey) return;
    
    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action }).then(onVerify);
      });
    } catch (error) {
      console.error('reCAPTCHA hiba:', error);
    }
  };

  // Automatikus token generálás a komponens betöltésekor
  useEffect(() => {
    // Ha a grecaptcha már betöltődött és van siteKey, használjuk azonnal
    if (window.grecaptcha && siteKey) {
      handleReCaptchaLoad();
    }
  }, [action, siteKey]);

  return (
    <>
      {siteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          onLoad={handleReCaptchaLoad}
          strategy="lazyOnload"
        />
      ) : (
        <div className="hidden">reCAPTCHA site key hiányzik</div>
      )}
    </>
  );
}

// Globális típusdeklaráció a window objektumhoz
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}