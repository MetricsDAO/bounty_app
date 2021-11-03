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
    name: "Olympus DAO",
    slug: "olympus-dao",
    bountyProgramID: "82b792af-3d61-3cc8-9c7e-317438dc45c0",
  },
  {
    name: "Harmony",
    slug: "harmony",
    bountyProgramID: "5a386b06-ae74-90a3-b740-959850b2275b",
  },
];

export const useBountyProgramStore = create<BountyProgramState>((set) => ({
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
