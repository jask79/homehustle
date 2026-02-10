'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-HJLQ13WX4P'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Helper to track custom events
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// Track form submissions as conversions
export function trackFormSubmission(formName: string, additionalParams?: Record<string, unknown>) {
  trackEvent('generate_lead', {
    form_name: formName,
    ...additionalParams,
  })
}

// Track CTA clicks
export function trackCTAClick(ctaName: string, destination?: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    destination: destination,
  })
}

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
