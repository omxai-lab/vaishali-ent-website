# Vaishali ENT Clinic Website — Fixes & Features Plan

**Context:** `public/` holds a faithful mirror of https://entvaishalisangole.com/ deployed to Firebase Hosting as a **noindex staging site**. This document lists every fix and feature to apply, in order. The original redesigned SPA lives in `spa-redesign/` and serves as the source for interactive features (Phase 3).

**Sources:** full audit of the live site (July 2026) + code audit of the SPA rebuild.

---

## Phase 1 — Fixes to the mirrored site

### 1.1 Content defects (embarrassing, zero-risk fixes)

| # | Defect | Where | Fix |
|---|--------|-------|-----|
| F1 | Gallery lightbox captions say **"Petrolium Projects"** (leftover from the engineering template the site was built on) | gallery.php | Replace with real captions ("Clinic reception", "VNG lab", …) |
| F2 | **"Ontology Service"** — meant *Otology* | homepage treatment cards | Correct |
| F3 | **"Vedionystagmography"** — meant *Videonystagmography* | vertigo.php | Correct |
| F4 | **"cought"** — meant *cough* | best-doctor-for-cought-with-urti page title/body | Correct in visible text (keep filename for URL continuity) |
| F5 | **"Miling Kirtane"** — meant *Milind* | about/bio sections | Correct |
| F6 | "synonyms with the state of art" — grammar | homepage treatment cards | "synonymous with state-of-the-art" |
| F7 | **"© 2023"** stale copyright | footer, every page | Dynamic year or 2026 |
| F8 | "more than 12 years of experience" contradicts "20 years" | SEO landing page meta | Unify on 20+ |
| F9 | SEO page title starts with literal "#" | best-ent-specialist-in-kharghar | Remove |

### 1.2 SEO fixes (highest business impact)

| # | Defect | Fix |
|---|--------|-----|
| S1 | **Interior treatment pages have EMPTY `<title>` and empty meta description** (e.g. ear-hearing-loss.php, video.php) | Write unique title + description for every page. Pattern: "Hearing Loss Treatment in Kharghar, Navi Mumbai \| Dr. Vaishali Sangole" |
| S2 | **No structured data anywhere** | Add JSON-LD: `Physician` + `MedicalClinic` (name, address, geo, phone, hours, priceRange) on all pages; `FAQPage` where FAQs exist; `MedicalWebPage` on condition pages |
| S3 | **robots.txt 404** | Add (staging: `Disallow: /`; production: allow + sitemap ref) |
| S4 | **No canonical tags; www and non-www both serve 200** | Canonical tag on every page; pick non-www as canonical host |
| S5 | No Open Graph / Twitter Card tags — WhatsApp shares show blank preview | Add og:title/description/image (doctor photo) sitewide. Critical: clinic books via WhatsApp |
| S6 | **Two GA4 tags** (G-G2HPJTMNH1 + G-J4LKHVX312) double-counting | Keep one; property should be in doctor's own Google account |
| S7 | Duplicate H1 (header brand + page title on every page) | Header brand → `<div>`/`<p>`, one H1 per page |
| S8 | Broken links: vertigo-treatment landing page 404s from imp-link.php; hearing-aids href has leading space; imp-link "Gallery" anchor points to vertigo.php | Fix all three |
| S9 | Two near-duplicate tinnitus pages and duplicate EGoG/VEMP pages (Mumbai / Navi Mumbai variants) | Keep stronger page, canonical or 301 the twin |
| S10 | Sitemap lists www URLs while site links non-www | Regenerate sitemap on canonical host |
| S11 | No 404 page | Custom 404.html with nav + phone |
| S12 | Missing favicon/manifest/theme-color | Add |

### 1.3 Missing content (patients + local search look for these)

| # | Gap | Fix |
|---|-----|-----|
| C1 | **No opening hours anywhere on the site** | Get hours from doctor; show in header/footer/contact + JSON-LD `openingHoursSpecification` |
| C2 | No FAQ section | Per-condition FAQs with FAQPage schema |
| C3 | No registration number / memberships / awards | Ask doctor; add to About |
| C4 | No insurance/payment info | Ask doctor; add to Contact/FAQ |
| C5 | Testimonials have no source/ratings | Link Google Business profile; add review widget (Phase 3) |

### 1.4 Performance fixes

| # | Issue | Fix |
|---|-------|-----|
| P1 | ~14 CSS + ~17 JS files (jQuery, Revolution Slider, AOS, Swiper, Magnific…) | Staging phase: keep (faithful). Fix phase: consolidate/minify what's safe; defer non-critical JS |
| P2 | banner2.jpg 468 KB, ear-treatment.jpg 330 KB, banner.jpg 275 KB, no WebP, no lazy-load | Convert to WebP + `loading="lazy"` + width/height attrs |
| P3 | 5 self-hosted MP4s (~10 MB each) on video.php | Re-host on YouTube (free CDN + discoverability), embed |
| P4 | Duplicate FontAwesome (CDN v7 + local copy) | Keep one |
| P5 | No cache headers | firebase.json: long cache for assets, short for HTML |
| P6 | No security headers | X-Frame-Options, X-Content-Type-Options, Referrer-Policy |

### 1.5 Functional fixes

| # | Issue | Fix |
|---|-------|-----|
| X1 | Appointment popup form relays via client-side `whatsapp()` JS only; duplicate second `whatsapp()` function with colliding element IDs ('s'-suffix) | Deduplicate; validate phone format; keep WhatsApp flow (doctor already uses it) |
| X2 | Form has no validation beyond `required` | Add phone/name validation |
| X3 | tel: links inconsistent (+919967752407 vs 09967752407) | Standardize on +91 form |

---

## Phase 2 — Migration to her domain (when doctor approves)

1. Custom domain `entvaishalisangole.com` on Firebase Hosting (A records only — **MX untouched**; her email is on the separate domain vaishalisangole.com)
2. Remove `X-Robots-Tag: noindex` header + staging robots.txt
3. URLs preserved (mirror keeps `.php` paths) → no rank-losing URL changes; 301 host canonicalization www → non-www
4. Fresh sitemap.xml, submit in Search Console (doctor's account); monitor 4 weeks
5. Rollback = DNS revert, old hosting stays live during transition
6. Handover package option: site is static files; provide `.htaccess`/nginx redirect+header equivalents and HANDOVER.md if her current vendor hosts instead

---

## Phase 3 — New features (from the SPA rebuild + new)

### Tier 1 — high value, low effort (port from spa-redesign/)
1. **Sticky mobile call/WhatsApp dock** — one-thumb booking
2. **Live open/closed status** (IST) — fix timezone bug first (`toLocaleString('en-IN', {timeZone:'Asia/Kolkata'})`)
3. **Vertigo self-assessment quiz** — complete the scoring matrix (lightheaded/fainting/bilateral/constant branches currently fall through) then port
4. **Diagnostic prep checklists** (VNG/BERA/audiometry) with WhatsApp share
5. **Tinnitus sound masker** (white/pink/brown noise) — add error handling + buffer reuse
6. **Google Maps embed prominence** + directions CTA
7. **Test price table** — preserve existing ₹500–3000 transparency, make prominent

### Tier 2 — differentiators for a vertigo super-specialty clinic
8. **Vertigo diary** — patients log episodes/triggers/duration (localStorage), export to WhatsApp/PDF before appointment
9. **Epley / Brandt-Daroff / Cawthorne-Cooksey exercise guides** — illustrated step-by-step pages the doctor prescribes by sharing a link; strong SEO
10. **Online hearing screening** — Web Audio pure-tone check → "book full audiometry ₹500" CTA
11. **Google Reviews widget** — live rating via Places API
12. **Post-op care pages** per surgery (FESS, tympanoplasty, tonsillectomy)

### Tier 3 — reach
13. **Hindi + Marathi toggle** — Kharghar demographics + Devanagari search queries
14. **PWA** — offline exercise guides + masker, installable
15. **Blog** (markdown → static) — monthly condition article
16. **Review funnel** — post-visit WhatsApp message with Google review link
17. **Google Business Profile sync** — hours, posts, Q&A (biggest local-search lever)

### Tier 4 — later / needs backend or doctor buy-in
18. Real slot booking (Firestore or Practo/Calendly)
19. Teleconsultation + Razorpay/UPI
20. Patient report upload (Firebase Storage)
21. WhatsApp Business API auto-replies + appointment reminders
22. SMS fallback for non-WhatsApp users
23. Per-hospital visiting-hours listing (5 hospital attachments)

---

## Asset ownership checklist (do regardless of everything else)

- [ ] Domain registrar login → doctor's control
- [ ] Google Analytics property → doctor's Google account
- [ ] Search Console → doctor's account
- [ ] Google Business Profile → doctor's account, hours filled
- [ ] Facebook/Instagram/LinkedIn admin access confirmed

## Staging safety (active now)

- `X-Robots-Tag: noindex, nofollow` header on `**` in firebase.json
- robots.txt `Disallow: /`
- Staging URL not submitted to Search Console, not posted publicly
- Removed only at domain-switch time
