# Mobile and desktop audit — 2026-11-11

## Baseline

Fetched `origin` and checked remote branch heads. The requested branch is named
`dev_zli` in this repository (there is no remote `zli_dev` branch).
Latest verified commit: `8264fe4c9a29f371424a3e867e6a36e8c720d56a` (`minor fix`).
Existing uncommitted work was preserved. Nothing was committed, pushed, or deployed.

## Desktop preservation

Compared all 16 content pages with HTML, CSS, and JavaScript from the baseline,
at 1024 × 900 and 1440 × 900, in Chinese and English: 64 comparisons passed.
After decoding images, measured navigation, brand, headings, hero/content sections,
footer geometry, font sizes, background sizes, and background positions matched.
This is a geometry/style comparison, not a whole-page pixel-diff guarantee.
Desktop Gallery remains a link with its hover/focus dropdown.
The added discussion fallback and navigation layout adjustments are mobile-only.
Original media, video behavior, content order, and service configuration are retained.

## Mobile coverage

Checked all 16 content pages at 320, 390, and 768 CSS pixels wide, in both languages:
96 cases passed with no page-level horizontal overflow, clipped Gallery menus,
JavaScript exceptions, or local HTTP errors in those runs.
All static HTML local `href` and `src` targets resolve.

Verified the compact brand/language controls, both Gallery destinations, dismissal
by outside click and Escape, keyboard traversal through Photos and Videos,
language persistence, desktop/mobile breakpoint transitions, era selection and
translation, carousel scrolling, and the legacy Gallery redirect.
Video checks confirmed no initial content-player iframes and replacement of only
the clicked video entry. Contact email validation and form submission were checked
with the external request intercepted locally; no actual message was sent.
The browser-local Q&A demo was exercised only in the isolated test browser.

Reviewed 390 × 844 screenshots of Biography, LEGO Knowledge, and Store, plus a
760 × 390 landscape Biography screenshot. The requested portrait compositions
remain in place; the landscape Biography image now fills the width.

## Additional fixes made during this audit

- Scoped navigation positioning/minimum-width changes and discussion fallback to
  mobile so the desktop layout matches the baseline.
- Allowed the contact-page title to wrap on mobile, removing a 320px overflow.
- Kept Tab/Shift+Tab navigation through the relocated Gallery submenu in logical order.
- Added visible keyboard focus for mobile navigation and form controls.
- Prevented landscape Biography background side gaps.
- Updated shared asset cache versions consistently across pages and the image script.

## Limits

Browser checks used isolated Chromium/Edge responsive viewports, not physical
phones or iOS Safari. Third-party requests were blocked/intercepted during the
repeatable audit. Giscus connectivity, real Bilibili playback, GitHub sign-in, and
real Formspree delivery were not certified. The earlier Giscus loading issue has
an accessible mobile fallback, but its phone-specific network cause remains unconfirmed.

`git diff --check` and `node --check assets/js/main.js` passed.
