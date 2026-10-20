import type { ImageMetadata } from "astro";
import konner from "../assets/oct2026/konner.webp";
import nichole from "../assets/oct2026/nichole.webp";
import jen from "../assets/oct2026/jen.webp";
import owen from "../assets/oct2026/owen-lonergan.webp";
import patrick from "../assets/oct2026/patrick-lucaci.webp";
import rachel from "../assets/round2/rachel-converse.jpg";
import chrissy from "../assets/round2/chrissy.jpg";
import { site } from "./site";

export interface TeamMember {
  image: ImageMetadata;
  name: string;
  role: string;
  href?: string;
  position?: string;
}

// Current roster supplied by Pam on October 19, 2026.
export const staff: TeamMember[] = [
  { image: konner, name: "Konner Lawson", role: "Patient Care Coordinator" },
  { image: nichole, name: "Nichole", role: "Patient Care Coordinator" },
  { image: chrissy, name: "Chrissy", role: "Dental Assistant" },
  { image: rachel, name: "Rachel Converse", role: "Registered Dental Hygienist" },
  { image: jen, name: "Jen", role: "Oral Surgery Assistant" },
];

export const surgeons: TeamMember[] = [
  { image: owen, name: "Dr. Owen Lonergan", role: "Oral Surgeon", href: site.surgeonProfilesUrl },
  { image: patrick, name: "Dr. Patrick Lucaci", role: "Oral Surgeon", href: site.surgeonProfilesUrl },
];

export const teamPortraits = [...staff, ...surgeons];
