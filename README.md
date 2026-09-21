# Chimney Star local WP template draft

This is an unofficial, local-first draft. The first implemented pieces are the reusable header/navigation and footer.

Approval note: `components/site-footer.html` is the current official global-footer design and local source of truth, approved on 2026-09-22. Preserve it across the page-by-page build unless a later revision is requested. This approval covers the local component; WordPress publication and live measurement remain separate stages.

Navigation approval note: `components/site-header.html` is the current official Chimney Star global-navigation design and local source of truth, approved on 2026-09-22. Preserve its desktop navigation, full-width mobile menu, sticky behavior, brand treatment, and current interaction pattern across the page-by-page build unless a later revision is requested. This approval covers the local component; WordPress publication and live measurement remain separate stages.

During the component-build phase, each section HTML file should be self-contained and directly previewable through `file://`, with its preview CSS included in the same file and local assets referenced with relative paths. After the complete page is approved, extract the final HTML, CSS, JavaScript, and WordPress placement code into separate production-ready deliverables.

## Current files

- `components/site-header.html` — standalone global-header preview with embedded CSS/JavaScript, sticky behavior, desktop mega menus, service-area dropdown, phone/booking actions, and responsive mobile navigation.
- `components/site-footer.html` — standalone footer preview with embedded CSS, phone CTA, supplied monochrome proof assets, footer navigation, contact details, and legal-link placeholders.
- `styles/site-chrome.css` — earlier shared header/footer styles. It does not drive the current self-contained previews. Extract and scope approved component CSS when the complete page is approved.
- `scripts/site-nav.js` — earlier mobile-toggle draft. The current header preview uses its embedded interaction script.

## Supplied assets used

- `assets/brand/logo2.png` — original supplied full-color horizontal logo.
- `assets/brand/header-logo.png` — 520 × 173 optimized derivative used by the current header preview with explicit intrinsic dimensions.
- `assets/brand/logo1.png` — full-color icon mark, reserved for future compact/brand uses.
- `assets/brand/monochrome-1.png` through `monochrome-5.png` — supplied white proof/review marks for the dark footer.
- `assets/brand/monochrome-6.png` — supplied white Chimney Star wordmark for the footer.
- `assets/brand/footer-monochrome-1.png` through `footer-monochrome-5.png`, plus `footer-monochrome-logo.png` — resized preview derivatives used by the current footer. Original assets remain unchanged.

Phone and route destinations are draft content based on the current project guide and must be verified against the final WordPress configuration before publishing. The monochrome artwork is preserved as supplied; no badges were recreated or recolored.

## Footer revision and local QA

The current combined footer reproduces the supplied mockup's shallow roofline, offset chimney, centered star, CTA, divided proof strip, five-column desktop layout, and bottom legal bar. The supplied monochrome logo and badges remain the chosen asset direction. Certification/review artwork is included for this local draft; the underlying claims and use permissions still need verification for publication. Contact details follow the existing project source rather than the different details pictured in the mockup.

The footer uses inline SVG decoration/icons, system fonts, no JavaScript, and six small image derivatives with intrinsic dimensions, lazy loading, asynchronous decoding, and low fetch priority. No footer image is preloaded.

Browser QA checked 320px, 390px, 768px, 1024px, and 1440px widths. Images loaded and no horizontal overflow was found. Mobile navigation/social/contact targets are at least 44px high, with 48px CTA buttons and 14px navigation text. Phone layouts use a 2+2+1 badge grid, two navigation columns from 360px, and one column below 360px. Desktop and mobile screenshots were inspected, including contact and legal content.

Status: built locally and responsive QA checked. WordPress publication, final destination-page validation, tracking, and whole-page LCP measurement are pending. The standalone footer cannot establish the complete page's LCP result.

## Header revision status

The current header follows the supplied mock direction: navy trust/offer bar, white brand/navigation row, structured service silos, service-area links, phone action, red booking CTA, and a header that remains visible while scrolling. It uses native `details` controls for dropdowns, keyboard Escape handling, one-open-dropdown behavior, a 48px mobile menu control, reduced-motion support, and a scrollable mobile panel.

The first-time-customer 25% discount is included because it was explicitly supplied in the wireframe. It was not independently verified in the project facts and must be confirmed before WordPress publication. All navigation URLs should also be checked against final WordPress permalinks before launch.

Header browser QA checked the full desktop layout at 1401px, the tablet navigation at 768px, and true mobile viewport behavior at 390px and 320px. The supplied logo loaded, the page had no horizontal overflow, the mobile panel and Services disclosure opened correctly, Escape closed both and restored focus, and the header remained at the top after scrolling. Status: built and locally QA-tested. WordPress publication, final permalink validation, analytics/tracking, and whole-page LCP measurement remain pending.

Mobile navigation revision: the menu now opens as a full-width fixed panel from the bottom of the sticky header to the bottom of the viewport. Background scrolling is locked while open, the panel scrolls independently, the close icon remains visible, service groups use touch-friendly cards, and the booking CTA spans the usable mobile width. The revised state was visually checked at 390 × 844; its panel measured the full 390px viewport width with no horizontal overflow, and Escape closed the menu and restored focus to the trigger.
