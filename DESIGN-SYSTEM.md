# Product-detail sections

Shared tokens are in `design-system.css`, loaded after the base site stylesheet. Section-specific storytelling belongs in its own stylesheet. Trust keeps its existing interaction; Transform uses a sticky narrative and a sequence of four viewport-scale steps.

- Palette: background #F7F8FA, text #172033, blue #3478F6, teal #39C6B4, blue surface #EAF2FF. Teal signals a completed step or an applied edit.
- Content width: 1200 px; horizontal inset follows the content width, then 25/20 px on smaller screens.
- Section spacing: 120 px desktop, 75/70 px tablet/mobile.
- Sticky narrative: 390 px desktop, 340 px below 1260 px; top offset 140 px. Static below 900 px.
- Heading: 42–61 px; supporting lead 23 px, 21 px on mobile. Body 17 px; secondary evidence notes 12–14 px.
- Concept cards: white, 20 px radius, #D7E1EF border, restrained shadow shared with Trust.
- Evidence affordance: `.evidence-link`; one native dialog serves both sections and renders selected original assets, captions, close control and a full-resolution link.
- Modal accessibility: Escape dismissal, native focus containment and return, scroll lock, descriptive image alt text. Buttons use keyboard-visible focus.
- Motion: 200 ms small transitions, 400 ms relationship transitions; cubic-bezier(.22,.61,.36,1). Reduced-motion mode exposes final content without animation.
- Transform: activate resource stack once; show request, then inserted lesson block, then confirmation. Editable slide demonstration is local only.
- Scope: P01–P06 and P09–P12 content remains unchanged. Do not copy Transform's scrolling structure into future sections by default.
