# Handover & Switch-Day Guide — entvaishalisangole.com

The production-ready site is the static content of `public/` — plain HTML (as `.php` filenames for URL continuity), CSS, JS, images. No server-side code, no database, no build step. It can be hosted anywhere.

**Current staging:** https://vaishali-ent-staging.web.app (Firebase project `vaishali-ent-staging`), deliberately blocked from Google via `X-Robots-Tag: noindex` header + `robots.txt Disallow`. These blocks MUST be removed on switch day (steps below).

---

## Option A — Go live on Firebase Hosting (recommended)

1. **Swap configs** (in repo root):
   - Replace `firebase.json` with `switch-day/firebase-production.json` (removes the noindex header, adds cache headers + 301 redirects for duplicate pages).
   - Replace `public/robots.txt` with `switch-day/robots-production.txt`.
   - Copy `switch-day/sitemap.xml` to `public/sitemap.xml`.
   - Deploy: `firebase deploy --only hosting --project vaishali-ent-staging`.
2. **Connect the domain**: Firebase console → Hosting → Add custom domain → `entvaishalisangole.com` (and `www.entvaishalisangole.com` as a redirect to the non-www). Firebase shows two A-record IPs.
3. **DNS** (at the domain registrar): change the A records for `@` and `www` to Firebase's IPs. **Do NOT touch MX records** — clinic email (`info@vaishalisangole.com`) is on a different domain and is unaffected either way, but leave all non-A records alone as a rule.
4. **Search Console** (doctor's Google account): add property `entvaishalisangole.com`, verify via DNS TXT, submit `https://entvaishalisangole.com/sitemap.xml`.
5. **Keep the old hosting running** for 2–4 weeks as instant rollback: reverting the A records restores the old site in minutes.
6. Monitor Search Console coverage weekly for a month. URLs are identical to the old site, so rankings should carry over with no redirect loss.

## Option B — Hand files to the current hosting vendor

1. Give them the contents of `public/` (zip it). Files replace the existing site in the web root; filenames match the current URLs one-to-one, so nothing else changes.
2. They must NOT copy `robots.txt` from staging — use `switch-day/robots-production.txt` instead, plus `switch-day/sitemap.xml` as `sitemap.xml`.
3. Their server (nginx/Plesk with PHP) will serve the `.php` files fine — they contain no PHP code, so they pass through as HTML.
4. Ask them to add these redirects (nginx syntax; Apache equivalents in comments):

```nginx
# duplicate/broken pages -> canonical targets  (301)
rewrite ^/best-doctor-for-tinnitus-in-navimumbai\.php$ /best-doctor-for-tinnitus-in-navi-mumbai.php permanent;
rewrite ^/best-center-for-egog-vemp-test-in-mumbai\.php$ /best-center-for-egog-vemp-test-in-navi-mumbai.php permanent;
rewrite ^/best-doctor-for-vertigo-treatment-in-kharghar\.php$ /vertigo.php permanent;
# www -> non-www
server { server_name www.entvaishalisangole.com; return 301 https://entvaishalisangole.com$request_uri; }
```

```apache
# .htaccess equivalent
Redirect 301 /best-doctor-for-tinnitus-in-navimumbai.php /best-doctor-for-tinnitus-in-navi-mumbai.php
Redirect 301 /best-center-for-egog-vemp-test-in-mumbai.php /best-center-for-egog-vemp-test-in-navi-mumbai.php
Redirect 301 /best-doctor-for-vertigo-treatment-in-kharghar.php /vertigo.php
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^(.*)$ https://entvaishalisangole.com/$1 [R=301,L]
```

---

## Editing content later

- **Testimonials**: `public/testimonials.php` — copy an existing testimonial block.
- **Test prices**: `public/test.php`.
- **Opening hours** (once added): search for the hours block; also update the `openingHoursSpecification` in the JSON-LD if present.
- **Phone number**: appears in every page (tel: links, wa.me links, JSON-LD). Search-and-replace `9967752407` across `public/`.
- **FAQ answers**: each condition page has a `faq-section` near the bottom + a matching `FAQPage` JSON-LD in `<head>` — edit both.
- **New patient tools** (quiz, masker, checklists, exercises, hearing check, diary): each is one self-contained file; all JS is inline.

## Asset ownership checklist (do before/at switch)

- [ ] Domain registrar login in doctor's control
- [ ] Google Analytics property `G-G2HPJTMNH1` in doctor's Google account (the second tag `G-J4LKHVX312` was removed — double counting)
- [ ] Search Console property in doctor's account
- [ ] Google Business Profile claimed, hours filled
- [ ] Facebook / Instagram / LinkedIn admin access confirmed
