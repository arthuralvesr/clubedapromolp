# Cloudflare Pages — clubedapromo

Alternativa de hospedagem da exportação estática do Next.js 16.4.6. O usuário escolheu continuar na Vercel; veja [VERCEL.md](VERCEL.md). Repositório autorizado para publicação do código: https://github.com/arthuralvesr/clubedapromolp. Nenhum projeto Cloudflare foi criado ou publicado.

## Nome sugerido

Use **clubedapromo** no repositório e no projeto Pages. O endereço padrão será `https://clubedapromo.pages.dev` se o nome estiver disponível. É curto, usa a mesma marca da página e não expõe o nome de trabalho `lp-rato-v01`. Um domínio próprio pode ser conectado depois. A disponibilidade não foi reservada ou confirmada.

## Campos do Pages

Em **Workers & Pages → Create application → Pages → Import an existing Git repository**, selecione o repositório do GitHub. Para um repositório independente contendo os arquivos desta LP na raiz:

| Campo | Valor |
|---|---|
| Project name | `clubedapromo` (se disponível) |
| Production branch | `main` |
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | deixar vazio — raiz `/` do repositório |
| Node.js | `24`, selecionado pelo arquivo `.node-version` |

Se, em vez do repositório independente, você conectar o repositório que contém o diretório `site/lp-rato-v01/`, o único campo que muda é **Root directory: `site/lp-rato-v01`**. A pasta de saída continua sendo `out`, relativa à raiz escolhida. No repositório independente `arthuralvesr/clubedapromolp`, os arquivos da LP ficam diretamente na raiz.

Use a integração Git nativa do Pages e mantenha os deploys automáticos de produção habilitados. Depois da conexão, pushes na branch de produção geram novos deploys; outras branches podem gerar previews conforme as preferências do projeto. Não é necessário GitHub Actions, Wrangler ou um token Cloudflare neste código. O primeiro deploy ocorrerá quando você concluir a configuração no painel.

## Variáveis de ambiente

Nenhuma variável personalizada ou segredo é obrigatório para o build no Pages. O ambiente fornece `CF_PAGES=1` e `CF_PAGES_URL`; o arquivo `.node-version` seleciona Node 24.

| Variável | Valor / uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Recomendado em Production:** `https://clubedapromo.pages.dev`, se esse for o nome escolhido. Use a URL real do projeto ou o domínio próprio. Define a origem absoluta da imagem de compartilhamento. |
| `NODE_VERSION` | Opcional: `24`, se quiser configurar no painel. O arquivo `.node-version` já fornece esse valor. |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED` | Não configurar no Pages; fica `false` automaticamente. A implementação foi preservada para ambientes com coletor Vercel. |

Em Preview, pode deixar `NEXT_PUBLIC_SITE_URL` vazio/ausente: o build usa a URL do próprio deploy via `CF_PAGES_URL`. Não cadastre manualmente as variáveis `CF_PAGES*`. Alterações na URL exigem novo build, pois os metadados são estáticos.

O Pixel já tem o ID público `1170044962029356` em `src/config/site.ts`. Não é preciso adicionar um ID, token ou segredo do Pixel na Cloudflare. `.env.example` documenta os ajustes opcionais, sem conter credenciais.

## Exportação e compatibilidade

- `next.config.ts` configura `output: "export"` e `images.unoptimized: true`. O build produz HTML, CSS, JavaScript, fontes e imagens em `out/`.
- As imagens mantêm arquivos, dimensões e layout; deixam de depender de `/_next/image`. Os arquivos originais são servidos diretamente. Sem o otimizador, o download de algumas imagens pode ser maior.
- Fonte Nunito local, ícones e imagem de compartilhamento são exportados com a página. A origem dos metadados aceita `NEXT_PUBLIC_SITE_URL`, `CF_PAGES_URL` e os fallbacks anteriores.
- A animação da prévia do grupo, pausa, preferência por movimento reduzido, barra de marcas, carrossel e links continuam no navegador, sem servidor Next.
- O projeto não usa APIs, cookies de servidor, Server Actions, redirects dinâmicos ou ISR. O export inclui `404.html`, usado pelo Pages para caminhos inexistentes.
- `npm start` serve a pasta `out/` localmente em `http://127.0.0.1:4173`. `next start` não é usado para esta saída estática. Não há comando de start em produção no Pages.

## Pixel e rastreamento

A implementação existente do Pixel e o rodapé de privacidade foram preservados. Há um `PageView` na abertura e um `Lead` por clique nos botões do convite. **Lead representa clique no convite, não entrada confirmada no grupo.** O convite e o destino dos links não foram alterados.

O Vercel Web Analytics requer seu coletor, que não existe no Pages. O carregamento do SDK e a chamada virtual `/clique-no-grupo` ficam inativos nesse ambiente para evitar requisições sem destino. A implementação permanece disponível e o evento `Lead` da Meta funciona independentemente dela. Para métricas adicionais de visitas no Cloudflare, você pode habilitar o Web Analytics pelo painel posteriormente; nenhum token foi inventado ou adicionado.

Após publicar, ainda é necessário confirmar o recebimento de `PageView` e `Lead` em **Testar eventos** no Gerenciador de Eventos da Meta. Os testes locais interceptam a biblioteca externa para não enviar eventos artificiais nem abrir o convite real. Eles comprovam os disparos no navegador, não a entrega à Meta.

## Verificação local

```sh
npm ci
npm run lint
npm run typecheck
npm run build
npm start
```

Para simular as variáveis automáticas do Pages no PowerShell antes do build:

```powershell
$env:CF_PAGES = "1"
$env:CF_PAGES_URL = "https://clubedapromo.pages.dev"
npm run build
npm start
```

A URL acima é um exemplo para metadados de build; esse comando não publica nem acessa o domínio. Não envie `node_modules/`, `.next/`, `out/`, `.artifacts/` ou arquivos `.env` privados ao Git. As dependências são instaladas e `out/` é reconstruída no Pages.

## Referências

- Next.js instalado: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` e documentação do componente Image.
- [Next.js estático no Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Configuração de build e variáveis automáticas](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Versões do ambiente de build](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Integração Git](https://developers.cloudflare.com/pages/configuration/git-integration/)
