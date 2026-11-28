# Bora Campo — frontend engineering standard

## Design ownership
Doop (https://doop.design/c/GVr761oaFI) is the visual reference. The product owns its tokens and semantic components; upstream libraries supply behavior and references, not an independent visual identity. Preserve existing brand, use a consistent icon family and avoid default library themes. Tailwind v4 is already present in both repositories. No wholesale framework rewrite.

## Tool selection
| Tool | Source | Policy |
|---|---|---|
| Anthropic frontend-design | https://github.com/anthropics/skills/tree/main/skills/frontend-design | Direction, composition, typography and non-generic UI; review before installation |
| Impeccable | https://github.com/pbakaus/impeccable | Critique, audit, polish, detector; review hooks and external calls before enabling |
| shadcn/ui | https://github.com/shadcn-ui/ui | Adopt selected components as owned source; map tokens; do not initialize destructively |
| Radix | https://github.com/radix-ui/primitives | Accessible behavior for dialogs, popovers, menus and tabs; choose a single primitive family |
| cmdk | https://github.com/dip/cmdk | Command search only after navigation and permissions are defined |
| Magic UI | https://github.com/magicuidesign/magicui | Selective marketing effects only; avoid gratuitous decorative motion |
| Sonner | https://github.com/emilkowalski/sonner | Global operation feedback; inline field errors remain inline |
| Tailwind CSS | https://github.com/tailwindlabs/tailwindcss | Existing styling foundation; semantic CSS variables |
| Storybook | https://github.com/storybookjs/storybook | Isolated component states; dev-only, no real customer data |
| Vaul | https://github.com/emilkowalski/vaul | Evaluate maintenance and React compatibility before choosing mobile drawer |
| Tabler Icons | https://github.com/tabler/tabler-icons | Proposed single icon family; migrate existing Icon adapter incrementally |
| Tremor | https://github.com/tremorlabs/tremor | Dashboard composition reference; avoid duplicate component stacks |
| Recharts | https://github.com/recharts/recharts | Charts driven by real data, not decorative dashboards |
| Mantine | https://github.com/mantinedev/mantine | Reference only; no second component framework |
| daisyUI | https://github.com/saadeghi/daisyui | Reference only; no second theme framework |
| Motion.dev | https://motion.dev/ | Stateful React animation |
| GSAP | https://gsap.com/ | Marketing timelines only when justified |
| Transitions.dev | https://transitions.dev/ | Consistent interaction recipes, respect licensing |

## Installation workflow
Run installers only in a trusted development workspace after reviewing versions, source, licenses, generated configuration, hooks and network behavior. Pin versions and commit lockfiles. No unattended external hooks or dependency installers in production CI. Official Impeccable installation: `npx impeccable install` (choose project scope; review hooks), then reload agent and run its init command. Anthropic skill source is linked above; install via the chosen agent's supported mechanism. shadcn skill and existing-project instructions: https://ui.shadcn.com/docs/skills and https://ui.shadcn.com/docs/installation. Do not run a bulk init over existing CSS or overwrite components. Motion installation instructions remain in docs/UI-MOTION.md. These are adoption decisions, not a claim that packages or skills have been installed.

## Product design contract
- Product: compact, readable operational screens, sidebar groups, meaningful page headings and consistent action placement. One primary action per context. Prefer tables for comparing records, not one card per row. Avoid every section being a bordered card.
- Marketplace: mobile-first search, useful real availability, trustworthy arena data, clear contact and next action. Never fabricate ratings, photos or inventory.
- Landing: editorial hierarchy, authentic product screenshots, specific benefits and real proof; one primary conversion path per section. Distinguish available modules from roadmap. No false urgency or invented testimonials.
- Use whitespace, typography and alignment before adding visual decoration. Avoid unnecessary pills, gradients, glowing borders, generic bento grids, oversized headings in administrative views, repetitive stock icons and excessive rounded containers.
- Define default, hover, focus, pressed, disabled, pending, empty, error, success and mobile states for every relevant component. Dialogs retain entered values on validation failure; destructive actions need explicit confirmation. Toasts are supplemental to inline errors and persistent status.
- Keep accessible labels, keyboard navigation, focus restoration and visible focus; respect reduced motion. CSS handles straightforward feedback; use Motion for stateful transitions, GSAP only for marketing storytelling. Do not animate the same property with multiple engines.
- Preserve server authorization, RLS, price and business rules when changing UI. Do not replace functionality with static previews. Demo remains fictional and isolated.

## Implementation sequence
1. Audit existing screens and styles in browser at 390, 768 and 1440 px. Record screenshots and issue list; identify duplication and existing tokens.
2. Establish a shared component contract: Button, Input, Select, Field, Dialog, Drawer, Tabs, Badge/Status, Toast, Table, EmptyState, Skeleton, PageHeader and Icon. Review in Doop; implement one primitive at a time. Preserve old routes and forms.
3. Add Storybook for isolated visual states and accessibility checks once dependencies can be installed and locked. No customer records in fixtures.
4. Migrate authenticated screens and demo together, preserving real workflows and distinguishing simulated capabilities. Introduce charts with actual aggregates and loading/empty/error states.
5. Redesign marketplace and landing from approved compositions; use real product screenshots and only truthful claims. Replace monolithic HTML string with semantic React components incrementally.
6. Validate build/typecheck, functional and visual regression, keyboard, mobile, contrast, reduced motion and interaction latency. Audit with Impeccable after installation. Report evidence and limits; do not claim visual approval solely from build success.

## Acceptance
Every changed surface has screenshot evidence and verified interactions or an explicitly recorded pending check. No unapproved external packages, overlapping UI systems, unreviewed hooks, production test data, or silent changes to subscription and billing behavior.
