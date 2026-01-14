# Relay: Gemini-A Implementation + CSS/JS Sync

## HTML Pages Added/Updated
- `index.html`: new nav (toggle + Connect/About), newsletter section, site footer.
- `blog.html`: full journal layout with filters, featured post, grid, load-more, newsletter, site footer.
- `contact.html`: contact form + newsletter section + site footer.
- `about.html`: about content + pillars grid + newsletter + site footer.
- `blog/post-template.html`: template for long-form posts.
- `includes/`: `nav.html`, `footer.html`, `newsletter.html`, `newsletter-compact.html`.
- Updated legacy pages for nav/footer consistency: `manifesto.html`, `posts/the-fungal-future.html`, `posts/mesh-nets.html`, `posts/city-as-classroom.html`.

## CSS Updates
- Added alias variables (`--accent-color`, `--card-bg`, etc) and status tokens.
- Implemented styles for nav toggle, site footer, newsletter, contact form, about page, blog listing, and post template.
- Added JS support states (`.field-error`, `.form-errors`, `.loading`, `.share-link.copied`).

## JS Updates
- Integrated nav toggle, scroll effects, fade-in observer, contact validation, newsletter handling, blog filters, reading time, share buttons, lazy loading, load-more.
- Preserved calculator + resource map logic.

## Notes
- Ensure any new blog posts use the `blog/post-template.html` structure and `data-tags` on cards for filtering.
