// src/content/projects.ts
export type Project = {
  type: "app" | "vr" | "extension";
  name: string;
  status: "Idea" | "Prototype" | "In Production" | "Released";
  link?: string;
  summary: string;
};

export const projects: Project[] = [
  { type: "app", name: "Meme Alarm (iOS)", status: "Idea", summary: "Alarm that plays custom audio." },
  { type: "vr", name: "Maze Stalker (VR)", status: "Prototype", summary: "AI breaks walls and hunts." },
  { type: "extension", name: "IG Lock Puzzle", status: "Idea", summary: "Solve a puzzle to unlock Instagram." },
];