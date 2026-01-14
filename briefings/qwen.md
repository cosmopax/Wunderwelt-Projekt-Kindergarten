# QWEN BRIEFING: Research, Integration & Documentation

**Priority:** HIGH - Runs parallel to all other agents
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

**Responsibilities:**
- Academic paper research (from Jules)
- Service integration research (newsletter, forms)
- File indexing and documentation (from Mistral)
- Validation and testing
- Progress tracking

---

## TASK 1: Newsletter Service Research

### Services to Evaluate:

1. **Buttondown** - Markdown-friendly, simple
2. **Mailchimp** - Free tier, embeddable
3. **ConvertKit** - Creator-focused
4. **EmailOctopus** - Budget option
5. **Substack** - Blog integration

### Research Criteria:
- Free tier limits (subscribers/month, emails/month)
- Embeddable HTML form (no backend needed)
- GDPR compliance
- Double opt-in support
- API for automation

### Output: `/briefings/research/newsletter-services.md`

```markdown
# Newsletter Service Comparison

## Recommendation: [SERVICE]
**Reason:** [Why best for this project]

## Comparison

| Service | Free Tier | Form Embed | GDPR | API | Notes |
|---------|-----------|------------|------|-----|-------|
| Buttondown | 100 subs | Yes | Yes | Yes | |
| Mailchimp | 500 subs | Yes | Yes | Yes | |
| ConvertKit | 300 subs | Yes | Yes | Yes | |
| EmailOctopus | 2500 subs | Yes | Yes | Yes | |

## Integration Code

### Recommended: [SERVICE]

Form HTML:
```html
<form action="[ENDPOINT]" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

Hidden fields needed:
- [field]: [purpose]

### Alternative: [SERVICE 2]
[Backup option code]
```

---

## TASK 2: Contact Form Backend Research

### Services to Evaluate:

1. **Formspree** - Simple form-to-email
2. **Web3Forms** - Free, no signup
3. **Getform** - Simple API
4. **Netlify Forms** - If on Netlify
5. **Basin** - GDPR-friendly

### Research Criteria:
- Free submissions per month
- Spam protection (honeypot, captcha)
- Email notifications
- Custom redirect support
- File upload support
- GDPR compliance

### Output: `/briefings/research/contact-backends.md`

```markdown
# Contact Form Backend Comparison

## Recommendation: [SERVICE]
**Reason:** [Why]

## Comparison

| Service | Free/Month | Spam Protection | Files | GDPR |
|---------|------------|-----------------|-------|------|
| Formspree | 50 | Honeypot + reCAPTCHA | Yes | Yes |
| Web3Forms | 250 | Honeypot + hCaptcha | No | Yes |
| Getform | 50 | reCAPTCHA | Yes | Yes |

## Integration

### Form Action
```html
<form action="https://[service]/[endpoint]" method="POST">
```

### Required Hidden Fields
```html
<input type="hidden" name="_subject" value="New Contact Form Submission">
<input type="hidden" name="_next" value="https://yoursite.com/thanks">
<input type="text" name="_gotcha" style="display:none"> <!-- Honeypot -->
```

### Success/Error Handling
[How to handle responses]
```

---

## TASK 3: Academic Paper Research

**Full instructions:** See `/briefings/research-directive.md`

### Research Domains:

#### A. Urban Architecture (8-10 papers)
Search terms:
- `"15-minute city" urban planning`
- `"superblocks" Barcelona model`
- `"car-free cities" pedestrian`
- `Dunbar number community size`
- `"vertical village" high-density housing`

Key authors: Carlos Moreno, Jan Gehl, Donald Shoup

#### B. Alternative Education (6-8 papers)
Search terms:
- `"forest schools" outcomes research`
- `"democratic education" Sudbury`
- `"place-based education" learning`
- `"intergenerational learning" programs`
- `"biophilic classroom" design`

Key sources: Peter Gray, David Sobel

#### C. Rewilding & Ecology (6-8 papers)
Search terms:
- `"Miyawaki method" urban forest`
- `"urban pollinators" corridors`
- `"novel ecosystems" urban ecology`
- `"blue-green infrastructure" cities`
- `"urban soundscape" acoustic ecology`

Key authors: Akira Miyawaki, Ingo Kowarik

#### D. Governance & Commons (5-7 papers)
Search terms:
- `Ostrom "design principles" commons`
- `"participatory budgeting" outcomes`
- `"time banking" community`
- `"cooperative housing" outcomes`
- `"liquid democracy" delegative voting`

Key authors: Elinor Ostrom, David Graeber

#### E. Resilience Systems (5-7 papers)
Search terms:
- `"urban food systems" self-sufficiency`
- `"community energy" cooperative`
- `"circular economy" district`
- `"sponge city" implementation`
- `autarky resilience metrics`

Key sources: Kate Raworth, Ellen MacArthur Foundation

#### F. Psychology of Place (4-6 papers)
Search terms:
- `"attention restoration theory" nature`
- `"biophilia hypothesis" urban`
- `"prospect-refuge" public space`
- `"place attachment" community`

Key authors: Rachel & Stephen Kaplan, Roger Ulrich

### Search Platforms:
- Google Scholar
- Semantic Scholar
- arXiv
- SSRN
- ResearchGate
- UN-Habitat reports
- C40 Cities resources

### Output Structure:

Create `/briefings/research/papers/` folder with files:

```
papers/
├── urban-001-moreno-15-minute-city.md
├── urban-002-mueller-superblocks-health.md
├── urban-003-gehl-cities-for-people.md
├── edu-001-gray-sudbury-graduates.md
├── edu-002-sobel-place-based.md
├── rewild-001-miyawaki-forests.md
├── gov-001-ostrom-governing-commons.md
├── res-001-raworth-doughnut.md
└── ...
```

### Paper Summary Template:

```markdown
# [Paper Title]

**Citation:** [Author] ([Year]). [Title]. *[Journal]*, [Vol]([Issue]), [Pages]. [DOI/URL]
**Domain:** [Urban Architecture | Education | Rewilding | Governance | Resilience | Psychology]
**Access:** [Open Access / Paywalled] [Link]

## Key Findings
1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

## Relevant Quote
> "[Quote with page number]"

## Statistics/Data Points
- [Statistic 1]
- [Statistic 2]

## Application to Wunderwelt
[2-3 sentences on how this applies to the project]

## Content Potential
- [ ] Blog post: [suggested title]
- [ ] Feature card concept
- [ ] Calculator/tool idea
- [ ] Infographic data

## Tags
#[tag1] #[tag2] #[tag3]
```

### Aggregated Outputs:

#### `/briefings/research/PAPER_INDEX.md`
```markdown
# Paper Index

## By Domain

### Urban Architecture (X papers)
| ID | Title | Author | Year | Key Finding |
|----|-------|--------|------|-------------|
| urban-001 | ... | ... | ... | ... |

### Education (X papers)
...

## By Relevance
1. [Most impactful paper]
2. [Second most impactful]
...
```

#### `/briefings/research/KEY_FINDINGS.md`
```markdown
# Top 10 Key Findings

## 1. [Finding Title]
**Source:** [Paper citation]
**Finding:** [Description]
**Application:** [How to use in content]

## 2. ...
```

#### `/briefings/research/DATA_POINTS.md`
```markdown
# Statistics & Data for Content

## Urban Architecture
- 15-minute accessibility: [stat] (Source: [paper])
- Superblock NO2 reduction: [stat] (Source: [paper])
...

## Education
- Forest school outcomes: [stat]
...

## Infographic-Ready Data
[Formatted for visual content]
```

---

## TASK 4: Media Embed Research

### Output: `/briefings/research/media-embeds.md`

```markdown
# Media Embed Options

## Video

### YouTube (Privacy-Enhanced)
```html
<iframe
    src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
    title="Video title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy">
</iframe>
```

### Vimeo
[Code and options]

## Social Embeds

### Mastodon (Recommended for project values)
[How to embed Mastodon posts]

### Twitter/X
[Privacy considerations]

## Self-Hosted Video
[HTML5 video best practices]
```

---

## TASK 5: File Index & Documentation

### Create: `/briefings/FILE_INDEX.md`

```markdown
# Wunderwelt Project File Index

**Last Updated:** [DATE]

## Project Structure

```
Wunderwelt-Projekt-Kindergarten/
├── index.html              [Gemini-A] Landing page
├── blog.html               [Gemini-A] Blog listing
├── contact.html            [Gemini-A] Contact page
├── about.html              [Gemini-A] About page
├── css/
│   └── style.css           [Codex] All styles
├── js/
│   └── main.js             [Copilot] All JavaScript
├── blog/
│   ├── post-template.html  [Gemini-A] Template
│   ├── urban-architecture/ [Gemini-B] 5 posts
│   ├── education/          [Gemini-B] 5 posts
│   ├── rewilding/          [Gemini-B] 5 posts
│   ├── governance/         [Gemini-B] 5 posts
│   └── resilience/         [Gemini-B] 5 posts
├── assets/
│   └── images/
│       ├── hero.png        Existing
│       ├── lab.png         Existing
│       └── blog/           Blog heroes
├── includes/               [Gemini-A] Reusable components
└── briefings/              Agent instructions
    ├── research/           [Qwen] Research outputs
    └── ...
```

## File Status

| File | Owner | Status | Dependencies |
|------|-------|--------|--------------|
| index.html | Gemini-A | Pending | - |
| style.css | Codex | Pending | Gemini-A HTML |
| main.js | Copilot | Pending | Codex CSS |
| blog posts | Gemini-B | Pending | Qwen research |

## Component Registry

| Component | Files | CSS Classes | JS Functions |
|-----------|-------|-------------|--------------|
| Navigation | all pages | .main-nav | initNavigation() |
| Newsletter | all pages | .newsletter-form | initNewsletterForms() |
| Contact Form | contact.html | .contact-form | initContactForm() |
| Blog Filter | blog.html | .filter-btn | initBlogFilters() |
```

---

## TASK 6: Progress Tracking

### Create: `/briefings/PROGRESS.md`

```markdown
# Project Progress

**Status:** IN PROGRESS
**Last Updated:** [DATE]

## Agent Completion Status

| Agent | Primary Task | Status | Output |
|-------|--------------|--------|--------|
| Qwen | Research & Docs | In Progress | /briefings/research/ |
| Gemini-A | Pages & Structure | Pending | HTML files |
| Gemini-B | Blog Content | Waiting | /blog/**/*.html |
| Codex | CSS Styling | Waiting | css/style.css |
| Copilot | JavaScript | Waiting | js/main.js |

## Feature Completion

### Core Pages
- [ ] index.html updated (nav, newsletter, footer)
- [ ] blog.html created
- [ ] contact.html created
- [ ] about.html created

### Blog System
- [ ] Post template created
- [ ] 25 blog posts written
- [ ] Category pages working

### Forms
- [ ] Contact form functional
- [ ] Newsletter signup functional
- [ ] Form validation working

### Styling
- [ ] Navigation styled
- [ ] Footer styled
- [ ] Newsletter component styled
- [ ] Blog cards styled
- [ ] Post pages styled
- [ ] Mobile responsive

### JavaScript
- [ ] Mobile nav toggle
- [ ] Form validation
- [ ] Newsletter handler
- [ ] Blog filters
- [ ] Animations

## Research Progress

- [ ] Newsletter service selected
- [ ] Contact backend selected
- [ ] 30+ papers summarized
- [ ] Key findings compiled
- [ ] Data points extracted

## Blockers & Issues

| Issue | Severity | Assigned | Resolution |
|-------|----------|----------|------------|
| - | - | - | - |

## Next Steps

1. [Next immediate action]
2. [Following action]
3. [...]
```

---

## TASK 7: Validation & Testing

After other agents complete:

### HTML Validation
```bash
# If available
npx html-validate *.html blog/**/*.html
```

### Manual Checks:
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] All links are valid
- [ ] No broken image paths
- [ ] Meta descriptions present
- [ ] Open Graph tags present

### Accessibility Audit:
- [ ] Heading hierarchy correct (h1 > h2 > h3)
- [ ] Color contrast sufficient
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels where needed

### Output: `/briefings/research/validation-report.md`

---

## TASK 8: Image Prompt Generation

### Create: `/briefings/assets/image-prompts.md`

Generate AI image prompts for each blog post hero:

```markdown
# Image Generation Prompts

## Style Guide
- Aesthetic: Solarpunk high-tech
- Lighting: Golden hour, warm
- Colors: Gold (#ffd700), green, glass
- Mood: Optimistic, breathable
- Aspect: 16:9 for heroes, 4:3 for cards

## Blog Post Heroes

### Urban Architecture Series

#### 15-Minute City
"Aerial view of compact urban neighborhood at golden hour, mixed-use buildings with ground-floor cafes and shops, tree-lined pedestrian streets filled with people walking and cycling, rooftop gardens visible, completely car-free, solarpunk architecture style, warm optimistic atmosphere, 16:9 aspect ratio"

#### Superblocks Barcelona
"Bird's eye view of Barcelona-style superblock interior courtyard, children's playground surrounded by greenery, residents gathering in shared spaces, balconies overflowing with plants, filtered golden sunlight, photorealistic rendering, 16:9"

[Continue for all 25+ posts...]

## Card Images

### Newsletter Signup
"Hands holding translucent tablet displaying glowing botanical diagrams, warm golden ambient light, blurred solarpunk cityscape in background, sense of connection and hope, 4:3"

### Contact Page
"Welcoming entrance to solarpunk community center, living plant frames around glass doors, warm light spilling out, people greeting each other, vertical gardens on walls, golden hour, 16:9"
```

---

## DELIVERABLES CHECKLIST

### Research Outputs
- [ ] `/briefings/research/newsletter-services.md`
- [ ] `/briefings/research/contact-backends.md`
- [ ] `/briefings/research/media-embeds.md`
- [ ] `/briefings/research/papers/` (30-50 papers)
- [ ] `/briefings/research/PAPER_INDEX.md`
- [ ] `/briefings/research/KEY_FINDINGS.md`
- [ ] `/briefings/research/DATA_POINTS.md`
- [ ] `/briefings/research/validation-report.md`

### Documentation
- [ ] `/briefings/FILE_INDEX.md`
- [ ] `/briefings/PROGRESS.md`
- [ ] `/briefings/assets/image-prompts.md`

### Integration
- [ ] Newsletter form action URLs documented
- [ ] Contact form action URLs documented
- [ ] Hidden field requirements listed
- [ ] All research ready for Gemini-B

---

## EXECUTION ORDER

1. **Immediate:** Newsletter + Contact backend research
2. **Parallel:** Academic paper mining (all domains)
3. **Ongoing:** Update FILE_INDEX.md and PROGRESS.md
4. **After agents:** Validation report
5. **Final:** Completion documentation

---

**Status:** START IMMEDIATELY
