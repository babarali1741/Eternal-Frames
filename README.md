# Eternal Frames — Wedding Photography Website

A complete multi-page wedding photography website with gallery, videos, pricing calculator, and client portal.

## Project Structure

```
eternal-frames/
│
├── index.html              ← Main entry point (all pages)
│
├── css/
│   ├── style.css           ← Global styles (nav, footer, shared components)
│   ├── home.css            ← Home page styles (hero, stats, about, testimonials)
│   ├── gallery.css         ← Gallery page + lightbox styles
│   ├── videos.css          ← Videos page + modal styles
│   ├── pricing.css         ← Pricing calculator styles
│   └── portal-contact.css  ← Client portal + contact form styles
│
├── js/
│   ├── main.js             ← Core: page routing, nav, scroll reveal
│   ├── gallery.js          ← Lightbox + gallery filter logic
│   ├── videos.js           ← Video modal + featured video logic
│   ├── pricing.js          ← Pricing calculator logic
│   └── portal-contact.js   ← Login/logout + contact form logic
│
└── images/
    └── README.md           ← Instructions for local image files
```

## Pages

| Page          | Section ID        | Description                              |
|---------------|-------------------|------------------------------------------|
| Home          | `#page-home`      | Hero, stats, about, gallery preview, testimonials |
| Gallery       | `#page-gallery`   | Filterable masonry grid + lightbox       |
| Films         | `#page-videos`    | Featured film + video grid with modal    |
| Pricing       | `#page-pricing`   | Interactive pricing calculator           |
| Client Portal | `#page-portal`    | Password-protected photo gallery         |
| Contact       | `#page-contact`   | Enquiry form + contact details           |

## Demo Login (Client Portal)
- **Email:** priya@email.com  
- **Password:** wedding2024

## How to Run
Simply open `index.html` in any modern browser. No build tools or server required.

## Customisation
- Update contact details in the **Contact** section of `index.html`
- Change the WhatsApp number in the `wa-btn` anchor href
- Replace Unsplash image URLs with your own photos (see `images/README.md`)
- Edit pricing values in `js/pricing.js` and the corresponding HTML labels