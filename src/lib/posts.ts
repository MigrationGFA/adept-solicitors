export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "USA" | "Nigeria" | "International" | "Corporate" | "Immigration" | "Real Estate";
  date: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "how-nigerians-can-start-businesses-in-texas",
    title: "How Nigerians Can Start Businesses in Texas",
    excerpt:
      "A practical, step-by-step guide for Nigerian entrepreneurs and diaspora founders launching companies in Texas — from entity choice to banking.",
    category: "USA",
    date: "March 18, 2025",
    readTime: "8 min read",
    body: [
      "Texas remains one of the most welcoming U.S. states for foreign-owned businesses. For Nigerian founders, the combination of no state income tax, business-friendly courts, and a large diaspora community makes it an ideal launchpad.",
      "Most Nigerian founders choose between a Texas LLC and a Delaware C-Corporation. LLCs offer simplicity and pass-through taxation; C-Corps are preferred when raising venture capital. We help clients model both before committing.",
      "After formation, you'll need an EIN, a registered agent, a U.S. bank account, and (in most cases) a BOI filing under the Corporate Transparency Act. Diaspora founders should also plan for ITIN issuance and proper documentation of cross-border ownership.",
      "The biggest avoidable mistakes we see are commingling of personal and business funds, missing BOI deadlines, and informal cap tables that complicate later fundraising. Each of these is preventable with the right legal foundation from day one.",
    ],
  },
  {
    slug: "buying-property-in-nigeria-as-a-diaspora-client",
    title: "Buying Property in Nigeria as a Diaspora Client",
    excerpt:
      "What every diaspora buyer should verify before transferring funds — and how to structure the transaction to protect title.",
    category: "Real Estate",
    date: "February 27, 2025",
    readTime: "10 min read",
    body: [
      "Diaspora property transactions are too often built on trust alone. The result, every year, is millions of dollars lost to double sales, fraudulent vendors, and defective title.",
      "Independent legal due diligence — done by counsel who answer only to you — is the single highest-leverage protection you can buy. It includes title search at the lands registry, physical inspection, vendor capacity verification, and confirmation of any encumbrances.",
      "Equally important is structuring payment milestones against documentary deliverables: deposit on signed contract of sale, balance on registrable deed, and final tranche on perfection of title with Governor's consent where applicable.",
      "Done correctly, a diaspora purchase is no riskier than a domestic one. Done casually, it is one of the most fraud-prone transactions in the market.",
    ],
  },
  {
    slug: "cross-border-transactions-explained",
    title: "Cross-Border Transactions Explained",
    excerpt:
      "How well-structured legal architecture turns cross-border deals from risky into routine.",
    category: "International",
    date: "February 12, 2025",
    readTime: "7 min read",
    body: [
      "A cross-border transaction is, at its core, multiple national legal systems applied to one commercial deal. The risk lives in the seams between them — and so does the opportunity.",
      "Good cross-border counsel does three things: aligns the deal documents with the chosen governing law and forum, anticipates enforcement realities in each jurisdiction, and coordinates closings so that conditions precedent are satisfied in the right order.",
      "We work with co-counsel relationships across the U.S., U.K., Canada, and West Africa to deliver a single coordinated experience to our clients.",
    ],
  },
  {
    slug: "international-dispute-resolution-explained",
    title: "International Dispute Resolution Explained",
    excerpt:
      "Litigation, arbitration, and the practical considerations behind choosing the right forum for cross-border disputes.",
    category: "International",
    date: "January 30, 2025",
    readTime: "9 min read",
    body: [
      "When a dispute crosses borders, the choice of forum often matters more than the merits. International arbitration under ICC, LCIA, or UNCITRAL rules is usually preferable to litigation in a foreign court — particularly where enforcement under the New York Convention is needed.",
      "Practical considerations include the seat of arbitration, the governing law of the contract, the language of the proceedings, and the appointment of arbitrators with subject-matter expertise.",
      "We advise clients on forum selection at the contract drafting stage and represent them through proceedings and enforcement when disputes arise.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
