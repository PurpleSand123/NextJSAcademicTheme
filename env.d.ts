/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    // Google Analytics tracking ID
    NEXT_PUBLIC_GOOGLE_ANALYTICS?: string;

    // Site URL for sitemap generation
    SITE_URL?: string;

    // GitHub token for API access
    GITHUB_TOKEN?: string;
  }
}

