export const site = {
  name: "Adept Consultants",
  legal: "Adept Legal Practitioners & Consultants",
  domain: "adeptllc.com",
  tagline: "Cross-Border Legal Solutions Between Texas & Nigeria",
  phones: ["469-217-9855", "469-479-7515"],
  fax: "469-217-9877",
  email: "adeptchambers@gmail.com",
  address: {
    line1: "5465 Legacy Drive, Ste 650",
    line2: "Plano, Texas 75024",
    country: "United States",
  },
  hours: "Mon – Fri · 9:00 AM – 6:00 PM CT",
  whatsapp: "+12134567890",
};

export type ServiceMeta = {
  slug: string;
  title: string;
  blurb: string;
  region: "USA" | "Nigeria" | "International";
  handles: string[];
  benefits: string[];
};
