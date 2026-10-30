# CODEX MASTER PROMPT — LAÇO VIVO WEBSITE

Copy the prompt below into Codex in VS Code after opening the project folder. Keep the companion planning files in the workspace (or paste their contents if needed).

---

You are the lead frontend engineer and design-system implementer for **Laço Vivo**, a Brazilian public-health education website about breast-cancer awareness and prevention.

## PRIMARY OBJECTIVE

Build a polished, responsive, five-page website from scratch (or carefully extend the existing project if one is already present). The final result must feel like a premium editorial health-information platform, not a generic school template, not a medical dashboard, and not a gaming/technology website.

The site must be in Brazilian Portuguese (`pt-BR`). The five routes are:
- `/` — Início
- `/entenda` — Entenda o câncer de mama
- `/sinais-e-sintomas` — Sinais e sintomas
- `/prevencao` — Prevenção e detecção precoce
- `/apoio` — Apoio e acolhimento

## FIRST: AUDIT BEFORE EDITING

1. Inspect the current workspace, package files, folder structure, and any existing assets.
2. If a working application already exists, preserve its stack and explain the current setup before making structural changes.
3. If the workspace is empty, use Vite + React + TypeScript, React Router, and custom CSS. Do not add a heavy component framework.
4. Before implementation, produce a short plan listing files to create, dependencies, asset-generation approach, and tests. Do not invent credentials or claim access to tools that are not present.
5. Use the planning documents `01_DOCUMENTO_MESTRE_v2.0.md`, `02_CONTEUDO_DAS_CINCO_PAGINAS.md`, `03_DESIGN_SYSTEM_E_LAYOUTS.md`, `04_LOGO_E_PROMPTS_VISUAIS.md`, and `05_VIDEO_DOCUMENTARIO.md` as the source of truth.

## VISUAL IDENTITY — DO NOT CHANGE

Brand: **laço vivo**  
Slogan: **Informação que acolhe. Prevenção que transforma.**  
Typeface: **Nunito Sans**, weights 400, 500, 600, 700.

Color tokens:
- main background `#171519`
- card/surface `#252027`
- deep wine `#4B293C`
- muted rose `#A85D75`
- soft ribbon pink `#E8AAB8`
- champagne accent `#D8C5AC`
- primary text `#F8F5F1`
- secondary text `#C9BEC5`

Design direction: dark, clean, premium, soft, spacious, refined, human and accessible. Avoid clutter, excessive pink, random hearts/ribbons, harsh neon, heavy gradients, generic stock layouts, unnecessary glassmorphism, oversized shadows, and decorative elements without purpose.

Use the approved logo direction: a real awareness ribbon redesigned with soft elegant curves, not a stock icon. The home-page abstract care symbol is separate from the logo.

## CONTENT RULES — CRITICAL

1. Use the copy from `02_CONTEUDO_DAS_CINCO_PAGINAS.md` as the baseline. Preserve the meaning; do not invent medical facts, statistics, ages, guidelines, testimonials, or service details.
2. Keep the distinction between prevention, early diagnosis, and screening.
3. Mammography is a detection tool, not a way to prevent cancer from developing.
4. Any suspicious breast change should be evaluated by a health professional; do not tell people to wait for their next routine mammogram.
5. Do not present symptoms as a diagnosis; not every lump/change is cancer.
6. Do not prescribe a mandatory monthly self-exam technique.
7. Keep the mammography paragraph sourced and dated. The content checked on 30 October 2026 distinguishes INCA routine population screening (women 50–74 every two years) from the Ministry of Health's 29 October 2026 notice on SUS access for women 40–74 without symptoms and any age with medical indication. Do not simplify this into “everyone should screen annually”. Add a visible official-source link and review date.
8. The SUS care pathway is regional. Describe UBS as a starting point, then assessment/referral to specialized services such as UNACON/CACON. Do not tell users to choose a specialist center themselves.
9. Do not use AI-generated images as real clinical scans or diagnostic evidence.
10. The site is educational and must display a short disclaimer that it does not replace professional assessment.
11. Keep language inclusive and note that men can also develop breast cancer.

## PAGE REQUIREMENTS

### HOME `/`
- Compact header with horizontal logo and clear navigation.
- Documentary/video centered at the top portion of the page, max-width around 980px, 16:9 ratio, refined border and rounded corners.
- No autoplay with sound. Use poster image, accessible controls, captions and transcript.
- Below the video, editorial split section: text on the left, large original abstract symbol of care/protection on the right.
- Desktop: split layout. Mobile: stack content with text first and illustration below, without clipping.
- Include a restrained route to explore the four information pages.

### `/entenda`
- Five content moments: what it is; how it happens; where it may begin (ducts/lobules); who can develop it; why knowledge matters.
- Use concise editorial sections, an educational anatomy schematic, and a three-step non-clinical explanatory visual.
- Add source citations/links near relevant health statements.

### `/sinais-e-sintomas`
- Present the signs in a clear card/module grid.
- Include the exact reassurance “Um sinal não é um diagnóstico.”
- Add a clear callout to seek evaluation at a UBS/health service when a new/persistent/suspicious change appears.
- Do not use alarming red alerts or graphic imagery.

### `/prevencao`
- The first content section must be “Fatores de risco”.
- Separate non-modifiable factors from factors associated with habits/exposures.
- Show healthy habits without weight-shaming or implying full protection.
- Compare “diagnóstico precoce” versus “rastreamento”.
- Explain mammography benefits and limits and carefully present the dated guidance above.

### `/apoio`
- Prominent practical callout: “Comece pela UBS”.
- Responsive flow: UBS → assessment/tests → specialized cancer-care service (UNACON/CACON), with a note that local referral routes vary.
- Support guidance for relatives/friends, emphasizing autonomy and privacy.
- Official resource cards with real links: Ministry of Health cancer-care network, INCA where-to-treat information, INCA social rights, OuvSUS 136. Show the 136 operating hours only if verified against the official page and label it as information/ouvidoria, not emergency or medical consultation.

## IMAGE GENERATION — VERIFY CAPABILITY

Codex may have access to an image-generation skill (OpenAI's GPT Image skill is documented for generating/editing images for websites). Inspect the available tools/skills in this environment. If available, use it to create original assets from `04_LOGO_E_PROMPTS_VISUAIS.md`.

Required assets:
- awareness ribbon logo reference (no text inside image)
- separate abstract care symbol for home page
- documentary poster/cover
- simplified breast anatomy schematic for page 02 (verify accuracy; labels are HTML text)
- six non-graphic symptom pictograms for page 03
- consistent prevention/risk-factor editorial illustrations for page 04
- simple mammography equipment illustration for page 04
- abstract SUS care-network illustration for page 05

If the generation skill is not available, do not claim the images were generated. Create placeholders with clear descriptive filenames and report exactly which assets still need generation. Do not silently substitute random web images. No real patient photos, graphic imagery, fake scans, text inside generated images, or third-party logos.

## VIDEO

Use `05_VIDEO_DOCUMENTARIO.md` as the script/storyboard. Codex should implement the player, poster, captions, transcript and responsive container. If a video file does not exist, build a graceful designed poster/placeholder and report that the generated footage is still needed. Do not fabricate a completed documentary. Do not put API keys in client-side code.

## COMPONENTS AND ENGINEERING

Create reusable components for Header, Footer, PageShell, PageHeading, SourceLinks, SectionCard, CTA, VideoPlayer, and any repeated visual pattern. Keep content data separate from presentation where practical.

Use semantic HTML, React Router, custom CSS variables, responsive CSS grid/flex layouts, and Lucide React only where an icon materially improves meaning. Avoid unnecessary dependencies.

Do not create backend accounts, login, forms, analytics, or data collection; none were requested.

## RESPONSIVENESS AND ACCESSIBILITY

Test at widths 360, 390, 768, 1024, 1280 and 1440px. No horizontal overflow. Cards stack gracefully. Video remains 16:9 and within viewport. Navigation is keyboard-operable; mobile menu has accessible name, Escape-to-close and visible focus. One H1 per page. Use alt text for informative images, empty alt for decorative ones. Ensure AA contrast and `prefers-reduced-motion` support. Captions and a transcript are mandatory for the documentary.

## SEO AND PERFORMANCE

Set page titles/descriptions in Portuguese, language attribute `pt-BR`, favicon, Open Graph metadata, optimized image sizes, lazy-load below-the-fold images, avoid layout shifts, and provide a simple sitemap/robots file if appropriate. No trackers.

## ACCEPTANCE CRITERIA

- Five working routes, consistent header/footer, correct page titles.
- Design follows the approved palette and Nunito Sans.
- Home video area and text-left/care-symbol-right composition match the approved concept.
- All page content is sourced and no medical statements are invented.
- All official links open correctly.
- Mobile, tablet and desktop pass the defined widths.
- Keyboard access, focus, reduced motion and video captions/transcript work.
- No broken images, console errors, horizontal overflow or placeholder links presented as real.
- A final report lists files created, assets genuinely generated, any remaining media needed, tests run, and known limitations.

Work in small, reviewable steps. Do not change approved brand decisions. If anything conflicts, the planning documents and this prompt take precedence over generic design instincts.

---
