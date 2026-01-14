# QWEN AGENT BRIEFING: Research & Task Running

**Priority:** MEDIUM - Parallel research track.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Research optimal solutions for newsletter and contact backends. Run validation tasks. Search for embeddable media solutions. Report findings to other agents via Mistral.

---

## TASK 1: Newsletter Service Research

Search and evaluate these options for a **static site newsletter**:

### Options to Research:

1. **Buttondown** - Simple, markdown-friendly
2. **Mailchimp** - Free tier, embeddable forms
3. **ConvertKit** - Creator-focused
4. **Substack** - If blog integration desired
5. **EmailOctopus** - Budget option

### Evaluation Criteria:

- Free tier limits (subscribers, emails/month)
- Embeddable form HTML (no backend needed)
- GDPR compliance
- Ease of integration with static HTML
- API availability for future automation

### Output:

Create file: `/briefings/research/newsletter-services.md`

```markdown
# Newsletter Service Comparison

## Recommended: [Service Name]
Reason: [Why]

## Comparison Table
| Service | Free Tier | Embed Support | GDPR | Notes |
|---------|-----------|---------------|------|-------|
| ... | ... | ... | ... | ... |

## Integration Code
[Paste embed code example for recommended service]
```

---

## TASK 2: Contact Form Backend Research

For a **static site with no server**, research:

### Options:

1. **Formspree** - Form-to-email service
2. **Netlify Forms** - If hosting on Netlify
3. **Web3Forms** - Free, no signup needed
4. **Getform** - Simple API
5. **Basin** - GDPR-friendly

### Evaluation Criteria:

- Free submissions per month
- Spam protection (honeypot, captcha)
- Email notifications
- No backend requirement
- Custom redirect support

### Output:

Create file: `/briefings/research/contact-backends.md`

```markdown
# Contact Form Backend Comparison

## Recommended: [Service Name]
Reason: [Why]

## Integration Steps
1. [Step]
2. [Step]

## Form Action URL
`https://[service]/[endpoint]`

## Required Hidden Fields
[If any]
```

---

## TASK 3: Embeddable Media Solutions

Research embeddable media for the site:

### Video:

- YouTube embed optimization (privacy-enhanced mode)
- Vimeo embed options
- Self-hosted HTML5 video considerations

### Social:

- Twitter/X embed widgets
- Instagram embed limitations
- Mastodon embed options (for decentralized alignment)

### Output:

Create file: `/briefings/research/media-embeds.md`

```markdown
# Media Embed Options

## Video Embeds
### YouTube (Privacy-Enhanced)
```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" ...></iframe>
```

## Social Embeds
[Options with pros/cons]

## Recommendations for Solarpunk Aesthetic
[Which platforms align with project values]
```

---

## TASK 4: Run Validation Tasks

After other agents complete their work:

### HTML Validation:
```bash
# If npx available
npx html-validate index.html blog.html contact.html
```

### CSS Check:
- Look for unused variables
- Check for browser compatibility issues

### Accessibility Quick Check:
- Verify all images have alt text
- Check color contrast ratios
- Ensure form labels are associated

### Output:

Create file: `/briefings/research/validation-report.md`

Report any issues found for agents to fix.

---

## TASK 5: Search for Inspiration

Search for similar projects:

- "Solarpunk website design examples"
- "Glassmorphism dark mode portfolio"
- "Static site newsletter integration best practices"

Compile 3-5 reference links with notes on what could be borrowed.

### Output:

Add to `/briefings/research/inspiration.md`

---

## Communication Protocol

After completing research:

1. Create all files in `/briefings/research/`
2. Signal **Mistral** with summary of findings
3. Mistral will relay actionable items to relevant agents

---

## Deliverables Checklist

- [ ] `/briefings/research/newsletter-services.md`
- [ ] `/briefings/research/contact-backends.md`
- [ ] `/briefings/research/media-embeds.md`
- [ ] `/briefings/research/validation-report.md` (after implementation)
- [ ] `/briefings/research/inspiration.md`

---

**Status:** CAN START IMMEDIATELY (parallel track)
