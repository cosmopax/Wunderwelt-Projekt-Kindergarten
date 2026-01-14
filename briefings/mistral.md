# MISTRAL AGENT BRIEFING: Coordination & Indexing

**Priority:** SUPPORT - Non-destructive coordination role.
**Root:** `/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten`

## Mission

Maintain file index, relay messages between agents, document project state. You are the communication hub. You do NOT modify core code files.

---

## TASK 1: Create & Maintain File Index

Create file: `/briefings/FILE_INDEX.md`

```markdown
# Wunderwelt Project File Index

Last Updated: [TIMESTAMP]

## Core Files
| File | Purpose | Status | Last Modified By |
|------|---------|--------|------------------|
| index.html | Main landing page | Active | Gemini |
| css/style.css | Global styles | Active | Codex |
| js/main.js | Interactivity | Active | Copilot |

## Pages
| File | Purpose | Status | Owner |
|------|---------|--------|-------|
| blog.html | Blog listing | Pending | Gemini |
| contact.html | Contact form | Pending | Gemini |

## Blog Posts
| File | Title | Status |
|------|-------|--------|
| blog/urban-autarky-manifesto.html | Urban Autarky Manifesto | Pending |
| blog/biophilic-design-science.html | Biophilic Design Science | Pending |
| blog/liquid-democracy-tools.html | Liquid Democracy Tools | Pending |

## Assets
| File | Type | Used In |
|------|------|---------|
| assets/images/hero.png | Image | index.html |
| assets/images/lab.png | Image | index.html |

## Briefings
| File | Agent | Status |
|------|-------|--------|
| briefings/gemini.md | Gemini | Active |
| briefings/codex.md | Codex | Waiting |
| briefings/copilot.md | Copilot | Waiting |
| briefings/qwen.md | Qwen | Active |
| briefings/mistral.md | Mistral | Active |
| briefings/jules.md | Jules | Waiting |

## Research
| File | Topic | Author |
|------|-------|--------|
| briefings/research/newsletter-services.md | Newsletter options | Qwen |
| briefings/research/contact-backends.md | Form backends | Qwen |
```

Update this file after each agent reports completion.

---

## TASK 2: Message Relay Protocol

When an agent completes work, they signal you. You then:

1. Update FILE_INDEX.md
2. Create a relay message for the next agent

### Relay Message Format:

Create files like `/briefings/relay/[timestamp]-[from]-to-[to].md`

Example: `/briefings/relay/001-gemini-to-codex.md`

```markdown
# Relay: Gemini -> Codex

## Completed
- blog.html created
- contact.html created
- Newsletter section added to index.html
- Navigation added to all pages

## Ready for Codex
- Style new navigation (.main-nav)
- Style newsletter section (.newsletter-section)
- Style contact form (.contact-form)
- Style blog cards (.blog-card)

## Files to Style
- index.html (updated)
- blog.html (new)
- contact.html (new)
- blog/*.html (new posts)

## Notes
[Any issues or special instructions]
```

---

## TASK 3: Progress Dashboard

Create file: `/briefings/PROGRESS.md`

```markdown
# Project Progress Dashboard

## Overall Status: IN PROGRESS

## Agent Status
| Agent | Task | Status | Blockers |
|-------|------|--------|----------|
| Gemini | Core Architecture | [ ] Pending | None |
| Codex | CSS Styling | [ ] Waiting | Needs Gemini |
| Copilot | JavaScript | [ ] Waiting | Needs Codex |
| Qwen | Research | [ ] In Progress | None |
| Mistral | Coordination | [x] Active | None |
| Jules | Assets | [ ] Waiting | Needs structure |

## Completion Checklist
- [ ] Navigation system
- [ ] Newsletter component
- [ ] Contact page
- [ ] Blog system
- [ ] Media gallery
- [ ] Form validation
- [ ] Backend integration

## Issues Log
| # | Issue | Reported By | Assigned To | Status |
|---|-------|-------------|-------------|--------|
| - | - | - | - | - |
```

Update after each agent interaction.

---

## TASK 4: Research Relay

When Qwen completes research:

1. Read Qwen's research files
2. Extract actionable items
3. Create relay to appropriate agent

Example: `/briefings/relay/002-qwen-research-to-copilot.md`

```markdown
# Relay: Qwen Research -> Copilot

## Newsletter Integration
Recommended: Buttondown
Action URL: https://buttondown.email/api/emails/embed-subscribe/[username]

Update newsletter form in main.js to POST to this endpoint.

## Contact Form Backend
Recommended: Formspree
Action URL: https://formspree.io/f/[form-id]

Update contact form action attribute.
```

---

## TASK 5: Final Documentation

After all agents complete, create:

`/briefings/COMPLETION_REPORT.md`

```markdown
# Project Completion Report

## Summary
[What was built]

## New Features
1. Navigation - [status]
2. Newsletter - [status]
3. Contact - [status]
4. Blog - [status]
5. Media - [status]

## Files Created
[List]

## Files Modified
[List]

## Integration Notes
[How to deploy, what external services to set up]

## Known Issues
[If any]

## Next Steps
[Future enhancements]
```

---

## Communication Rules

1. **DO NOT** modify HTML, CSS, or JS files
2. **DO** create and update markdown files in /briefings/
3. **DO** accurately track agent progress
4. **DO** format relay messages clearly
5. **DO** flag blockers immediately

---

## Deliverables Checklist

- [ ] `/briefings/FILE_INDEX.md` - Created and maintained
- [ ] `/briefings/PROGRESS.md` - Created and maintained
- [ ] `/briefings/relay/*.md` - Created as needed
- [ ] `/briefings/COMPLETION_REPORT.md` - Final report

---

**Status:** ACTIVE - START IMMEDIATELY
