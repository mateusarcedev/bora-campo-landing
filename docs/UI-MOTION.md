# Bora Campo — qualidade de interface e motion

Doop é referência visual: https://doop.design/c/GVr761oaFI . Não adicionar bibliotecas ou animações só para tornar a tela chamativa. Preservar o design system, priorizar hierarquia de informação, densidade, legibilidade, estados vazios, loading e erro, teclado, foco e responsividade. Sem gradientes decorativos excessivos, sombras pesadas, badges redundantes, cards aninhados ou entradas animadas em cada navegação.

## Ferramentas
- Motion.dev: padrão para layout compartilhado, reorder, presença, gestos e transições React que realmente precisam de estado. Usar motion/react e reduced motion; CSS para feedback simples. Documentação https://motion.dev/docs/react e AI Kit https://motion.dev/docs/ai-kit-install.
- GSAP: reservado à landing comercial para sequências, timelines e scroll narrativo justificado. Nunca combinar GSAP e Motion no mesmo elemento. https://github.com/greensock/gsap-skills.
- Transitions.dev: referência de transições essenciais (modal, menu, tabs, feedback), tokens semânticos e revisão; https://transitions.dev/skill. Não copiar receitas premium sem licença.

## Instalação de skills (ambiente com rede, revisar código e versões)
Na raiz de cada projeto: `npx motion-ai`, `npx skills add greensock/gsap-skills`, `npx skills add Jakubantalik/transitions.dev`, `npx skills add Jakubantalik/transitions.dev -s transitions-polish`. Escolher escopo do projeto e agentes desejados; registrar lockfiles e versões. Não executar instaladores em CI de produção. O ambiente atual não tem acesso ao registry/GitHub via shell, portanto estes comandos estão documentados e não foram executados.

## Motion tokens iniciais
Feedback 120ms, estado 180ms, overlay 220ms; easing cubic-bezier(.2,.8,.2,1). São decisões do Bora Campo, não uma reprodução literal dos tokens da biblioteca. Entrada de modal 6px/opacity; sem bloquear interação na saída. Usar transform/opacity onde apropriado, não animar layout de tabelas grandes. Respeitar prefers-reduced-motion. Não atrasar navegação ou confirmação para completar animação.

## Gate de entrega
Validar em 390, 768 e 1440px; keyboard, Escape, foco, contraste, estados vazios/erro/loading, reduced motion, ausência de layout shift e cliques responsivos. Conferir com Doop. Rodar build, testes do domínio e RLS. Não afirmar QA visual se não realizado.
