import { SITE } from "../config";

/**
 * schema.org ProfessionalService (or another LocalBusiness subtype) built from src/config.ts.
 * No aggregateRating on purpose: search engines ignore ratings a business publishes about itself.
 */
export function businessJsonLd(site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": SITE.schemaType,
    "@id": new URL("/#business", site).href,
    name: SITE.name,
    description: SITE.description,
    url: new URL("/", site).href,
    telephone: SITE.phone.tel,
    email: SITE.email,
    image: new URL("/og.png", site).href,
    logo: new URL("/apple-touch-icon.png", site).href,
    areaServed: SITE.locations,
    sameAs: SITE.social.map((s) => s.href),
  };
}

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
