// Evidence: supplied resume plus public GitHub READMEs, reviewed 2026-10-08.
// Studio work is attributed separately in studio.ts; do not imply sole authorship.
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  code: string;
  companion?: { label: string; url: string };
  accent: string;
  symbol: string;
  contribution: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "stash",
    title: "Stash",
    category: "Systems tooling",
    description:
      "Encrypted backup and selective recovery for a macOS development setup.",
    stack: ["Go", "age encryption", "macOS", "CLI"],
    code: "https://github.com/HarshPatel5940/stash",
    accent: "green",
    symbol: "stash_",
    contribution: "Open-source developer tool",
    details: [
      "Brings dotfiles, development secrets, packages, Git repositories, and system preferences into one backup workflow.",
      "Uses age encryption and separate key storage, with dry-run previews and selective restore controls. Distributed through Homebrew and Go.",
    ],
  },
  {
    id: "nestop",
    title: "nestop",
    category: "Developer experience",
    description:
      "An interactive Go CLI for scaffolding a NestJS project around its requirements.",
    stack: ["Go", "NestJS", "Charmbracelet", "Docker"],
    code: "https://github.com/HarshPatel5940/nestop",
    accent: "orange",
    symbol: "> init",
    contribution: "Open-source CLI",
    details: [
      "Guides setup of HTTP adapters, databases, ORMs, storage, caching, and test frameworks through an interactive terminal interface.",
      "Generates project configuration, optional health and authentication endpoints, and Docker assets rather than starting every backend from scratch.",
    ],
  },
  {
    id: "verse",
    title: "Verse",
    category: "Meeting tools",
    description:
      "A meeting transcription and insights project, developed to the MVP stage.",
    stack: ["TypeScript", "Transcription", "Meeting insights"],
    code: "https://github.com/ProgrammingNotJustCoding/verse",
    accent: "blue",
    symbol: "voice_",
    contribution: "MVP · ProgrammingNotJustCoding",
    details: [
      "Built around voice transcription and meeting summaries, with fog computing described in my public project overview.",
      "Published as an MVP under ProgrammingNotJustCoding; the public repository links to the implementation.",
    ],
  },
  {
    id: "codeflick",
    title: "CodeFlick",
    category: "Developer tools",
    description:
      "A place for developers to share code and collaborate on Gists.",
    stack: ["Go", "Vue"],
    code: "https://github.com/HarshPatel5940/CodeFlick",
    accent: "orange",
    symbol: "{ }",
    contribution: "Designed & implemented",
    details: [
      "Built the platform primarily in Go, with Vue powering the frontend.",
      "Connected a developer-facing interface with the backend for sharing and collaborating on code.",
    ],
  },
  {
    id: "dhb",
    title: "DHB V2",
    category: "Bots & automation",
    description: "Moderation, music, and everyday utilities inside Discord.",
    stack: ["TypeScript", "Discord.js v14", "Lavalink"],
    code: "https://github.com/HarshPatel5940/dhb-v2",
    accent: "purple",
    symbol: "/play",
    contribution: "Built the Discord bot",
    details: [
      "Implemented moderation, music playback, and utility commands in TypeScript.",
      "Integrated Lavalink for music functionality, building on earlier bot work for freelance clients.",
    ],
  },
  {
    id: "marai",
    title: "Marai",
    category: "Workflow systems",
    description:
      "Legal workflows, from contract management to digital signatures.",
    stack: ["Go", "Echo", "MinIO", "Twilio"],
    code: "https://github.com/ProgrammingNotJustCoding/marai",
    accent: "green",
    symbol: "sign()",
    contribution: "Backend & integration",
    details: [
      "Spearheaded development of a legal workflow platform covering contract lifecycle management, custom digital signatures, and encryption.",
      "Contributed to the Go backend and its integrations using Echo, MinIO, and Twilio.",
    ],
  },
  {
    id: "keyshade",
    title: "Keyshade",
    category: "Open source",
    description:
      "Contributions across authentication, storage, and developer tooling.",
    stack: ["GitHub OAuth", "MinIO", "Sentry"],
    code: "https://github.com/keyshade-xyz/keyshade",
    accent: "blue",
    symbol: "git +",
    contribution: "Open-source contributor",
    details: [
      "Reported 5+ bugs and worked on the pricing page, MinIO client integration, and GitHub OAuth.",
      "Implemented Sentry, cleaned up Husky scripts, enabled optional GitHub module loading, and automated admin creation on startup.",
    ],
  },
  {
    id: "ezms",
    title: "EzMs",
    category: "Full-stack development",
    description:
      "A CMS built to explore the backend and frontend as one system.",
    stack: ["NestJS", "React", "TypeScript", "Prisma", "Supabase"],
    code: "https://github.com/HarshPatel5940/EzMs",
    companion: {
      label: "Frontend source",
      url: "https://github.com/HarshPatel5940/EzMs-Frontend",
    },
    accent: "orange",
    symbol: "API",
    contribution: "Backend & frontend",
    details: [
      "Developed the CMS API in NestJS and TypeScript, exploring Supabase, caching, testing, Prisma, and CI/CD.",
      "Built the accompanying React and TypeScript frontend to deepen experience across the full stack.",
    ],
  },
];
