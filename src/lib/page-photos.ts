import type { ImageMetadata } from 'astro';
import { photos, gallery, services, technology } from './homepage';
import care from '../assets/round2/clinical-care.jpg';
import chair from '../../public/images/migrated/sedation-IMG_0569-scaled.jpg';
import implant from '../../public/images/migrated/restoration-1.png';
import veneers from '../../public/images/migrated/restoration-2.png';
import arch from '../../public/images/migrated/restoration-3.png';

const photoMap: Record<string, ImageMetadata> = {
  'A consultation at our Westport office': photos.consult,
  'A member of the dental team caring for a patient': care,
  'Large windows and natural light in a Westport treatment room': photos.office,
  'A woman smiling at our Westport practice': photos.smile,
  'Dental restorations being worked on in the lab': services[1].image,
  'An implant-supported denture': photos.implantDenture,
  'CBCT imaging equipment at the Westport practice': technology[0].image,
  "A nightguard made to fit a patient's teeth": services[0].image,
  'Care At Our Westport Office': chair,
  'The welcoming lobby at our Westport location': photos.hero,
  'The front desk at our Westport location': gallery[2].image,
  'Parking at our Westport location': gallery[3].image,
  'Single implant before and after': implant,
  'Veneers before and after': veneers,
  'Full arch restoration before and after': arch,
};
export function photoFor(alt: string): ImageMetadata {
  const photo = photoMap[alt.replaceAll('’', "'")];
  if (!photo) throw new Error('Missing page photograph: ' + alt);
  return photo;
}
