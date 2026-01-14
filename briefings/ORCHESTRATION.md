# AGENT SWARM ORCHESTRATION

## Project: Wunderwelt - Projekt Kindergarten Enhancement

**Agents:** 4 (Gemini-A, Gemini-B, Codex, Copilot, Qwen)
**Objective:** Contact, Newsletter, Blog (25 posts), Media Integration

---

## Agent Roster

| Agent | Briefing | Role | Can Start |
|-------|----------|------|-----------|
| **Qwen** | `qwen.md` | Research + Documentation | Immediately |
| **Gemini-A** | `gemini-A.md` | Pages & Infrastructure | Immediately |
| **Gemini-B** | `gemini-B.md` | Blog Content (25 posts) | After Qwen research |
| **Codex** | `codex.md` | CSS Styling | After Gemini-A |
| **Copilot** | `copilot.md` | JavaScript | After Codex |

---

## Execution Flow

```
                    ┌─────────────────────────────────┐
                    │         START PARALLEL          │
                    └─────────────────────────────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     │
    ┌─────────────────┐   ┌─────────────────┐            │
    │     QWEN        │   │   GEMINI-A      │            │
    │                 │   │                 │            │
    │ • Newsletter    │   │ • Navigation    │            │
    │   research      │   │ • Footer        │            │
    │ • Contact       │   │ • Newsletter    │            │
    │   backend       │   │   section       │            │
    │ • 30-50 papers  │   │ • contact.html  │            │
    │ • File index    │   │ • blog.html     │            │
    │ • Image prompts │   │ • about.html    │            │
    │                 │   │ • Post template │            │
    └────────┬────────┘   └────────┬────────┘            │
             │                     │                     │
             │                     ▼                     │
             │            ┌─────────────────┐            │
             │            │     CODEX       │            │
             │            │                 │            │
             │            │ • Navigation    │            │
             │            │   CSS           │            │
             │            │ • Footer CSS    │            │
             │            │ • Newsletter    │            │
             │            │   CSS           │            │
             │            │ • Forms CSS     │            │
             │            │ • Blog CSS      │            │
             │            │ • Post CSS      │            │
             │            │ • Responsive    │            │
             │            └────────┬────────┘            │
             │                     │                     │
             │                     ▼                     │
             │            ┌─────────────────┐            │
             │            │    COPILOT      │            │
             │            │                 │            │
             │            │ • Mobile nav    │            │
             │            │ • Form          │            │
             │            │   validation    │            │
             │            │ • Newsletter    │            │
             │            │   handler       │            │
             │            │ • Blog filters  │            │
             │            │ • Animations    │            │
             │            │ • Share buttons │            │
             │            └────────┬────────┘            │
             │                     │                     │
             ▼                     │                     │
    ┌─────────────────┐            │                     │
    │   GEMINI-B      │◄───────────┘                     │
    │                 │                                  │
    │ • 25 blog posts │                                  │
    │   with research │                                  │
    │   citations     │                                  │
    │ • Action        │                                  │
    │   modules       │                                  │
    │ • References    │                                  │
    └────────┬────────┘                                  │
             │                                           │
             ▼                                           │
    ┌─────────────────────────────────────────────────────┐
    │                    COMPLETE                         │
    │                                                     │
    │  Qwen: Final validation + completion report         │
    └─────────────────────────────────────────────────────┘
```

---

## Detailed Execution Sequence

### Phase 1: Parallel Start (Immediate)

**Qwen starts:**
1. Newsletter service research → `research/newsletter-services.md`
2. Contact backend research → `research/contact-backends.md`
3. Academic paper mining (all 6 domains)
4. Create FILE_INDEX.md, PROGRESS.md

**Gemini-A starts:**
1. Add navigation to index.html
2. Add footer to index.html
3. Add newsletter section to index.html
4. Create contact.html
5. Create blog.html
6. Create about.html
7. Create blog/post-template.html
8. Create includes/ components

### Phase 2: CSS (After Gemini-A)

**Codex:**
1. Add new CSS variables
2. Navigation styles (desktop + mobile)
3. Footer styles
4. Newsletter component styles
5. Contact form styles
6. Blog listing styles
7. Single post styles
8. About page styles
9. Utility classes
10. Responsive breakpoints

### Phase 3: JavaScript (After Codex)

**Copilot:**
1. Navigation (toggle, scroll, active)
2. Contact form validation
3. Newsletter handlers
4. Blog filters
5. Reading time calculator
6. Share buttons
7. Scroll animations
8. Smooth scroll
9. Lazy loading

### Phase 4: Blog Content (After Qwen Research)

**Gemini-B:**
1. Read Qwen's paper summaries
2. Create 5 Urban Architecture posts
3. Create 5 Education posts
4. Create 5 Rewilding posts
5. Create 5 Governance posts
6. Create 5 Resilience posts
7. Create 3 original posts (autarky, biophilic, liquid democracy)

### Phase 5: Finalization

**Qwen:**
1. Validation testing
2. Accessibility audit
3. Final documentation
4. Completion report

---

## File Ownership Matrix

| File/Folder | Owner | Dependencies |
|-------------|-------|--------------|
| `index.html` | Gemini-A | - |
| `blog.html` | Gemini-A | - |
| `contact.html` | Gemini-A | - |
| `about.html` | Gemini-A | - |
| `blog/post-template.html` | Gemini-A | - |
| `blog/**/*.html` | Gemini-B | Qwen research |
| `css/style.css` | Codex | Gemini-A HTML |
| `js/main.js` | Copilot | Codex CSS |
| `briefings/research/*` | Qwen | - |
| `briefings/FILE_INDEX.md` | Qwen | - |
| `briefings/PROGRESS.md` | Qwen | - |
| `briefings/assets/*` | Qwen | - |

---

## Deliverables Summary

### Pages (Gemini-A)
- [ ] `index.html` (updated with nav, newsletter, footer)
- [ ] `blog.html`
- [ ] `contact.html`
- [ ] `about.html`
- [ ] `blog/post-template.html`

### Blog Posts (Gemini-B) - 28 total
- [ ] 5 Urban Architecture posts
- [ ] 5 Education posts
- [ ] 5 Rewilding posts
- [ ] 5 Governance posts
- [ ] 5 Resilience posts
- [ ] 3 Original posts

### Styles (Codex)
- [ ] Complete `css/style.css` with all components

### Scripts (Copilot)
- [ ] Complete `js/main.js` with all functionality

### Research (Qwen)
- [ ] 30-50 paper summaries
- [ ] Service integration docs
- [ ] File index
- [ ] Progress tracking
- [ ] Image prompts
- [ ] Validation report

---

## Terminal Commands

### Start Parallel Agents

```bash
# Terminal 1: Qwen (research)
cd /path/to/Wunderwelt-Projekt-Kindergarten
# Run Qwen with briefings/qwen.md

# Terminal 2: Gemini-A (pages)
cd /path/to/Wunderwelt-Projekt-Kindergarten
# Run Gemini with briefings/gemini-A.md
```

### After Gemini-A Completes

```bash
# Terminal 3: Codex (CSS)
cd /path/to/Wunderwelt-Projekt-Kindergarten
# Run Codex with briefings/codex.md
```

### After Codex Completes

```bash
# Terminal 4: Copilot (JS)
cd /path/to/Wunderwelt-Projekt-Kindergarten
# Run Copilot with briefings/copilot.md
```

### After Qwen Research Ready

```bash
# Terminal 5: Gemini-B (blog posts)
cd /path/to/Wunderwelt-Projekt-Kindergarten
# Run Gemini with briefings/gemini-B.md
```

---

## Success Criteria

- [ ] All pages load without errors
- [ ] Navigation works on mobile and desktop
- [ ] All forms validate and show feedback
- [ ] Newsletter signup functional
- [ ] Contact form functional
- [ ] Blog filters work
- [ ] 28 blog posts with research citations
- [ ] Fully responsive design
- [ ] Animations smooth
- [ ] Accessibility audit passes

---

**Status:** IN PROGRESS - core pages, nav/footer/newsletter, and JS behaviors implemented; research + blog content pending
