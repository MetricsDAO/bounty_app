// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

if (process.env.NODE_ENV !== "development") {
  const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  console.log("Loaded sentry on client!")
  Sentry.init({
    dsn: SENTRY_DSN || 'https://ce70949f330341559a782f1401199c94@o112472.ingest.sentry.io/6048139',
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1.0,
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  })
}