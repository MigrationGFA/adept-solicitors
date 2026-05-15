export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    blurb: "Upstream, midstream, and downstream legal counsel across the Nigerian energy sector.",
    description:
      "We advise operators, service companies, financiers, and host communities on the full lifecycle of oil and gas matters — from licensing and JOAs to local content compliance, transactions, and disputes.",
    highlights: ["Licensing & regulatory", "JOAs & PSCs", "Local content", "Energy disputes"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Secure property transactions, title perfection, and developer counsel.",
    description:
      "From single-family diaspora purchases to large mixed-use developments, we de-risk Nigerian real estate with rigorous due diligence and proper title perfection.",
    highlights: ["Title verification", "Sale & lease", "Diaspora purchases", "Developer counsel"],
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    blurb: "Lender and borrower-side counsel on structured, project, and trade finance.",
    description:
      "We structure and document financings that hold up under scrutiny, from bilateral loans to syndicated and multi-jurisdiction project finance.",
    highlights: ["Loan documentation", "Security perfection", "Project finance", "Workouts"],
  },
  {
    slug: "technology-startups",
    name: "Technology & Startups",
    blurb: "Counsel for African and diaspora founders building venture-backed companies.",
    description:
      "We help founders incorporate properly, raise capital cleanly, and operate compliantly across borders — from Delaware C-Corps to Nigerian operating subsidiaries.",
    highlights: ["Incorporation", "SAFE & equity rounds", "IP & licensing", "Cross-border ops"],
  },
  {
    slug: "maritime",
    name: "Maritime",
    blurb: "Admiralty, shipping, and offshore counsel for Nigerian and international operators.",
    description:
      "We represent vessel owners, charterers, financiers, and cargo interests on registration, disputes, and regulatory matters across Nigerian ports.",
    highlights: ["Vessel registration", "Arrest & release", "Cargo claims", "NIMASA matters"],
  },
  {
    slug: "immigration",
    name: "Immigration",
    blurb: "Corporate and personal immigration across Nigeria and partner jurisdictions.",
    description:
      "Whether relocating teams, securing investor visas, or guiding diaspora return, our immigration practice handles the documentation and the people behind it with equal care.",
    highlights: ["Business visas", "Expatriate quota", "Citizenship", "Diaspora return"],
  },
];
