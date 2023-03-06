import create from "zustand";

export interface BountyProgram {
  name: string;
  slug: string;
  bountyProgramID: string;
  customTitle?: string;
  customDescription?: string;
  customHint?: string;
  hintLink?: string;
  disableHint?: boolean;
}
export interface BountyProgramState {
  programs: BountyProgram[];
  getByID: (id: string) => BountyProgram;
  getBySlug: (slug: any) => BountyProgram;
}

const programs = [
  {
    name: "Season 3 Community Brainstorming",
    slug: "season-3-community-brainstorming",
    bountyProgramID: "c90c96f0-1171-9754-cbb5-773e547a38ba",
  },
  {
    name: "In the News",
    slug: "in-the-news",
    bountyProgramID: "53ddfcc2-3921-41bc-b961-a77ec14efa94",
  },
  
  
  {
    name: "MetricsDAO",
    slug: "metricsdao",
    bountyProgramID: "095349d5-3bdf-3a98-1d1f-59e3a526b76b",
  },
  {
    name: "NEAR Protocol",
    slug: "near",
    bountyProgramID: "fad867cb-c0d2-79ce-c961-906062903f45",
  },
  {
    name: "Web3 Data Dictionary",
    slug: "web3-data-glossary",
    bountyProgramID: "dd79c6b5-f43a-54a1-8c4e-99f9c5dae517",
    customTitle: "Web3 Data Dictionary",
    customDescription: "Hey there web3 data analysts! \n We’re working with industry partners to come up with shared definitions around key web3 data concepts. \n And we are calling on you for help! \nShare web3 data terms you want to see in the glossary in this thread and earn xMETRIC.",
    customHint: "Click here to learn more",
    hintLink:"https://metricsdao.notion.site/Web3-Data-Glossary-750546b7d18447f39ac145f8e9532f4f"
  },
  {
    name: "Sushiswap",
    slug: "sushiswap",
    bountyProgramID: "dda4603f-a4c0-aaad-d158-4de1a621451a",
  },
  {
    name: "Aave v3",
    slug: "aave-v3",
    bountyProgramID: "9f550aff-5d3e-053a-8034-33df6573d9cd",
  },
  {
    name: "True Freeze",
    slug: "true-freeze",
    bountyProgramID: "24c602b5-a202-9c05-4465-5b0d37132401",
  },
  {
    name: "Hacks, Scandals and Scams",
    slug: "hacks-scandals-and-scams",
    bountyProgramID: "08274d93-6dba-cba6-5e27-926674c774ec",
  },
  {
    name: "MakerDAO",
    slug: "maker-dao",
    bountyProgramID: "eeb61fca-43f0-6cd6-cefc-6fcdd13342ba",
  },
  {
    name: "Goldfinch",
    slug: "goldfinch",
    bountyProgramID: "c1af1118-3163-a6b3-4b67-fc73ef7ff008",
  },
  
  {
    name: "Report Plagiarism",
    slug: "report-submission",
    bountyProgramID: "49927eef-fe6e-c39b-f1e6-012ab4bb9a2d",
    customTitle: "Report Plagiarized Submissions",
    customDescription:
      "Is your work plagiarized by another analyst? Please use the form below and report them.",
    disableHint: true,
  },
];

export const useBountyProgramStore = create<BountyProgramState>((set: any) => ({
  programs: programs,
  getByID: (id: string) => {
    const results = programs.filter((p) => p.bountyProgramID == id);
    return results[0];
  },
  getBySlug: (slug: any) => {
    const results = programs.filter((p) => p.slug == slug);
    return results[0];
  },
}));
