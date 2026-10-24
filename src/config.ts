/** Shared brand, contact, navigation, and content facts for LUUCESSE. */

export const SITE = {
  name: "LUUCESSE",
  shortName: "LUUCESSE",
  tagline: "Content creation and digital growth for modern businesses",
  description:
    "LUUCESSE helps businesses grow with websites, social media management, reels, posts, AI-powered assistant calls, brand strategy, content management, and Meta and Google Ads.",
  /** Set SITE_URL in the deployment environment when the production domain is known. */
  url: "https://luucesse.whynt.in/",
  lang: "en",
  locale: "en_US",
  schemaType: "ProfessionalService",
  phone: { display: "+91 94479 56110", tel: "+919447956110" },
  email: "luccesse@gmail.com",
  locations: ["Alappuzha, Kerala", "Pathanamthitta, Kerala", "Silvassa", "Dadra and Nagar Haveli"],
  social: [] as { label: string; href: string; icon: string }[],

  theme: { accent: "#003932", accentText: "#fefff1" },

  /**
   * Contact form. PUBLIC_FORMGONG_ACCESS_KEY in .env wins over `accessKey`.
   * The key (fk_…) is public by design: it only lets visitors send submissions to your form.
   */
  formgong: {
    accessKey: "fk_your_access_key",
    endpoint: "https://formgong.com/submit",
    subject: "New enquiry from the LUUCESSE website",
  },

  nav: [
    { label: "services", href: "/services/" },
    { label: "about", href: "/about/" },
    { label: "contact", href: "/contact/" },
  ],
  cta: { label: "Contact us", href: "/contact/#enquiry" },
} as const;

export type SiteConfig = typeof SITE;
