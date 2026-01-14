# RESEARCH DIRECTIVE: Academic Paper Mining

**For:** Qwen (primary), Jules (content synthesis)
**Purpose:** Build scientifically-grounded content library

---

## Research Domains

### 1. Urban Architecture & City Redesign

**Search queries:**
- `"urban metabolism" sustainable cities filetype:pdf`
- `"15-minute city" urban planning site:arxiv.org`
- `"car-free cities" pedestrian urbanism`
- `"regenerative urbanism" architectural review`
- `"urban commons" shared space design`
- `"superblocks" Barcelona urban model`
- `"sponge city" water management urban`

**Key authors/sources:**
- Jan Gehl - "Cities for People"
- Janette Sadik-Khan - street transformation
- Carlos Moreno - 15-minute city concept
- Andrés Duany - New Urbanism
- Sim Van der Ryn - ecological design

**Target journals:**
- Urban Studies
- Journal of Urban Design
- Cities
- Landscape and Urban Planning
- Environment and Planning B

---

### 2. Alternative Education Systems

**Search queries:**
- `"democratic education" outcomes research`
- `"Reggio Emilia approach" learning environments`
- `"forest schools" cognitive development`
- `"unschooling" academic performance meta-analysis`
- `"place-based education" community learning`
- `"intergenerational learning" spaces design`
- `"learning commons" educational architecture`

**Key frameworks:**
- Montessori method - prepared environments
- Waldorf/Steiner - developmental stages
- Sudbury model - self-directed learning
- Finnish education model - play-based
- Indigenous pedagogies - land-based learning

**Target sources:**
- Journal of Educational Psychology
- Comparative Education Review
- Environmental Education Research
- International Journal of Educational Research

---

### 3. Rewilding & Renaturalization

**Search queries:**
- `"urban rewilding" biodiversity corridors`
- `"novel ecosystems" urban ecology`
- `"biophilic urbanism" nature-based solutions`
- `"green infrastructure" ecosystem services`
- `"wildlife corridors" urban planning`
- `"spontaneous vegetation" urban biodiversity`
- `"pollinator pathways" city design`

**Key concepts:**
- Trophic rewilding - keystone species reintroduction
- Miyawaki forests - rapid urban forest creation
- Blue-green infrastructure - water + vegetation
- Ecosystem services valuation
- Nature-based solutions (NBS) EU framework

**Target journals:**
- Restoration Ecology
- Ecological Engineering
- Urban Forestry & Urban Greening
- Biological Conservation

---

### 4. Social Systems & Governance

**Search queries:**
- `"commons governance" Ostrom principles`
- `"participatory budgeting" outcomes research`
- `"cooperative housing" social outcomes`
- `"time banking" community resilience`
- `"mutual aid networks" urban communities`
- `"cohousing" social capital formation`

**Key theorists:**
- Elinor Ostrom - commons governance
- David Graeber - mutual aid, gift economy
- Silvia Federici - reproductive commons
- Christian Iaione - urban commons

**Target sources:**
- Journal of Urban Affairs
- International Journal of the Commons
- Housing Studies
- Community Development Journal

---

### 5. Resilience & Autarky Systems

**Search queries:**
- `"urban food systems" self-sufficiency`
- `"vertical farming" urban integration economics`
- `"circular economy" urban metabolism`
- `"district energy systems" community scale`
- `"water sensitive urban design" WSUD`
- `"community energy" cooperative models`

**Key frameworks:**
- Doughnut Economics (Kate Raworth)
- Circular Economy (Ellen MacArthur Foundation)
- Transition Towns movement
- Permaculture design principles
- Industrial ecology

---

### 6. Psychology of Place & Wellbeing

**Search queries:**
- `"environmental psychology" urban design`
- `"restorative environments" attention restoration theory`
- `"place attachment" community wellbeing`
- `"acoustic ecology" urban soundscapes`
- `"thermal comfort" outdoor spaces`
- `"prospect-refuge theory" public space design`

**Key theories:**
- Attention Restoration Theory (Kaplan & Kaplan)
- Stress Recovery Theory (Ulrich)
- Place attachment theory
- Affordance theory (Gibson)
- Biophilia hypothesis (Wilson)

---

## Search Platforms

### Open Access
1. **arXiv.org** - preprints (search: `urban sustainability`)
2. **SSRN** - social science papers
3. **CORE** - aggregated open access
4. **Semantic Scholar** - AI-powered search
5. **Google Scholar** - broad coverage
6. **ResearchGate** - author networks
7. **DOAJ** - open access journals

### Institutional (if access available)
- JSTOR
- Web of Science
- Scopus
- ScienceDirect

### Grey Literature
- UN-Habitat reports
- C40 Cities case studies
- IPCC urban chapters
- EU Horizon project reports
- World Bank urban development

---

## Output Format

### For each paper found, create entry in `/briefings/research/papers/`:

```markdown
# [Paper Title]

**Citation:** [Authors (Year). Title. Journal, Volume(Issue), pages. DOI]
**Access:** [Open/Paywalled] [Link]
**Domain:** [Urban Architecture | Education | Rewilding | Governance | Resilience | Psychology]

## Key Findings
- [Bullet 1]
- [Bullet 2]
- [Bullet 3]

## Relevant Quotes
> "[Direct quote with page number]"

## Application to Wunderwelt
[How this research supports project concepts - 2-3 sentences]

## Content Potential
- [ ] Blog post topic
- [ ] Feature card concept
- [ ] Calculator/tool idea
- [ ] Visual/infographic idea

## Tags
#urban #design #[specific-tags]
```

---

## Research-to-Content Pipeline

### Phase 1: Collection (Qwen)
1. Search each domain systematically
2. Create paper summaries in `/briefings/research/papers/`
3. Flag highest-impact findings
4. Create `/briefings/research/PAPER_INDEX.md` with all papers

### Phase 2: Synthesis (Jules)
1. Group papers by theme
2. Identify narrative threads
3. Create content outlines based on research
4. Generate expanded blog post list

### Phase 3: Content Creation (Gemini)
1. Write research-backed blog posts
2. Create "Action Modules" with citations
3. Build interactive tools based on data

---

## Expanded Blog Post List (Research-Driven)

Based on research domains, target **15-20 posts**:

### Urban Architecture Series
1. The 15-Minute City: From Theory to Practice
2. Superblocks: Barcelona's Quiet Revolution
3. Designing for 150: Dunbar-Scale Neighborhoods
4. The Death of the Parking Lot
5. Vertical Villages: Density Without Alienation

### Education Reimagined Series
6. The City as Classroom: Place-Based Learning
7. Forest Schools and the Neuroscience of Play
8. Intergenerational Spaces: Learning Across Ages
9. Democratic Schools: Self-Direction at Scale
10. The Architecture of Learning Environments

### Rewilding the City Series
11. Miyawaki Forests: Urban Wilderness in 20 Years
12. Pollinator Pathways: Designing for Bees
13. The Spontaneous City: Embracing Urban Wildness
14. Blue-Green Infrastructure: Water as Life
15. Soundscapes: The Acoustic Ecology of Cities

### Governance & Commons Series
16. Ostrom's Principles for Urban Commons
17. Participatory Budgeting: Democracy in Action
18. Time Banks: Currency Beyond Money
19. Cooperative Housing Models That Work
20. Liquid Democracy Tools: A Practical Guide

### Resilience Systems Series
21. Urban Food Sovereignty: The 80% Challenge
22. Community Energy: Power to the People
23. Circular Districts: Zero Waste at Scale
24. Water Autonomy: Sponge City Principles
25. The Autarky Score: Measuring Self-Sufficiency

---

## Quality Criteria for Papers

**Include if:**
- Peer-reviewed OR reputable grey literature
- Published 2015-2025 (recent)
- Empirical data or robust theoretical framework
- Actionable implications
- Cited by 10+ other works (for older papers)

**Exclude:**
- Opinion pieces without evidence
- Outdated models (pre-2010 unless seminal)
- Paywalled with no summary available
- Non-English without translation

---

## Deliverables

### Qwen produces:
- [ ] `/briefings/research/papers/` - individual paper summaries (target: 30-50)
- [ ] `/briefings/research/PAPER_INDEX.md` - master list with domains
- [ ] `/briefings/research/KEY_FINDINGS.md` - top 10 most impactful findings
- [ ] `/briefings/research/DATA_POINTS.md` - statistics for infographics

### Jules produces:
- [ ] `/briefings/content/expanded-blog-plan.md` - 20+ post outlines
- [ ] `/briefings/content/research-cards.md` - feature card concepts
- [ ] `/briefings/content/interactive-tools.md` - calculator/tool specs
- [ ] `/briefings/content/infographic-briefs.md` - visual content specs

---

**Status:** READY FOR DEEP RESEARCH
