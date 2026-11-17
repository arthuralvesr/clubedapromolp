# LP clubedapromo (pasta lp-rato-v01)

- Landing page independente com a identidade clubedapromo (`logo/clube-da-promo/MARCA.md`): Verde Clube `#12352B`, Lima Oferta `#D7FF3F` e Branco Quente `#F6F7F0`, com Nunito variável e símbolo vetorial de cupom/porcentagem. Mesma base técnica e mesmos links da `lp-achadinhos`; design e chamadas próprios.
- A página tem hero, barra horizontal de marcas (`brand-strip.tsx`) e carrossel de validações (`proofs.tsx`). O usuário deseja preservar essa estrutura e fazer alterações pontuais de UI; não substitua seções por painéis, grades editoriais ou novas estruturas sem solicitação.
- A pedido do usuário em 17/11/2026, a arte à direita da hero virou uma simulação animada do grupo (`group-preview.tsx`), com ofertas arquivadas, legenda de simulação e controle de pausa. Os valores da prévia são históricos; não os apresente como ofertas ao vivo.
- Textos da hero em `src/content/hero.ts`; links públicos em `src/config/site.ts`; cores em `src/app/globals.css`.
- O usuário autorizou aplicar clubedapromo nesta LP em 16/11/2026, substituindo a estética Seu Promo. Use a proposta de `logo/clube-da-promo/`; o nome da pasta permanece `lp-rato-v01`. Essa autorização não altera contas, outras LPs ou o destino dos links.
- Chamadas e títulos não citam preço.
- Não importe código, bancos de dados, credenciais, sessões ou arquivos privados de projetos externos.
- Leia as instruções da versão instalada em `node_modules/next/dist/docs/` antes de alterar convenções do Next.js. Use componentes de servidor para conteúdo e componentes de cliente apenas onde há interatividade.
- Hospedagem preparada para Cloudflare Pages via Git: `output: "export"`, imagens locais com `unoptimized: true`, saída `out/`. Preserve compatibilidade estática; não acrescente APIs, Server Actions, otimização de imagens no servidor ou funções dinâmicas sem reavaliar a hospedagem. Configuração e variáveis em `CLOUDFLARE.md`.
- O Pixel existente é `1170044962029356` (PageView e Lead no clique do convite). No Pages, o coletor Vercel Analytics não existe; a integração permanece no código e é desativada automaticamente por `CF_PAGES=1`, sem desligar o Pixel.
- Em 17/11/2026, o usuário escolheu continuar na Vercel e autorizou publicar o código em `https://github.com/arthuralvesr/clubedapromolp`. Mantenha a medição Vercel de cliques como pageviews virtuais de `/clique-no-grupo`; instruções em `VERCEL.md`. A entrega à Vercel depende de importar o repositório, habilitar Web Analytics e fazer deploy.
- Antes de entregar alterações estruturais, execute `npm run lint`, `npm run typecheck` e `npm run build`. Confira visualmente alterações de layout em desktop e celular.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
