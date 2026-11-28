# BoraCampo — Landing page

Site institucional e comercial da plataforma de reservas e gestão de arenas. Pré-lançamento; funcionalidades e planos ainda não disponíveis comercialmente.

## Desenvolvimento local

Node.js 22, Next.js 16, TypeScript e Tailwind CSS 4.

```bash
npm install
cp .env.example .env.local
npm run dev
npm run typecheck
npm run build
```

Configure `NEXT_PUBLIC_APP_URL` com a URL do sistema. Não há acesso direto ao Supabase nesta aplicação. O lockfile deve ser gerado e versionado assim que as dependências forem instaladas em um ambiente com acesso ao registry.

## Projetos

- Sistema: https://github.com/mateusarcedev/bora-campo
- Vercel: https://vercel.com/devmateusarce/bora-campo-landing

## Estado atual

Shell responsivo, apresentação de funcionalidades, etapas e planos em preparação. A identidade visual segue os tokens do protótipo. Ver `design/README.md`. Importação do HTML original e reprodução de alta fidelidade, revisão visual, testes automatizados e validação comercial pendentes. A indexação por buscadores está desabilitada durante o pré-lançamento.

## Oferta de lançamento
Landing V2 baseada no [Doop](https://doop.design/c/GVr761oaFI?frame=MPFMvaIn3b). Preços previstos: Free R$ 0, Essencial R$ 59,90, Pro R$ 99,90 e Premium R$ 149,90 por mês. A oferta de 30 dias de teste e os módulos de ensino dependem da ativação do produto; nenhuma cobrança automática nesta etapa. Premium planejado. A demo e o marketplace continuam disponíveis nos endereços existentes.
