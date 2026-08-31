export function gtag(eventName, action, params = {}) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag(eventName, action, params);
}

export function trackCta(label) {
  gtag('event', 'cta_click', { label });
}

export function trackWhatsappClick(label = 'whatsapp_click') {
  gtag('event', 'whatsapp_click', { label });
}

export function trackLeadSubmit() {
  gtag('event', 'lead_form_submit', { page_location: window.location.href });
}

export function captureUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
}
