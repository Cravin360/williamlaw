export type LawyerProfile = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  brief: [string, string, string];
  bio: string;
  experience: string[];
  email: string;
  phone: string;
  linkedin: string;
  x: string;
  location: string;
  imageSrc: string;
};

export const lawyers: LawyerProfile[] = [
  {
    slug: "william-carter",
    name: "William Carter",
    role: "Founding Partner",
    focus: "Corporate, governance, and strategic transactions",
    brief: [
      "Advises boards, founders, and investors on growth-stage strategy.",
      "Leads major transactions with calm and commercially grounded judgment.",
      "Known for clear execution on complex, high-stakes legal decisions.",
    ],
    bio: "William works closely with founders, boards, and investors on corporate structuring, governance design, strategic transactions, and sensitive legal decisions. He combines disciplined execution with practical legal judgment so clients can move with confidence during periods of growth, negotiation, and change.",
    experience: [
      "Board governance and shareholder strategy",
      "Mergers, acquisitions, and fundraising support",
      "Cross-border expansion and transaction structuring",
    ],
    email: "william.carter@williamdexterlaw.com",
    phone: "+1 (555) 201-4401",
    linkedin: "https://www.linkedin.com/in/william-carter-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc:
      "/images/ai-generative-happy-businessman-standing-with-arms-crossed-isolated-on-white-background-free-photo.jpg",
  },
  {
    slug: "dexter-reid",
    name: "Dexter Reid",
    role: "Managing Partner",
    focus: "Disputes, regulatory strategy, and crisis response",
    brief: [
      "Supports clients facing disputes, investigations, and urgent exposure.",
      "Builds response strategy around risk, evidence, and business continuity.",
      "Trusted for direct advice in contentious and fast-moving matters.",
    ],
    bio: "Dexter advises on disputes, investigations, crisis-sensitive matters, and regulatory response. His work focuses on helping leadership teams protect business interests, manage exposure, and make strong decisions under pressure with practical, well-structured legal guidance.",
    experience: [
      "Commercial disputes and pre-action strategy",
      "Regulatory engagement and enforcement response",
      "Crisis management for sensitive business matters",
    ],
    email: "dexter.reid@williamdexterlaw.com",
    phone: "+1 (555) 201-4402",
    linkedin: "https://www.linkedin.com/in/dexter-reid-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/images (2).jfif",
  },
  {
    slug: "amelia-grant",
    name: "Amelia Grant",
    role: "Partner",
    focus: "Employment, investigations, and workplace risk",
    brief: [
      "Guides employers through investigations and executive transitions.",
      "Advises on workplace policy, compliance, and sensitive people issues.",
      "Brings a calm, business-focused style to complex employment matters.",
    ],
    bio: "Amelia supports boards, founders, and leadership teams on internal investigations, executive transitions, workplace policy, and employment disputes. Her practice blends legal precision with pragmatic advice that helps clients address sensitive issues carefully and decisively.",
    experience: [
      "Internal investigations and grievance response",
      "Executive exits, discipline, and workplace governance",
      "Employment disputes and policy modernization",
    ],
    email: "amelia.grant@williamdexterlaw.com",
    phone: "+1 (555) 201-4403",
    linkedin: "https://www.linkedin.com/in/amelia-grant-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/download (1).jfif",
  },
  {
    slug: "samuel-hayes",
    name: "Samuel Hayes",
    role: "Partner",
    focus: "Commercial contracts, technology, and compliance",
    brief: [
      "Helps businesses structure contracts that support scale and control.",
      "Advises on technology, operations, and legal process design.",
      "Focuses on practical compliance for fast-moving commercial teams.",
    ],
    bio: "Samuel advises businesses on commercial contracts, technology-driven operations, regulatory obligations, and scalable legal processes. He is focused on producing advice that teams can use quickly, clearly, and confidently in active commercial environments.",
    experience: [
      "Commercial contracts and procurement strategy",
      "Technology transactions and operational controls",
      "Compliance frameworks for evolving businesses",
    ],
    email: "samuel.hayes@williamdexterlaw.com",
    phone: "+1 (555) 201-4404",
    linkedin: "https://www.linkedin.com/in/samuel-hayes-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/download (2).jfif",
  },
  {
    slug: "naomi-cole",
    name: "Naomi Cole",
    role: "Senior Associate",
    focus: "Private client advisory and family office matters",
    brief: [
      "Advises private clients on wealth, succession, and asset protection.",
      "Works closely with family offices on structuring and long-term planning.",
      "Known for discretion, detail, and steady client communication.",
    ],
    bio: "Naomi advises private clients, entrepreneurs, and family offices on succession planning, asset protection, and sensitive personal legal matters. Her approach is discreet, detail-oriented, and shaped around long-term client objectives.",
    experience: [
      "Private client structuring and succession planning",
      "Family office advisory and wealth coordination",
      "Asset protection and personal legal strategy",
    ],
    email: "naomi.cole@williamdexterlaw.com",
    phone: "+1 (555) 201-4405",
    linkedin: "https://www.linkedin.com/in/naomi-cole-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/2.jfif",
  },
  {
    slug: "ethan-brooks",
    name: "Ethan Brooks",
    role: "Senior Associate",
    focus: "Projects, infrastructure, and public sector advisory",
    brief: [
      "Supports infrastructure, development, and public-facing mandates.",
      "Advises on procurement structure and delivery risk allocation.",
      "Keeps legal strategy aligned with implementation realities.",
    ],
    bio: "Ethan works on projects, infrastructure, procurement, and public sector advisory. He helps clients navigate delivery risk, contract structure, and implementation planning with legal advice that is practical and commercially aware.",
    experience: [
      "Infrastructure and project delivery support",
      "Procurement structuring and bid documentation",
      "Risk allocation across complex project contracts",
    ],
    email: "ethan.brooks@williamdexterlaw.com",
    phone: "+1 (555) 201-4406",
    linkedin: "https://www.linkedin.com/in/ethan-brooks-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/images.jfif",
  },
  {
    slug: "olivia-bennett",
    name: "Olivia Bennett",
    role: "Associate",
    focus: "Regulatory reviews, licensing, and compliance operations",
    brief: [
      "Works on licensing, filings, and operational compliance reviews.",
      "Helps clients track obligations across regulated business functions.",
      "Brings organized, timely support to ongoing legal compliance work.",
    ],
    bio: "Olivia supports clients on licensing, regulatory filings, compliance reviews, and day-to-day legal operations. She helps businesses maintain structure, consistency, and readiness across regulated workflows and legal reporting obligations.",
    experience: [
      "Licensing applications and regulatory submissions",
      "Compliance reviews and internal policy support",
      "Operational legal processes for regulated teams",
    ],
    email: "olivia.bennett@williamdexterlaw.com",
    phone: "+1 (555) 201-4407",
    linkedin: "https://www.linkedin.com/in/olivia-bennett-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/images (3).jfif",
  },
  {
    slug: "daniel-frost",
    name: "Daniel Frost",
    role: "Associate",
    focus: "Commercial advisory, contract review, and risk support",
    brief: [
      "Supports commercial teams on contracts, risk, and documentation.",
      "Reviews deal terms with a focus on clarity and operational value.",
      "Helps keep day-to-day legal work practical and responsive.",
    ],
    bio: "Daniel works on commercial advisory matters, contract review, and risk-sensitive documentation. He supports clients who need practical legal input on ongoing business activity, negotiations, and internal legal processes.",
    experience: [
      "Contract review and negotiation support",
      "Commercial advisory for active business teams",
      "Risk spotting across business-facing legal documents",
    ],
    email: "daniel.frost@williamdexterlaw.com",
    phone: "+1 (555) 201-4408",
    linkedin: "https://www.linkedin.com/in/daniel-frost-law",
    x: "https://x.com/williamdexterlaw",
    location: "London",
    imageSrc: "/images/download.jfif",
  },
];

export function getLawyerBySlug(slug: string) {
  return lawyers.find((lawyer) => lawyer.slug === slug);
}
