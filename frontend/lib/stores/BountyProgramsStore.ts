import create from "zustand";

export interface BountyProgram {
  name: string;
  slug: string;
  bountyProgramID: string;
}
export interface BountyProgramState {
  programs: BountyProgram[];
  getByID: (id: string) => BountyProgram;
  getBySlug: (slug: any) => BountyProgram;
}

const programs = [
  {
    name: "Harmony",
    slug: "harmony",
    bountyProgramID: "16b49c12-cf07-0df5-c5b0-c7cdcfe12eb5", // canny id
  },
  {
    name: "Aave v3",
    slug: "aave-v3",
    bountyProgramID: "9f550aff-5d3e-053a-8034-33df6573d9cd",
  },
  {
    name: "Biconomy",
    slug: "biconomy",
    bountyProgramID: "c1f62581-dc7b-125a-6f35-1bfb0ee89215",
  },
  {
    name: "Bancor v3",
    slug: "bancor-v3",
    bountyProgramID: "588a1f50-40f3-3b23-be33-35c49a39721f",
  },
  {
    name: "True Freeze",
    slug: "true-freeze",
    bountyProgramID: "24c602b5-a202-9c05-4465-5b0d37132401",
  },
  {
    name: "Nouns DAO",
    slug: "nouns-dao",
    bountyProgramID: "fad83cf2-c77d-9d46-2e7e-744ee3fa8bfe",
  },
  {
    name: "UMA Protocol",
    slug: "uma-protocol",
    bountyProgramID: "6f693a02-7be2-5698-6feb-989a2d244d1c",
  },
  {
    name: "NEAR",
    slug: "near",
    bountyProgramID: "fad867cb-c0d2-79ce-c961-906062903f45",
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
