# October Client Updates

Implemented from Pam Iseminger's October 19, 2026 email, “Quick Update on CIDWP Website Revamp,” and authorized by Bryan on October 20. Bryan also authorized using Dr. Patrick Lucaci's published provider portrait.

## Photos And Placement

Source folder: https://drive.google.com/drive/folders/1OnSfkdVnWSDngmEm_vtpThv9sZ0kTSDb

| Section | Supplied Photo |
| --- | --- |
| Homepage banner | OSII Lobby, with a darker overlay behind the navigation and text |
| Get To Know Your Dental Team | OSII Front Desk and CIDWP Front Desk |
| We Make Time For The Details | Consult |
| Let's Talk About Dental Implants | Implant Denture (the exact named file, not the two variants) |
| Digital X-Rays & 3D Imaging | CBCT |
| Intraoral Cameras | Existing photo retained |
| 3D Printing | 3D Print |
| Keep Your Smile Healthy | Nightgaurd |
| Get Back To Smiling Comfortably | Lab2 |
| Make Your Smile Feel More Like You | Smile |
| Make Yourself Comfortable | Existing operatory photo, OSII Lobby, Front Desk2, Parking Lot2 |

The four-photo gallery follows the latest placement list and supersedes the earlier request for roughly ten images. Review-only photo placeholders and fulfilled asset requests are removed.

Original photographs are optimized into `src/assets/oct2026/`. Astro creates responsive image variants. No treatment results, printer capabilities, appliance types, or turnaround promises are inferred from the photos.

The supplied 3D Print asset is animated; the site uses a clear still frame for the technology card. Front-desk and smile photos have explicit focal positions to keep faces visible in responsive crops.

## Staff And Onsite Care

- Remove RiAnne from the rendered homepage and team page.
- Replace Konner's portrait and retain Patient Care Coordinator.
- Add Nichole, Patient Care Coordinator, and Jen, Oral Surgery Assistant.
- Retain Chrissy and Rachel.
- Add Dr. Owen Lonergan and Dr. Patrick Lucaci, Oral Surgeons, with provider links.
- Keep Dr. Hunter McAreavy's existing doctor-page biography and portrait.
- Add “Visit Our Onsite Medspa” linking to https://www.816medspa.com/.
- Add “We Offer Oral Surgery Onsite” linking to https://oralsurgerykc.com/.
- Both oral surgeons' biographies are on https://oralsurgerykc.com/about-us/.
- Dr. Lucaci's approved portrait source: https://oralsurgerykc.com/wp-content/uploads/2023/09/internal_meetdrlucaci.jpg

`src/lib/team.ts` supplies the current roster to the homepage, team page, and doctor-page surgeon cards. `TeamPortraits.astro` renders the shared cards. The team page's historical imported profile section is replaced at render time; the dated source captures and generated migration data remain intact, so running the importer does not undo these updates.

## Verification Scope

The migration verifier still compares all 43 interior pages to the October 6 captures. The team-page comparison explicitly excludes RiAnne's removed profile and biography and expects the approved Konner portrait plus optimized copies of Chrissy and Rachel. It also requires the current roster and surgeon links on the affected pages. Other original copy, links, media, and local destinations remain covered.

The remaining internal-review requests concern association/award logos and the previously unresolved hours, texting, and HIPAA-link details. Jotform remains a separate pending integration.

## Verification Results

- Existing automated tests: 11 passed.
- Astro diagnostics: 46 files checked, no errors, warnings, or hints.
- Production build: successful.
- Migration verification: 43 interior pages, 1,388 copy checks, 185 link checks, and 91 asset checks; no issues.
- Browser review: desktop and 390px mobile layouts, current team and doctor pages, gallery open/close and Escape, mobile navigation, and new outbound link destinations.
- No horizontal overflow on the affected mobile pages; browser console checks returned no errors or warnings.

Bryan approved publication on October 20, 2026. Source commit `92684e1` was pushed to `main` and published to https://cidwp-new.pages.dev/ through the existing `cidwp-new` Cloudflare Pages production project.

The Git push did not start a Cloudflare deployment. GitHub reported that the repository had moved to `alphadogagency/CIDWP-New`. Publication used the existing authenticated Wrangler connection instead:

```sh
CLOUDFLARE_ACCOUNT_ID=ea6886430ff777f0b690f6805628cecd npx wrangler pages deploy dist --project-name cidwp-new --branch main
```

Deployment: https://52d03cf3.cidwp-new.pages.dev/. The upload included the Pages Functions bundle and redirects. Live checks confirmed the updated homepage, team and doctor pages, surgeon links, and the existing Google reviews API (HTTP 200, five reviews). The automatic Git deployment connection should be checked before relying on a future push to publish.
