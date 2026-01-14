# JULES AGENT BRIEFING: Assets & Content Structure

**Priority:** MEDIUM - Can work in parallel, delivers to Gemini.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Generate asset prompts for AI image generation, create content structure templates, scaffold media gallery HTML. Focus on visual and content planning.

---

## TASK 1: Image Generation Prompts

Create file: `/briefings/assets/image-prompts.md`

Generate detailed prompts for AI image tools (Midjourney, DALL-E, Stable Diffusion) matching the solarpunk aesthetic:

```markdown
# Image Generation Prompts for Wunderwelt

## Style Guidelines
- Solarpunk aesthetic
- Golden hour lighting
- Lush greenery + sleek glass architecture
- High-tech sustainable elements
- Optimistic, breathable atmosphere
- Aspect ratio: 16:9 for heroes, 1:1 for cards

---

## Hero Images

### Blog Hero: Urban Autarky
```
Solarpunk cityscape at golden hour, vertical farms integrated into glass skyscrapers, solar panels reflecting warm light, people walking on elevated green pathways, community gardens on rooftops, soft lens flare, photorealistic, 16:9 aspect ratio, warm color palette with gold and green accents
```

### Blog Hero: Biophilic Design
```
Interior of a futuristic living space with floor-to-ceiling windows overlooking a green city, living walls with tropical plants, natural wood and glass furniture, soft ambient lighting, person reading in a hammock chair, solarpunk aesthetic, cozy yet high-tech, 16:9
```

### Blog Hero: Liquid Democracy
```
Circular community gathering space under a transparent dome, diverse group of people around a holographic display showing network diagrams, bioluminescent plants providing ambient light, solarpunk architecture, warm evening atmosphere, 16:9
```

### Contact Page Hero
```
Welcoming entrance to a solarpunk community center, glass doors with living plant frames, warm light spilling out, people greeting each other, vertical garden walls, golden hour, inviting atmosphere, 16:9
```

---

## Card Images

### Newsletter Card
```
Close-up of hands holding a translucent tablet displaying glowing text and plant diagrams, soft golden light, blurred solarpunk cityscape in background, warm and hopeful mood, 4:3
```

### Generic Post Thumbnail
```
Abstract solarpunk pattern, geometric shapes with organic curves, gold and green gradient, subtle circuit board patterns merging with leaf veins, minimalist, suitable for blog thumbnail, 1:1
```

---

## Icons (if needed)

### Newsletter Icon
```
Simple line icon of an envelope with a small plant sprout growing from it, gold on transparent, minimalist, SVG-ready
```

### Contact Icon
```
Simple line icon of two hands reaching toward each other, one organic one geometric, gold on transparent, minimalist
```
```

---

## TASK 2: Blog Post Content Templates

Create file: `/briefings/content/post-template.md`

```markdown
# Blog Post Content Template

## Metadata
- **Title:** [Compelling title, 50-70 chars]
- **Date:** [YYYY-MM-DD]
- **Author:** Wunderwelt Collective
- **Tags:** [tag1, tag2, tag3]
- **Hero Image:** [filename or prompt reference]
- **Excerpt:** [120-160 chars for preview cards]

---

## Structure

### Hook (100 words)
[Opening that captures attention, presents the problem or question]

### Context (150 words)
[Background information, why this matters now]

### Core Concept (200 words)
[Main idea explained clearly with examples]

### Action Module (100 words)
[Practical application - what can readers do?]

### Closing (50 words)
[Call to action or reflection prompt]

---

## Formatting Guidelines
- Use `<blockquote>` for key quotes
- Bold **key terms** on first use
- Include 1-2 internal links to other posts
- End with newsletter CTA
```

---

## TASK 3: Sample Blog Content Outlines

Create file: `/briefings/content/blog-outlines.md`

```markdown
# Blog Post Outlines

## Post 1: Urban Autarky Manifesto

**Title:** The Urban Autarky Manifesto: Cities That Feed Themselves
**Excerpt:** What if your city produced 80% of its food within its borders? The future of urban resilience starts here.
**Tags:** autarky, urban-farming, resilience

### Outline:
1. **Hook:** The vulnerability of modern cities (supply chain fragility)
2. **Context:** History of urban food systems, current dependencies
3. **Core:** Three pillars of urban autarky:
   - Vertical farming integration
   - Closed-loop waste systems
   - Community food networks
4. **Action:** Start with a balcony garden, join a food co-op
5. **Close:** Invite readers to imagine their neighborhood transformed

---

## Post 2: The Science of Biophilic Design

**Title:** Why Your Brain Craves Green: The Neuroscience of Biophilic Design
**Excerpt:** Plants aren't decoration—they're cognitive infrastructure. Here's what the research shows.
**Tags:** biophilia, psychology, urban-design

### Outline:
1. **Hook:** The stress epidemic in concrete jungles
2. **Context:** Biophilia hypothesis (E.O. Wilson), research findings
3. **Core:** Measurable benefits:
   - 15% reduction in cortisol with 40% green coverage
   - Fractals in nature and attention restoration
   - Air quality and cognitive function
4. **Action:** Add one plant per room, seek fractal patterns
5. **Close:** Your environment shapes your mind—design accordingly

---

## Post 3: Tools for Liquid Democracy

**Title:** Liquid Democracy: How to Govern a Community Without Politicians
**Excerpt:** Neither pure democracy nor representation—liquid democracy offers a third way for local governance.
**Tags:** governance, democracy, community-tools

### Outline:
1. **Hook:** The frustration with both voting and delegation
2. **Context:** What is liquid democracy? (Proxy voting, real-time delegation)
3. **Core:** Practical tools:
   - Loomio for group decisions
   - Consul for participatory budgeting
   - DIY options for small communities
4. **Action:** Propose one decision for your group to try
5. **Close:** The future of governance is networked, not hierarchical
```

---

## TASK 4: Media Gallery Structure

Create file: `/briefings/content/media-gallery-scaffold.html`

```html
<!-- Media Gallery Section - Add to any page -->
<section class="media-section fade-in">
    <h2 class="section-title">Visions of Tomorrow</h2>
    <p class="section-subtitle">Glimpses of the urban paradise we're building</p>

    <div class="media-gallery">
        <!-- Video Embed -->
        <div class="media-item video">
            <iframe
                src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
                title="Video title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- Image Items -->
        <div class="media-item image">
            <img src="assets/images/gallery-1.png" alt="Description" loading="lazy">
        </div>

        <div class="media-item image">
            <img src="assets/images/gallery-2.png" alt="Description" loading="lazy">
        </div>

        <!-- Social Embed Placeholder -->
        <div class="media-item social">
            <!-- Mastodon/Twitter embed goes here -->
        </div>
    </div>
</section>
```

---

## TASK 5: Asset Directory Structure

Create these folders (empty, ready for assets):

```
assets/
├── images/
│   ├── hero.png (existing)
│   ├── lab.png (existing)
│   ├── blog/
│   │   ├── urban-autarky-hero.png
│   │   ├── biophilic-hero.png
│   │   └── liquid-democracy-hero.png
│   └── gallery/
│       └── [gallery images]
├── icons/
│   └── [SVG icons if needed]
└── videos/
    └── [local videos if any]
```

Document this in `/briefings/assets/ASSET_STRUCTURE.md`

---

## Deliverables Checklist

- [ ] `/briefings/assets/image-prompts.md` - AI image prompts
- [ ] `/briefings/assets/ASSET_STRUCTURE.md` - Folder structure
- [ ] `/briefings/content/post-template.md` - Blog template
- [ ] `/briefings/content/blog-outlines.md` - Post outlines
- [ ] `/briefings/content/media-gallery-scaffold.html` - Gallery HTML

---

## Handoff

After completing:
1. Signal **Gemini** that content structure is ready
2. Signal **Mistral** to update file index
3. Provide image prompts to human for AI generation

**Status:** CAN START IMMEDIATELY
