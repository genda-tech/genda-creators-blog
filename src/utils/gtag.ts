import { config } from '@site.config';
export const gaTrackingId = config.gaTrackingId || '';

export const pageview = (url: string): void => {
  if (!gaTrackingId) return;
  window.gtag('config', gaTrackingId, {
    page_path: url,
  });
};
