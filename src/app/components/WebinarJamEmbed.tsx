// components/WebinarJamEmbed.tsx
'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export function WebinarJamEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://event.webinarjam.com/register/z0548qi7/embed-form?formButtonText=Kostenlos%20anmelden&formAccentColor=%23000000&formAccentOpacity=1&formBgColor=%23ffffff&formBgOpacity=1';
    script.async = true;
    // Zeigt an, dass das Anmeldeformular tatsächlich geladen wurde (Intent-Signal,
    // schwächer als eine echte Anmeldung, aber nützlich um Ladeprobleme zu erkennen).
    script.onload = () => trackEvent('webinar_form_loaded');

    const wrapper = document.getElementById('wj-embed-wrapper');
    if (wrapper) {
      wrapper.appendChild(script);
    }

    return () => {
      if (wrapper && wrapper.contains(script)) {
        wrapper.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="wj-embed-wrapper"
      className="wj-embed-wrapper w-full"
      data-webinar-hash="z0548qi7"
    />
  );
}
