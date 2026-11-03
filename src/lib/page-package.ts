import content from '../data/november-pages.json';
import { site } from './site';

export type Pair = [string, string];
export type Link = [string, string | null];
export interface PageContent {
  path: string;
  kind: 'service' | 'concern' | 'special' | 'club' | 'review' | 'about' | 'contact' | 'docs' | 'team';
  name: string; label?: string; seoTitle: string; metaDesc: string; h1: string; lede: string;
  heroPhoto: Pair; crumbs?: Link[]; answerEyebrow?: string; answerH2?: string; answer?: string;
  facts?: Pair[]; inclPhoto?: string; inclEyebrow?: string; inclH2?: string;
  included?: [string, string, string | null][]; also?: Link[]; alsoLead?: string;
  stepsH2?: string; steps?: Pair[]; faq?: Pair[]; related?: Link[];
  condition?: string; procType?: string; team?: 'general' | 'surgical' | 'sedation';
  compare?: { eyebrow: string; h2: string; intro: string; pill?: number; cols: string[]; rows: string[][] };
  results?: Pair[]; video?: boolean; offer?: Pair[];
  plans?: [string, number, string, string[]][]; savings?: [string, string, string[]][];
}

export const packageData = content;
const aliases = ['/services/emergency-dentistry/', '/services/clear-braces/'];
const groups = [content.services, content.concerns, content.patientPages, content.aboutContact, content.doctorsTeamPages];
export const packagePages: PageContent[] = groups.flatMap((group, index) => Object.entries(group)
  .filter(([path]) => path.startsWith('/') && !aliases.includes(path))
  .map(([path, entry]) => ({ kind: index === 0 ? 'service' : 'concern', ...entry, path }) as PageContent));
export const packageByPath = new Map(packagePages.map(page => [page.path, page]));
export const practiceLinks: Link[] = [['About us', '/about/'], ['Meet the doctors', site.doctorsUrl], ['Meet the team', site.teamUrl], ['Contact us', '/contact/']];
export const videoUrl = 'https://www.youtube.com/embed/izzYxNKXn2g';
export const videoWatchUrl = 'https://www.youtube.com/shorts/izzYxNKXn2g';
export const signupUrl = 'https://smileclub.cosmeticimplantdentistrywp.com/#getintouch';

export function breadcrumbs(page: PageContent): Link[] {
  return page.crumbs ?? [['Home', '/'], [page.kind === 'concern' ? 'Concerns' : 'Treatments', page.kind === 'concern' ? '/#expertise' : '/services/'], [page.name, null]];
}

export function pageSchema(page: PageContent) {
  const url = new URL(page.path, site.url).href;
  const graph: Record<string, unknown>[] = [{ '@type': 'BreadcrumbList', itemListElement: breadcrumbs(page).map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, item: new URL(href || page.path, site.url).href })) }];
  if (page.faq?.length) graph.push({ '@type': 'FAQPage', '@id': url + '#questions', mainEntity: page.faq.map(([name, answer]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  if (page.kind === 'service') graph.push({ '@type': page.procType || 'MedicalProcedure', name: page.name, description: page.answer, url });
  if (page.kind === 'concern') graph.push({ '@type': 'MedicalCondition', name: page.condition, description: page.answer, url, possibleTreatment: (page.path === '/concerns/snoring/' ? page.compare?.cols.slice(1) : page.compare?.rows.map(row => row[0]))?.map(name => ({ '@type': 'MedicalTherapy', name })) });
  if (page.kind === 'special') graph.push({ '@type': 'Offer', name: '$99 new patient special', price: 99, priceCurrency: 'USD', url, description: 'Exam, X-rays and cleaning. For new patients; call for details.', seller: { '@id': site.url + '#practice' } });
  if (page.kind === 'club') graph.push({ '@type': 'OfferCatalog', name: 'Smile Club membership plans', url, itemListElement: page.plans?.map(([name, price, description]) => ({ '@type': 'Offer', name: name + ' annual membership', price, priceCurrency: 'USD', description, url: url + '#join', seller: { '@id': site.url + '#practice' } })) });
  if (['about', 'docs', 'team'].includes(page.kind)) graph.push({ '@type': 'AboutPage', name: page.h1, url, about: { '@id': site.url + '#practice' } });
  if (page.kind === 'contact') graph.push({ '@type': 'ContactPage', name: page.h1, url, about: { '@id': site.url + '#practice' } });
  if (page.kind === 'docs') graph.push(...content.doctors.map(doctor => ({ '@type': 'Person', '@id': site.url + 'about/meet-the-doctors/#dr-' + doctor.k, name: content.people[doctor.k as keyof typeof content.people][1], jobTitle: doctor.role, url: site.url + 'about/meet-the-doctors/#dr-' + doctor.k, worksFor: { '@id': site.url + '#practice' }, hasCredential: doctor.creds.filter(([label]) => ['Education', 'Training', 'Board certified', 'Certification'].includes(label)).map(([category, name]) => ({ '@type': 'EducationalOccupationalCredential', credentialCategory: category, name })) })));
  return { '@context': 'https://schema.org', '@graph': graph };
}
