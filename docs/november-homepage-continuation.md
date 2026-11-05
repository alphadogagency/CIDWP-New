# November homepage continuation

## Active authorization — November 3, 2026

Bryan chose **Follow William's new brief** (sentence case), reviewed the local homepage, and on November 3 explicitly said **“I approve of everything. It is done.”** He authorized this chat to finish the remaining supplied page package locally. After reviewing the completed package, Bryan explicitly approved all the new work and requested **“commit, push to main, and deploy.”** Publication to the existing `cidwp-new` Cloudflare Pages project is now authorized, with the current Eve/Cherry links retained while William's answer is pending. This records Bryan's approval and alternate authorization path, not William/Kyle/client approval. The earlier homepage-only and local-only holds are superseded. Do not retire/redirect external domains, send stakeholder messages, or change calendar status/hours. Pam's October photo/staff work and email draft are historical completed work.

Active assignment: `2026-11-03/cidwp/remaining-package-after-bryan-approval`, received from ADA Daily Work. ADA item `f442c64a-e5e4-4794-833b-b677f421ab95` remains coordinator-owned.

**Current result:** approved code is committed, pushed to `main`, and published at **https://cidwp-new.pages.dev/**. Application commit `ab45988bf5b5fc0f594330c5879b88e5b325c7e8`; Cloudflare production deployment `80628050-ae95-4a6b-825c-8f218d1fc6bf`. Public verification, including real Google aggregate rating/count, passed. Earlier local-only status notes below describe the pre-publication checkpoints. See the publication record at the end for current evidence.

Source clarification: Bryan reported that William confirmed in person that the entire delivered MD/assets folder should contain everything needed to finish. Treat its page copy, structured data, selected layouts, and assets as the current build source. Reconcile all relevant files, cross-references, existing source material and prior answers before raising a specific material gap. Older open-question bullets are not automatically blockers; use explicit newer answers. This does not establish clinical review or unknown business facts.

## Sources

- Verified materials: `/Users/bryanarambula/Documents/Codex/2026-11-01/okay-just-very-quickly-in-my/outputs/agency-coordination/cidwp-intake-2026-11-03/materials/`
- Main brief in that folder: `cidwp-homepage-feedback-for-bryan.md`
- Coordinator audit: `/Users/bryanarambula/Documents/Codex/2026-11-01/okay-just-very-quickly-in-my/outputs/agency-coordination/cidwp-intake-2026-11-03/brief.md`
- Original complete delivery: `/Users/bryanarambula/Downloads/cidwp-handoff-for-bryan/`
- Preview source is a visual reference only; never execute or ship its injected override scripts or experimental toggles.

## Chosen direction and limits

Charcoal, Cormorant Garamond/Manrope, full-width clinical-care hero, truthful Google review strip, gold Block photo backing, Pair team photos, Cards technology, Tiles treatments, real rounded photos, fewer duplicate CTAs, readable footer, responsive mobile layouts. Use supplied Hunter portrait and existing source photography. Keep booking, phone, live reviews and working links intact.

Extend the approved design to 14 canonical service pages, 13 concerns, Specials, Smile Club, Review, About, Contact, Doctors and Team; complete navigation/index/routing/SEO/404 and accessible interactions. Investigate aggregate Google rating/count through the existing integration, using only actual values. Keep the agreed lab-photo stand-in. Recover Smile Club's existing form destination if verifiable, otherwise retain a working signup link. No external subdomain retirement or redirects. Reconcile hours, financing, fine print and credentials from the full package and current sources; omit unsupported claims and preserve working integrations where needed.

## Homepage phase — implemented locally, November 3

William's homepage/shared-styling pass is implemented and tested. Review at **http://127.0.0.1:4335/**. The browser deliverable is left open. Nothing has been committed, pushed or published for this pass; the public preview still shows the October design.

The background Astro server is PID 54780, bound only to 127.0.0.1. Started with `npm run dev -- --background --host 127.0.0.1 --port 4335 --force`. Earlier task-owned servers were stopped. Sandbox process inspection incorrectly reported the earlier servers as stopped, and their file watchers did not refresh modules; restarting with normal host process access resolved this. Use `astro dev status`, `astro dev logs`, and `astro dev stop` with host process access when managing this server.

### Implemented

- Self-hosted Cormorant Garamond and Manrope, with OFL licenses; charcoal, beige, gold and accessible teal small text. Source text uses sentence case on the homepage and shared UI.
- Clinical-care hero with a continuous fade, solid white header, truthful Google review strip, exactly four gold photo blocks, Pair front-desk photos and the delivered Hunter portrait in the avatar row.
- Tiles with seven real practice/case photos. The three results crops remove the before half and baked-in labels (top 53%, bottom 14%); the original comparison files remain intact. Clear braces and emergency retain the existing illustrations.
- Contained service rows and treatment chips, beige technology Cards, a smaller secondary denture image, office photo chips/lightbox, amenities, parking FAQ/location line, consistent portraits and mobile swipe rows.
- Three review cards on desktop, one-card mobile navigation/swiping, full-text expansion and existing Google attribution/fallback. The existing backend is unchanged. A Vite development-only proxy reads the public `/api/google-reviews` endpoint so the local review can show actual Google results without local credentials.
- Duplicate appointment bands removed; one inset charcoal closing CTA and a readable 15px footer. Existing booking, phone, Smile Club, medspa and surgeon destinations remain intact.
- Shared interior charcoal heroes, typography, rounded photos/cards, first eligible content-photo gold block, recolored existing service SVG icons and CTA bands. The Specials flyer still displays uncropped. Financing widget colors/fonts were aligned using its existing style options; its provider/configuration was preserved.
- Dentist identity/address/phone schema added without unresolved hours, ratings or clinical-review claims. Imported interior text/data and the later content package remain unchanged.

### Verification completed

- `npm run astro -- check`: 47 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: 47 pages built successfully after final styling changes.
- `npm test`: all 11 existing Google review tests passed.
- `npm run content:verify`: all 43 migrated interior pages; 1,388 copy, 185 link and 91 asset checks; no issues. The script's date field remains the historical October baseline, while this run was November 3.
- `git diff --check`: clean.
- Actual browser review at 1440 × 1000 and 390 × 844. No horizontal page overflow or broken loaded homepage photographs. Hero plus proof strip fills the desktop viewport within rounding.
- Verified mobile menu → General Dentistry, technology keyboard scrolling, review next/previous and Read more/Show less, parking FAQ, gallery open and Escape close, and preserved booking/telephone destinations. Live review state showed five actual reviews; fallback excerpts also rendered correctly before the development proxy was enabled.
- Representative shared-style checks: About (desktop photo block), General Dentistry, Services index, Team, Doctors, Contact and Specials on mobile. Seven staff portraits retained; Specials natural aspect ratio/`object-fit: contain`/unlimited height retained.
- No browser console warnings or errors observed. Temporary viewport override reset.

### Evidence and source ownership

Screenshots are in `docs/verification/november-homepage/`: `desktop-home.jpg`, `desktop-full.jpg`, `desktop-about.jpg`, `mobile-home.jpg`, `mobile-pair.jpg`, `mobile-treatments.jpg`, `mobile-faq.jpg`, `mobile-service.jpg`, and `mobile-specials.jpg`.

Main changes: `src/styles/global.css`, new `src/styles/homepage.css`, `src/styles/interior.css`; existing homepage/shared Astro components plus new `ReviewStrip.astro`; `src/lib/homepage.ts`, `site.ts`, `theme.config.ts`; review carousel client code, Layout metadata/font loading and development proxy. Supplied/cropped assets live in `src/assets/nov2026/`; font files/licenses in `public/fonts/`. Eleven existing migrated service SVGs have only their teal fill changed to charcoal. `src/data/pages.json` is unchanged.

## Local-stage constraints (before publication)

The existing Google reviews API supplies selected individual reviews, not an aggregate rating/count. Do not invent these. Preserve current hours and financing destinations; do not assert free parking or medical review approval without evidence.

No implementation blocker remains for this local review. The review strip/footer link to genuine patient reviews without a fabricated overall score/count. A sharper clinical hero and well-lit 3D printer photo would improve the final photography; the delivered/current stand-ins are in use. The 3D printing card accurately labels its lab photo as lab restorations in alt text.

## Remaining-page package — active November 3

Build the supplied service, concern, patient and practice pages using reusable templates and shared data. Complete a route checklist with completed/deferred work, build/type/review checks, desktop/mobile review of every template and representative variants, links/assets/metadata/schema/forms/404 checks, screenshots and a working local URL. No new homepage-design approval is needed. Source-supported independent work continues if one exact detail remains unresolved.

This phase is now complete for local review; see the final checklist below. The phase-one evidence above remains valid for its recorded scope, with separate verification for the new templates.

### Remaining package progress

- 34 canonical package entries now feed reusable Astro templates: 14 services, 13 concerns, and 7 patient/practice pages. Package source is `src/data/november-pages.json`; the original delivery is unchanged.
- Added service/concern hero, overview/facts, included list/photo, comparison tables, selected results layouts, steps, costs, care-team sets, FAQ and related/location components. Added patient and practice variants, doctor profiles/anchors, team filters, all-services index, sitemap integration, robots and custom 404. Navigation now follows the selected mega-menu structure.
- Source checks: current Smile Club prices/benefits and OSII/ECare/CAPI partner names match the package; original/current sedation source supports Baker's ECare role, Missouri sedation certification and 1–2 days/month; provider page supports both surgeons' board certification. Lucaci's provider page still uses two school names; retain the package's broader “MD, University of Missouri” without adding a more specific unsupported campus assertion.
- Framer signup is at `https://smileclub.cosmeticimplantdentistrywp.com/#getintouch`. Its published runtime exposes a Framer-managed submission action rather than a portable contact backend. Keep that working signup destination; no local form or simulated success. External subdomain unchanged.
- Free parking and medical-review approval are not asserted. Current Mon–Thu 9–4 remains the shared display; no schema hours added. Specials only uses “For new patients. Call for details.”
- Corrected the cleaning copy's unsupported universal ADA six-month attribution to individualized intervals, consistent with ADA MouthHealthy guidance. No new clinical services inferred.
- Applying the Google reviews skill to extend the existing endpoint with `rating,userRatingCount` and guarded aggregate normalization, sharing one in-memory request per document. Thirteen endpoint tests pass. No local credentials exist; local preview still proxies the unchanged published endpoint, which has real individual reviews but no aggregate fields. Aggregate feature requires an authorized deployment or private local runtime to validate with actual new fields; truthful fallback remains.
- **Bryan's direct answer:** keep the current payment links (header/nav Eve, existing Payment Plans page Cherry). At completion draft an email to William asking which provider to use consistently, plus any other specific unresolved items. Do not send it. This is an explicitly accepted deferral, not a blocker to independent work.
- Initial new-template type check: 68 files, no errors/warnings/hints. The final checks below supersede this initial result.

### Verification refinements and source notes

- The Framer form was reached in the browser through the new page's signup button, with visible Name, Email, Phone and Plan fields. No submission was made. Its runtime requires Framer site ID, proof-of-work headers and its anti-spam flow (`Mu` in the published Framer runtime), so copying only the exposed action would not create a supported local form. Existing hosted form retained under the assignment's fallback path.
- Local and published Google endpoints each returned HTTP 200, five real five-star reviews, `Cache-Control: no-store`, and no aggregate field. The new Review page displayed live state, five cards, next/previous and expansion successfully. New aggregate fields are implemented/tested but not deployed.
- New local custom 404 returns 404 (not the homepage); existing emergency/clear-braces aliases return 301 to their canonical routes; robots returns 200.
- Medical copy accuracy refinements are limited and documented: individualized checkup intervals instead of an unsupported blanket ADA six-month attribution; distinguish obstructive sleep apnea and physician-selected oral appliance candidacy; avoid a blanket noisy-CPAP comparison; distinguish permanent versus baby teeth in emergency first aid. Sources: https://www.mouthhealthy.org/dental-care/questions-about-going-to-the-dentist , https://www.mouthhealthy.org/all-topics-a-z/dental-emergencies , https://www.aasm.org/resources/clinicalguidelines/oral_appliance-osa.pdf . These are factual checks, not a claim that the practice medically reviewed the new pages.
- Snoring comparison uses features as rows, unlike the other tables. Its MedicalCondition schema correctly names oral appliance/CPAP therapies from the columns, not “Noise” or “Size.”

## Final remaining-package checklist — November 3, 2026

**Complete locally, ready for Bryan's review.** Homepage plus the remaining 34 canonical package pages are implemented. Working preview: **http://127.0.0.1:4335/**; the browser is left at `/services/`. No commit, push, deployment, stakeholder message, external domain change, or ADA scheduling/status/hours update was made.

| Portion | Result |
| --- | --- |
| 14 service pages | Complete, including full-mouth restoration and sedation canonical routes |
| 13 concern pages | Complete, with treatment comparisons, FAQ and related care |
| 7 patient/practice pages | Specials, Smile Club, Review, About, Contact, Doctors and Team complete |
| Shared navigation and index | Desktop mega menus, mobile accordions, 14-service directory, human/XML sitemaps, robots and custom 404 complete |
| Metadata and schema | Canonicals, descriptions, breadcrumbs, appropriate page/medical/offer/person schema checked; no unsupported hours, aggregate review schema or medical-review approval claims |
| Existing routes and content | 20 retained legacy pages verified; 23 former routes intentionally replaced by the November package; legacy aliases preserved |
| Smile Club | Local content complete; signup intentionally continues to the verified existing Framer form. No subdomain retirement/redirect or invented local backend |
| Google reviews | Live individual reviews verified locally. Aggregate rating/count code and validation implemented; actual new-field runtime verification deferred until authorized deployment/private runtime access |
| Financing | Current Eve navigation destination and Cherry Payment Plans page preserved at Bryan's explicit direction. William question drafted below |
| Photography | Supplied/current photos used; agreed lab-photo stand-in retained. Original results composites preserved on inner pages |

The per-route checklist is `docs/verification/november-pages/route-checks.json` (all 34 passed). Browser evidence is `docs/verification/november-pages/browser-checks.json`, plus screenshots in that directory.

### Final checks

- `npm run astro -- check`: 69 files, 0 errors, 0 warnings, 0 hints.
- `npm run build`: 61 pages built successfully, including redirects and utility pages; final build after copy refinements completed at 17:00 local time.
- `npm test`: 13 Google review endpoint tests passed, including separate aggregate validation and invalid/missing-value fallback.
- `npm run package:verify`: 34 canonical pages, 1,062 copy checks and 135 schema checks, no issues.
- `npm run content:verify`: 20 retained pages, 23 approved replacement routes, 928 copy, 86 link and 41 asset checks, no issues. Its broader route/anchor/asset checks also pass.
- Desktop 1440 × 1000 and mobile 390 × 844 review of each template and representative variants: general/surgical/sedation teams, split/video/full results, concern comparisons (including the distinct snoring table), coupon, membership plans, review QR/live carousel, About, Contact, Doctors, Team and services index. No horizontal page overflow or broken loaded images on the reviewed views.
- Verified menus by mouse and keyboard, Escape focus return, all 13 concern navigation links, team filters, doctor anchors, FAQ expansion, mobile plan/results scrolling, review next/previous and full-text expansion, the YouTube player/title, exact Google Maps address pin, and a genuine 404 response/view.
- Booking opens CareStack's **Cosmetic Implant Dentistry Westport**, 638 W. 39th St., Kansas City, MO 64111, with existing/new patient choices. Smile Club reaches Name/Email/Phone/Plan fields on the existing site. No forms were submitted.
- Final refinements: fixed hover-open menu clicks closing the menu, a care-team contrast issue caused by alternating section backgrounds, single-case results column sizing, mobile header spacing, exact-address map targeting and individualized cleaning language in the directory/metadata.
- No browser warnings/errors observed in the final check. Temporary viewport override reset. Task-owned local preview remains running.

Representative proof: `desktop-services-final.jpg`, `desktop-contact-map.jpg`, `desktop-results-split.jpg`, `desktop-results-full.jpg`, `mobile-snoring-comparison.jpg`, `mobile-surgical-team.jpg`, `mobile-results-split.jpg`, `mobile-live-reviews.jpg`, `mobile-404.jpg`, `carestack-booking.jpg`, and `existing-smile-club-signup.jpg`.

### Follow-up disposition

Last source reconciliation: November 3. Full delivered folder and copy/data were reconciled during the build; the final check re-read the financing references in the main brief and the current source integration. No request to resend supplied material is warranted.

| Item | Evidence and disposition | Next action |
| --- | --- | --- |
| Eve versus Cherry | Main brief lines 338/354 explicitly identifies the conflict. `src/lib/site.ts` points to Eve; `FinancingWidget.astro` preserves Cherry. Bryan directly said to retain both and draft the question. Specific conflict, not missing material | William chooses Eve, Cherry, or whether both should remain; update only after his answer is relayed |
| Hours | Main brief line 501 explicitly selects Mon–Thu 9–4 for all new pages and flags launch confirmation. Implemented as supplied; not a construction blocker | Keep as a later launch check with the practice/Google Business Profile; no redundant question in this draft |
| Lucaci school wording | Supplied broader University of Missouri wording retained; source provider page uses inconsistent specific school names | No more specific campus claim added; no question needed for current implementation |
| Smile Club form | Actual current hosted form and Framer-managed submission flow inspected | Accepted hosted signup fallback works; no missing-form request |
| Google aggregate fields | Existing endpoint has individual reviews only; new code/tests complete locally | Verify actual new fields during the separately authorized deployment stage; internal task, not a client-material ask |

### Draft to William — updated after publication, not sent

Subject: CIDWP website update + payment plans question

Hey William,

I've finished building out the remaining CIDWP pages using your copy and assets, and checked the layouts on desktop and mobile. The updates are now available here: https://cidwp-new.pages.dev/

One detail to confirm: the navigation links to Eve, while the Payment Plans page uses Cherry. Should we use Eve or Cherry throughout, or keep both? I've left the current links in place for now.

Thanks!
Bryan

This is Bryan's requested draft for William, not a sent message or a client-approval record. No new missing-file questions were added. ADA Daily Work retains ownership of coordination and any later launch review.

## Publication record — November 3, 2026

Bryan explicitly approved the complete November work and requested commit, push to main and deployment, with the financing question left pending. This supersedes the previous local-only hold without changing external domains, stakeholder messaging, or ADA ownership.

- Application commit: `ab45988bf5b5fc0f594330c5879b88e5b325c7e8` — **Apply approved November design and complete CIDWP page package**.
- Pushed successfully to `main`. GitHub confirmed the repository moved to `alphadogagency/CIDWP-New`; the existing origin redirect handled the push. No force push or unrelated branch changes.
- Published using the existing authenticated Wrangler connection and `cidwp-new` Cloudflare Pages production project, branch `main`. Existing account, bindings and routing retained. The build uploaded 173 changed assets, reused 142 assets, and included the Functions bundle and redirects.
- Stable URL: https://cidwp-new.pages.dev/ . Immutable deployment URL: https://80628050.cidwp-new.pages.dev/ . Cloudflare deployment list confirmed production/main/source `ab45988`.
- Build: 61 pages successful; Pages Function compilation successful. Prior type, endpoint and copy/schema checks remain valid for the unchanged application source. Staged whitespace check passed, including the bundled font licenses.
- Public HTTP verification: all 34 new package routes plus homepage, services directory and Payment Plans returned 200 and matched built headings, canonicals and stylesheet assets. Both checked aliases returned the intended 301, the custom missing-page route returned 404, and robots/XML sitemaps returned 200. Report: `docs/verification/november-pages/deployment-checks.json`.
- Google reviews endpoint returned HTTP 200, `Cache-Control: no-store`, five selected five-star reviews and valid actual aggregate rating/count. The homepage and Review page displayed the matching aggregate in live state. The former aggregate-deployment deferral is resolved. No raw Google review response or credentials were saved.
- Public browser verification: desktop homepage, mobile concerns menu (13 links) → Toothache, no page overflow/broken loaded images, and Review carousel live state with Next advancing to **2 of 5**. No console warnings/errors observed. Temporary viewport override reset; public homepage left open as the deliverable.
- Published evidence: `published-desktop-home.jpg`, `published-mobile-concern.jpg`, and `published-mobile-reviews.jpg` in `docs/verification/november-pages/`.
- These publication notes and evidence are a documentation-only follow-up to the deployed application commit; they do not alter the built website or Function.

Financing remains exactly as Bryan requested: Eve in the navigation and Cherry on Payment Plans, pending William's answer. Existing hosted Smile Club signup and CareStack booking remain in place. This publishes the existing Pages site; no custom-domain cutover, external Smile Club retirement, stakeholder email or calendar changes were performed.

## November 5 client edits — authorized for publication

Bryan reviewed the assessment of Pam's November 5 “CIDWP Website Improvement Update” email and Denea's follow-up, then explicitly requested implementation, commit and push to main for deployment. This is the current scoped assignment; the November 3 package remains the baseline.

- Source: Gmail thread `1a1ac1bf012349c5`; Pam message `1a1ad0435eaa1694`, Denea message `1a1ad1f5cda486a0`.
- Removed decorative photo tags from the paired front-desk images and homepage office gallery; retained accessible descriptions and the gallery lightbox.
- Added Pam's supplied general dentistry (`Outlook-oa14hmbg.jpg`), emergency dentistry (`Outlook-lxjrmdqz.jpg`) and whitening (`Outlook-h0hv0un3`) images to `src/assets/nov2026/` and replaced those three treatment tiles. Treatment links/labels remain intact.
- Updated the team introduction to begin “Our Westport team takes the time…” and restored the existing `oct2026/3d-print.webp` image to the 3D printing card.
- Removed the small denture inset identified by Denea. The main implants photo remains pending Pam's promised before-and-after image; that future image is explicitly deferred.
- Removed unused homepage photo-tag/inset styles. Preserved the remaining approved design, sentence-case source copy, Eve/Cherry destinations, booking and existing deployment target.
- Local verification: Astro check (69 files, zero errors/warnings/hints), production build (61 pages), package verification (34 pages, 1,062 copy checks, 135 schema checks, zero issues), and whitespace check passed.
- Browser checks at 1440×1000 and 390×844 confirmed updated copy, all three image replacements, printer photo, absent photo tags/inset, no broken affected images or horizontal overflow, and gallery open/Escape close. No page errors. Screenshots and machine-readable checks: `docs/verification/november-5-edits/`.
- Publication pending at this checkpoint; record the deployed commit and public verification below after completion. No domain cutover, stakeholder messages or calendar changes are included.

### November 5 publication result

- Application commit `f0f6977` (**Apply November 5 client homepage edits**) pushed to `main` successfully.
- Published through the existing Cloudflare Pages project: deployment `14153ea5-5334-457f-8fa1-7aac1357d71c`, production/main/source `f0f6977`. Stable URL: https://cidwp-new.pages.dev/ ; immutable URL: https://14153ea5.cidwp-new.pages.dev/ . Functions compiled successfully; 15 assets uploaded and 304 reused.
- Public desktop/mobile browser checks passed with HTTP 200, correct team copy, all three supplied tile images, restored printer, no photo tags/denture inset, no affected broken images or horizontal overflow, and working gallery open/Escape close. No page errors. Published screenshots and `published-checks.json` are in the November 5 evidence folder.
- This completes the authorized round. Pam's later implants before-and-after remains deferred. The following documentation/evidence commit does not change the deployed application.

## Local photo-framing review — November 5, after publication

Bryan requested zooming out the teeth photographs in the homepage Treatments tiles, explicitly local-only until he reviews and approves pushing. This hold applies to this new framing pass; the earlier November 5 email edits remain published.

Veneers, dental implants and full-mouth restoration now show the full width of their existing after-only photos using contained image sizing with a neutral tile background. Other treatment photos and routes remain unchanged. Hover no longer enlarges those three photos. No image pixels or patient results were generated or altered.

Local preview: http://127.0.0.1:4338/#expertise (Astro background server). Astro check passed with zero errors/warnings/hints; desktop/mobile browser checks confirmed all three full-photo tiles loaded and no horizontal overflow. The preview is open for Bryan. Nothing from this framing pass has been committed, pushed or deployed.

### Generated card images and colorful Google wordmark — local only

Bryan requested generated teeth images with the same card proportions, then rejected the first set as too similar. The local preview now uses three synthetic, illustrative smiles: the first veneers image, a distinct angled masculine smile for implants, and a mature frontal smile for full-mouth restoration. These replace only homepage treatment-navigation imagery; real patient results and original photos remain unchanged. This supersedes the contained-photo experiment above, returning the cards to edge-to-edge cover sizing (16:10 desktop, existing 4:3 mobile).

Final assets: `src/assets/nov2026/generated-veneers-card.png`, `generated-implants-card-v2.png`, and `generated-restoration-card-v2.png`. Built-in image_gen was used; complete prompts and source paths are recorded in `docs/verification/november-5-edits/generated-card-prompts.json`. The earlier unselected generated variants remain local only.

Bryan also requested replacing the homepage review-strip wordmark with colorful Google branding. Added `public/google-wordmark.png` (unmodified existing full-color wordmark from the Flores project), used at its native aspect ratio. Kept a small 12px non-translated Google Maps credit within the same rating container, following current official Places attribution guidance: https://developers.google.com/maps/documentation/places/web-service/policies . Review carousel and interior-page attribution remain unchanged.

Verification: Astro diagnostics (69 files, zero errors/warnings/hints), build (61 pages), whitespace check, and desktop/mobile browser review passed. All three generated assets loaded, the full-color logo loaded, no horizontal overflow, and local live aggregate displayed 5.0 from 121 Google reviews during verification. No review values were hard-coded. Preview stays at http://127.0.0.1:4338/ . Not committed, pushed or deployed; awaiting Bryan's review.

Bryan's subsequent local-review direction: keep only a discreet “Maps” label and avoid repeating Google. The homepage strip now shows the colorful Google wordmark, live “[rating] from [count] reviews” and small “Maps” text. `data-rating-compact` scopes the abbreviated count to this strip; other rating displays remain unchanged. This direct display preference supersedes the full “Google Maps” credit described above for this local draft. Astro diagnostics and whitespace checks passed; browser confirmed the live abbreviated count and requested label. Still local only.

### Fresh smile subjects — local review, November 5

Bryan requested more natural teeth and then explicitly rejected reusing the same people. Generated three completely new subjects from scratch, without reference images: an angled feminine smile for veneers, a relaxed clean-shaven masculine smile for implants, and a mature feminine smile with a different angle and complexion for full-mouth restoration. Wider lower-face compositions, soft daylight, natural ivory enamel and individually shaped teeth replace the prior selections. These remain synthetic treatment-navigation illustrations, not patient results.

The selected files are `src/assets/nov2026/generated-veneers-new-smile.png`, `generated-implants-new-smile.png`, and `generated-restoration-new-smile.png`. All are 1586×992 and fill the existing 16:10 desktop / 4:3 mobile cards. The built-in image generation tool, prompts, source files and current selections are recorded in `docs/verification/november-5-edits/generated-card-prompts.json`. Earlier variants remain unselected. The discreet Maps/Google wordmark refinement remains in place. Local preview: http://127.0.0.1:4338/#expertise . No commit, push or deployment is authorized for this revision until Bryan reviews it.

Verification: Astro check passed (69 files, zero errors/warnings/hints), production build passed (61 pages), and whitespace check passed. Browser review at 1440×1000 and 390×844 confirmed the three new source files loaded, matching card proportions, readable labels and no horizontal overflow. Evidence: `docs/verification/november-5-edits/new-smiles-desktop.jpg`, `new-smiles-mobile.jpg`, and `new-smiles-checks.json`. Temporary viewport override reset; the local Treatments preview remains open.

Bryan approved this final local revision (“I love it!”) and explicitly requested committing, pushing to main and deployment on November 5. This supersedes the local-only hold for the three selected new smile images and the colorful Google wordmark with discreet Maps text. Publication uses the existing `cidwp-new` Cloudflare Pages site. Earlier generated candidates are excluded from the publication commit.
