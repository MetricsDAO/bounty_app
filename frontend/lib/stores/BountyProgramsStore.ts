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
