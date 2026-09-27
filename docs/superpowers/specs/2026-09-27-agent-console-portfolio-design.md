# Agent Console Portfolio — Design Spec

Date: 2026-09-27  
Status: Approved for implementation  
Site: gorkemtanagardigil.com

## Intent

Rewrite the portfolio away from a submarine-deck metaphor into an **Agent Console**: a futuristic, high-craft technical surface that leads with **AI systems engineering** (agents, RAG, pipelines), supports mixed audiences (hiring, clients, founders), and ships strong SEO + GEO.

## Decisions locked

| Topic | Choice |
|--------|--------|
| Primary audience | Mixed (hiring + clients + founders) |
| Lead identity | AI systems engineer |
| Navy / submarine | Off homepage; About / LinkedIn only |
| Visual intensity | Memorable interactive beat early; not WebGL spectacle |
| Direction | Agent Console |

## Information architecture

| Route | Purpose |
|--------|---------|
| `/` | Homepage: hero + agent loop + proof + featured work + lab + writing + contact |
| `/work/[slug]` | Case studies (3–4 deep) |
| `/lab` | Experiments / smaller products index |
| `/writing`, `/writing/[slug]` | Technical posts (replaces Captain’s Log naming) |
| `/about` | Bio; navy origin lives only here |
| `/contact` | Email, LinkedIn, GitHub, resume |
| `/missions` | Public launch / visibility checklist (Search Console, indexing, etc.) |

### Homepage sections (one job each)

1. **Hero** — Name as brand signal; one-line AI systems positioning; CTAs View work / Contact.
2. **Agent Loop** — Interactive Plan → Tool → Observe → Adapt stepper (signature beat).
3. **Proof strip** — 3–5 factual outcome bullets (no invented metrics).
4. **Featured work** — 3 case study cards.
5. **Lab** — Compact product/experiment grid.
6. **Writing** — Latest posts.
7. **Contact** — Clear paths.
8. **Missions teaser** — Link to visibility checklist.

## Visual system

- Dark graphite base; single cool accent (teal / electric cyan). Avoid purple gradients and neon cyberpunk clutter.
- Expressive display font + monospace for console UI (not default Geist-only look).
- Atmosphere: subtle grid / node field; depth without flat black or card soup.
- Motion: (1) agent loop stages, (2) section reveal, (3) work-card hover/focus.
- `prefers-reduced-motion`: static loop frame + captions.
- Mobile: same content as compact stepper; no desktop-only traps.

## Signature beat — Agent Loop

Seed content from a real project (prefer Legacy Rule Extractor or PostFaceless pipeline):

1. **Plan** — Goal decomposition  
2. **Tool** — API / model / extractor call  
3. **Observe** — Evaluation vs answer key / creator review  
4. **Adapt** — Retry / refine / schedule  

Controls: click stages + keyboard; progressive enhancement.

## Content principles

- Lead with AI systems; products and production (payroll/K8s) as proof.
- Case studies use CASE framing: Context, Approach, Solution, Evidence.
- No fake metrics. Prefer qualitative production claims already published.
- Navy story only on `/about`.

## SEO / GEO

**Keep / extend**

- `Person` JSON-LD with `sameAs` (LinkedIn, GitHub); add `WebSite`, `BlogPosting`, `CreativeWork` for work items.
- `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`.
- Canonical URLs; Open Graph / Twitter cards per page.
- Factual, citable prose (entities, dates, stack names).

**Launch missions (tracked on `/missions`)**

- [ ] Verify domain ownership in Google Search Console  
- [ ] Submit sitemap  
- [ ] Request indexing for `/` and key case studies  
- [ ] Validate JSON-LD (Rich Results / schema tester)  
- [ ] Confirm `llms.txt` / `llms-full.txt` reachable  
- [ ] Bing Webmaster Tools (optional second index)  
- [ ] Core Web Vitals pass (mobile LCP)  
- [ ] Update LinkedIn / GitHub profile links to new positioning  

## Tech

- Next.js App Router + Tailwind (rewrite UI, keep stack).
- Remove intro sonar sequence and depth-meter submarine chrome from primary experience.
- i18n: English-first for new console; existing dictionaries can be migrated later.

## Out of scope (v1)

- Full WebGL / 3D portfolio  
- Skill percentage bars  
- Submarine theme on homepage  
- Invented performance numbers  

## Success criteria

- First viewport: brand + AI line + CTA + start of agent loop.  
- Visitor can complete the agent loop interaction in <30s.  
- Three case studies link to real depth pages.  
- SEO/GEO primitives present; Search Console steps listed as incomplete missions.  
- Mobile readable; reduced-motion safe.
