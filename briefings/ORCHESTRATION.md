# AGENT SWARM ORCHESTRATION

## Project: Wunderwelt - Projekt Kindergarten Enhancement

**Objective:** Add Contact, Newsletter, Blog, and Media Integration features.

---

## Execution Order

```
PARALLEL TRACK A (Deep Research)     PARALLEL TRACK B (Initial Content)
┌─────────────────────────┐          ┌─────────────────────────┐
│  QWEN (Research)        │          │  JULES (Assets/Content) │
│  - Newsletter APIs      │          │  - Image prompts        │
│  - Contact backends     │          │  - Blog outlines (3)    │
│  - Media embeds         │          │  - Content templates    │
│  ──────────────────────  │          └───────────┬─────────────┘
│  PRIORITY: Paper Mining │                       │
│  - 30-50 academic papers │                      │
│  - 6 research domains   │                       │
│  - Key findings summary │                       │
└───────────┬─────────────┘                       │
            │                                     │
            ▼                                     │
┌───────────────────────────┐                    │
│  JULES (Content Expansion)│◄───────────────────┘
│  - Read Qwen's papers     │
│  - Expand to 25 blog posts│
│  - Research-backed outlines│
│  - Interactive tool specs │
└───────────┬───────────────┘
            │
            ▼
            ┌──────────────────────────┐
            │  MISTRAL (Coordination)  │
            │  - Relay findings        │
            │  - Update indexes        │
            └──────────────┬───────────┘
                           │
                           ▼
SEQUENTIAL TRACK (Implementation)
┌─────────────────────────────────────┐
│  GEMINI (Core Architecture)         │
│  - Create blog.html                 │
│  - Create contact.html              │
│  - Add newsletter to index.html     │
│  - Add navigation to all pages      │
│  - Create blog post files           │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  CODEX (CSS Styling)                │
│  - Style navigation                 │
│  - Style newsletter component       │
│  - Style contact form               │
│  - Style blog cards & posts         │
│  - Style media gallery              │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  COPILOT (JavaScript)               │
│  - Form validation                  │
│  - Newsletter handler               │
│  - Smooth scroll                    │
│  - Blog filtering                   │
│  - Scroll animations                │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  MISTRAL (Final)                    │
│  - Completion report                │
│  - Final index update               │
└─────────────────────────────────────┘
```

---

## Agent Role Summary

| Agent | Role | Strength Used | Can Start |
|-------|------|---------------|-----------|
| **Gemini** | Heavy lifting - HTML structure | Large context, coding | After Jules/Qwen |
| **Codex** | CSS styling | Code completion | After Gemini |
| **Copilot** | JavaScript logic | Interactive coding | After Codex |
| **Qwen** | Research & search | Web search, analysis | Immediately |
| **Mistral** | Coordination | Low-risk tasks | Immediately |
| **Jules** | Content & assets | Creative generation | Immediately |

---

## Communication Protocol

### Message Flow:
1. Qwen/Jules complete research/content → Signal Mistral
2. Mistral creates relay messages → `/briefings/relay/`
3. Gemini reads relays, implements structure → Signals Mistral
4. Mistral relays to Codex → Codex styles → Signals Mistral
5. Mistral relays to Copilot → Copilot adds JS → Signals Mistral
6. Mistral creates completion report

### Relay File Naming:
```
/briefings/relay/
├── 001-qwen-research-to-gemini.md
├── 002-jules-content-to-gemini.md
├── 003-gemini-structure-to-codex.md
├── 004-codex-styles-to-copilot.md
└── 005-completion-summary.md
```

---

## File Ownership

| File/Folder | Primary Owner | Can Modify |
|-------------|---------------|------------|
| `index.html` | Gemini | Gemini |
| `blog.html` | Gemini | Gemini |
| `contact.html` | Gemini | Gemini |
| `blog/*.html` | Gemini | Gemini |
| `css/style.css` | Codex | Codex |
| `js/main.js` | Copilot | Copilot |
| `briefings/*.md` | Owner agent | Owner only |
| `briefings/relay/*` | Mistral | Mistral only |
| `briefings/research/*` | Qwen | Qwen |
| `briefings/content/*` | Jules | Jules |
| `briefings/assets/*` | Jules | Jules |

---

## Conflict Resolution

If two agents need to modify the same file:
1. First agent completes and signals Mistral
2. Mistral notifies second agent
3. Second agent reads latest version before modifying

---

## Emergency Protocols

### If agent is stuck:
1. Document blocker in relay message
2. Mistral escalates to human
3. Continue with non-blocked tasks

### If conflict detected:
1. Stop modifications to conflicting file
2. Mistral creates merge instructions
3. Human or Gemini resolves

---

## Success Criteria

- [ ] All pages have consistent navigation
- [ ] Newsletter signup works (at least frontend)
- [ ] Contact form validates and shows feedback
- [ ] Blog listing shows 3 sample posts
- [ ] Individual posts render correctly
- [ ] All new components match existing aesthetic
- [ ] Site works without JavaScript (graceful degradation)
- [ ] Mobile responsive

---

## Launch Command Sequence

```bash
# Start parallel tracks first
# Terminal 1: Qwen
cd /path/to/project && qwen-agent briefings/qwen.md

# Terminal 2: Jules
cd /path/to/project && jules-agent briefings/jules.md

# Terminal 3: Mistral (coordination - keep running)
cd /path/to/project && mistral-agent briefings/mistral.md

# After research complete, start sequential:
# Terminal 4: Gemini
cd /path/to/project && gemini-agent briefings/gemini.md

# After Gemini complete:
# Terminal 5: Codex
cd /path/to/project && codex-agent briefings/codex.md

# After Codex complete:
# Terminal 6: Copilot
cd /path/to/project && copilot-agent briefings/copilot.md
```

---

**Status:** READY FOR EXECUTION
