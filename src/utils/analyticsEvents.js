import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

/**
 * Universal Analytics & Conversion Event Tracker
 * Sends events to Google Analytics 4 via Firebase SDK and window.gtag (if available)
 */
export function trackEvent(eventName, eventParams = {}) {
  try {
    // 1. Log to Firebase GA4 if active
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }

    // 2. Fallback to window.gtag if integrated via GTM
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }

    // Development diagnostic log
    if (import.meta.env.DEV) {
      console.log(`[SEO-Analytics] Event: ${eventName}`, eventParams);
    }
  } catch (err) {
    // Graceful silent fallback
    console.debug('Event tracking skipped:', err);
  }
}

export function trackPhoneCall(phoneNumber = '+91 7992421080', source = 'unknown') {
  trackEvent('phone_call_click', {
    phone_number: phoneNumber,
    source_page: source,
    timestamp: new Date().toISOString()
  });
}

export function trackWhatsAppClick(serviceName = 'General', source = 'unknown') {
  trackEvent('whatsapp_chat_click', {
    service_inquired: serviceName,
    source_page: source,
    timestamp: new Date().toISOString()
  });
}

export function trackQuoteFormSubmit(service, quantity, source = 'quote_form') {
  trackEvent('generate_lead', {
    service_name: service,
    quantity_requested: quantity,
    form_source: source,
    timestamp: new Date().toISOString()
  });
}

export function trackElectionRateListClick(source = 'hero_banner') {
  trackEvent('election_rate_list_click', {
    campaign_category: 'chunav_prachar_samagri',
    source_section: source,
    timestamp: new Date().toISOString()
  });
}

export function trackMapDirectionsClick(location = 'Popular Palace Bari Path') {
  trackEvent('view_location_directions', {
    target_destination: location,
    timestamp: new Date().toISOString()
  });
}

