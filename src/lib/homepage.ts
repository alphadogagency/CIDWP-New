import type { ImageMetadata } from "astro";
import hero from "../assets/oct2026/osii-lobby.webp";
import osiiFrontDesk from "../assets/oct2026/osii-front-desk.webp";
import cidwpFrontDesk from "../assets/oct2026/cidwp-front-desk.webp";
import consult from "../assets/oct2026/consult.webp";
import implantDenture from "../assets/oct2026/implant-denture.webp";
import cbct from "../assets/oct2026/cbct.webp";
import printing from "../assets/oct2026/3d-print.webp";
import nightguard from "../assets/oct2026/nightguard.webp";
import lab from "../assets/oct2026/lab2.webp";
import smile from "../assets/oct2026/smile.webp";
import frontDesk from "../assets/oct2026/front-desk2.webp";
import parking from "../assets/oct2026/parking-lot2.webp";
import office from "../assets/practice-interior.jpg";
import clinical from "../assets/round2/clinical-care.jpg";
import veneers from "../assets/expertise/veneers.png";
import implants from "../assets/expertise/implants.png";
import crowns from "../assets/expertise/crowns.png";
import whitening from "../assets/expertise/whitening.png";
import aligners from "../assets/expertise/aligners.png";
import restoration from "../assets/expertise/restoration.png";
import emergency from "../assets/expertise/emergency.png";
import { serviceLinks, site } from "./site";

export const photos = { hero, osiiFrontDesk, cidwpFrontDesk, office, consult, implantDenture };

// Pam's October 19 placement notes. Printing copy avoids claims about specific
// appliances or turnaround times that the practice has not supplied.
export const technology = [
  { title: "A Clearer View With Digital X-Rays & 3D Imaging", description: "Digital X-rays and cone beam CT help us look beyond what we can see during an exam. Three-dimensional images provide another perspective as we talk through your dental health and the care you may need.", image: cbct, alt: "CBCT imaging equipment at the Westport practice", source: site.smileClubUrl },
  { title: "See What We See With Intraoral Cameras", description: "Small cameras let us take a closer look inside your mouth. Images can help make conversations about your teeth and treatment easier to follow.", image: clinical, alt: "A member of the dental team caring for a patient", source: site.smileClubUrl },
  { title: "Another Dimension With 3D Printing", description: "Our practice also uses 3D printing. Ask our team how this technology fits into the care we provide and what it could mean for your treatment.", image: printing, alt: "3D printing equipment at the Westport practice" },
];

export const services = [
  { id: "general-care", title: "Keep Your Smile Healthy", label: "Routine Dental Care", description: "From regular checkups and cleanings to fillings and mouth guards, we help you look after your teeth through every stage of life.", image: nightguard, alt: "A nightguard made to fit a patient's teeth", href: serviceLinks.general, cta: "Explore General Dentistry" },
  { id: "restorative-care", title: "Get Back To Smiling Comfortably", label: "Restorative Dentistry", description: "Missing or damaged teeth can make everyday life harder. Explore implants, crowns, bridges, and full-mouth restoration with a plan built around your needs.", image: lab, alt: "Dental restorations being worked on in the lab", href: serviceLinks.restoration, cta: "Explore Restorative Care" },
  { id: "cosmetic-care", title: "Make Your Smile Feel More Like You", label: "Cosmetic Dentistry", description: "Tell us what you’d like to change about your smile. We’ll walk through options such as veneers and whitening, with your preferences and goals in mind.", image: smile, alt: "A woman smiling at our Westport practice", href: serviceLinks.veneers, cta: "Explore Cosmetic Care" },
];

// Original illustrative service imagery plus two existing practice photos.
// Generation prompts and provenance: docs/expertise-imagery.md.
export const expertise: { label: string; href: string; image: ImageMetadata; position: string }[] = [
  { label: "Veneers", href: serviceLinks.veneers, image: veneers, position: "50% 50%" },
  { label: "Dental Implants", href: serviceLinks.implants, image: implants, position: "50% 50%" },
  { label: "Crowns & Bridges", href: serviceLinks.crowns, image: crowns, position: "50% 50%" },
  { label: "Teeth Whitening", href: serviceLinks.whitening, image: whitening, position: "50% 50%" },
  { label: "Clear Braces", href: serviceLinks.clearBraces, image: aligners, position: "50% 50%" },
  { label: "Full-Mouth Restoration", href: serviceLinks.restoration, image: restoration, position: "50% 50%" },
  { label: "General Dentistry", href: serviceLinks.general, image: clinical, position: "50% 44%" },
  { label: "Sedation Options", href: serviceLinks.sedation, image: office, position: "50% 50%" },
  { label: "Emergency Dentistry", href: serviceLinks.emergency, image: emergency, position: "50% 45%" },
];

export const gallery = [
  { image: office, alt: "Large windows and natural light in a Westport treatment room" },
  { image: hero, alt: "The Oral Surgery and Implant Institute lobby" },
  { image: frontDesk, alt: "The front desk at our Westport location" },
  { image: parking, alt: "Parking at our Westport location" },
];

export interface TrustBadge { name: string; image: ImageMetadata; href?: string }
// The review view reserves these positions without inventing affiliations.
export const trustBadges: TrustBadge[] = [];

export const reviewNeeds = [
  { section: "credentials", title: "Association + Award Logos", detail: "Please confirm the memberships and awards CIDWP may display and provide the approved logo files. No associations have been assumed." },
  { section: "contact", title: "Hours, Texting + Policy Links", detail: "The homepage and Smile Club list Mon–Thu 9–4; the contact page also lists Friday. Please confirm Friday hours, whether the phone accepts texts, and the HIPAA notice URL. Privacy and accessibility links come from the current site." },
];
