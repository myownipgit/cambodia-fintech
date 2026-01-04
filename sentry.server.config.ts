import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://14c15eec8fafab9f3f76f7744a49c8e9@o4510651057242112.ingest.de.sentry.io/4510651062222928",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
