# LP clubedapromo

Landing page independente em Next.js, React, TypeScript e Tailwind CSS 4. A pasta continua `lp-rato-v01`. O usuário solicitou aplicar clubedapromo em 16/11/2026, substituindo a estética Seu Promo.

Repositório: **[arthuralvesr/clubedapromolp](https://github.com/arthuralvesr/clubedapromolp)**. Destino atual escolhido: **Vercel**, com medição dos cliques em `/clique-no-grupo`. Passo a passo de importação, ativação e consulta em **[VERCEL.md](VERCEL.md)**.

## Executar

Use Node.js 24, definido em `.node-version` (o projeto aceita Node 22 ou superior). Instale as versões do lockfile com `npm ci` e inicie o desenvolvimento com:

```sh
npm run dev
```

Abra **http://127.0.0.1:3002**.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

O build exporta o site em `out/`. `npm start` serve essa pasta em **http://127.0.0.1:4173**, sem servidor Next. A porta 3002 continua sendo o ambiente de desenvolvimento.

## Cloudflare Pages e GitHub

O projeto também continua compatível com Cloudflare Pages, usando `output: "export"` e imagens `unoptimized`. A alternativa de hospedagem permanece documentada em **[CLOUDFLARE.md](CLOUDFLARE.md)**. O usuário escolheu continuar na Vercel para usar sua métrica de cliques.

## Identidade e conteúdo

Referência: `../../logo/clube-da-promo/MARCA.md`. A página usa Nunito variável (pesos 200 a 1000), Verde Clube `#12352B`, Lima Oferta `#D7FF3F` e Branco Quente `#F6F7F0`. O símbolo é o cupom/porcentagem da proposta, reproduzido com as mesmas formas vetoriais. A assinatura exibe `clubedapromo`, em uma única palavra e em letras minúsculas.

- `src/config/site.ts`: nome, descrição e links públicos existentes do grupo e Instagram.
- `src/content/hero.ts`: título, subtítulo e chamada do clube.
- `src/components/home/hero.tsx` e `hero.css`: assinatura, texto e prévia de celular à direita; no celular, a prévia aparece depois do CTA.
- `src/components/ui/club-symbol.tsx`: símbolo vetorial da proposta.
- `src/app/globals.css`: tokens, Nunito e botão lima com texto verde. O pulso do CTA da hero pausa no hover/foco e com movimento reduzido.
- `public/images/clube-da-promo/`: símbolo SVG e fonte SVG da prévia de compartilhamento.
- `src/assets/fonts/Nunito-variable.ttf` e `Nunito-LICENSE.txt`: fonte local e licença OFL; licença de google/fonts, pasta ofl/nunito.
- `src/app/layout.tsx`: metadados, fonte local, Analytics e contador de toques.
- `src/app/icon.png`, `apple-icon.png`, `opengraph-image.png`: ícones e compartilhamento rasterizados dos vetores da marca.

A prévia de compartilhamento usa `NEXT_PUBLIC_SITE_URL`, quando definido, ou `CF_PAGES_URL` no Cloudflare Pages. Os fallbacks anteriores da Vercel e a origem local `http://127.0.0.1:3002` continuam disponíveis. Em produção, recomenda-se configurar `NEXT_PUBLIC_SITE_URL` com a URL pública definitiva. Não é necessário configurar variável de ID do Pixel.

## Prévia do grupo na hero

`src/components/home/group-preview.tsx` simula uma gravação da conversa do WhatsApp dentro de uma moldura de celular, com barra de status, avatar, nome do grupo, fotos, mensagens de oferta, horários e campo visual de mensagem. O cabeçalho e o rodapé ficam fixos enquanto as mensagens sobem com pausas em um loop de 28 segundos. O botão externo pausa e retoma a prévia; com movimento reduzido, a tela fica estática e o botão é ocultado.

As quatro ofertas em `src/content/group-demo.ts` vêm do acervo público da `lp-achadinhos`, de 05 a 09/11/2026: smartwatch, robô aspirador, cadeira gamer e mochila. Fotos e fontes ficam em `public/images/group-demo/`. Valores são históricos, a legenda identifica a simulação e os links desenhados na conversa não são clicáveis. O único convite real continua nos botões do grupo.

## Barra de lojas e marcas

Abaixo da hero, `src/components/home/brand-strip.tsx` mantém a barra horizontal de logos em loop. O design usa cápsulas brancas com contorno verde sobre fundo branco quente e uma pequena assinatura lateral “No radar do clube”. As bordas têm fade discreto, sem o recorte e a seta do desenho anterior. A barra pausa no hover e fica parada com movimento reduzido. A seção tem a âncora `#lojas`.

A lista está em `src/content/brands.ts`: Shopee e Mercado Livre são as lojas dos links do grupo. Samsung, Nike, Motorola, adidas, LG, Puma e Lenovo têm produtos próprios já enviados no grupo (conferência original em 11/11/2026). Fontes e licenças dos logos estão em `public/images/marcas/SOURCES.md`.

## Validações

A seção `#validacoes` mantém a estrutura anterior: título e descrição centralizados, três prints em carrossel sobre fundo verde e convite abaixo. Os prints enviados pelo usuário ficam em `public/images/validacoes/`, listados em `src/content/proofs.ts` com dimensões e texto alternativo:

1. Compra de kit Principia, com identificadores ocultos.
2. Compra de tênis Puma e mensagem “valeu seu promo”, com identificadores ocultos. A mensagem original do print foi preservada.
3. Conversa com miniatura de vídeo de um copo e mensagem de áudio. É uma imagem estática; os controles fazem parte do print.

O carrossel usa rolagem nativa e setas quando os cartões excedem a largura. O cartão vertical usa largura menor no desktop para preservar a proporção. No celular, os cartões têm 78% da largura da tela. A leitura e a rolagem nativa funcionam sem JavaScript. Antes de acrescentar prints, oculte dados privados da compra.

## Convite e medição

Os botões abrem o convite existente em nova aba. Cada toque envia o evento `Lead` ao Pixel da Meta. Em ambiente com Vercel Analytics habilitado, também é contado como visita à página virtual `/clique-no-grupo`. **Lead significa toque no convite, não ingresso confirmado no grupo.** Toques repetidos podem gerar novos eventos.

No Cloudflare Pages, `CF_PAGES=1` desativa automaticamente apenas o Vercel Analytics, pois seu coletor não existe nessa hospedagem. O Pixel e os eventos `Lead` continuam ativos. A implementação Vercel foi preservada; `NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED` permite sobrescrever a detecção quando houver um coletor compatível. A ausência dessa integração no Pages não é apresentada como medição Vercel ativa.

O Pixel existente `1170044962029356` é configurado em `metaPixelId`, em `src/config/site.ts`, e envia `PageView` ao abrir a página. O componente `meta-pixel.tsx` usa `next/script` com `afterInteractive`; os comandos ficam na fila enquanto a biblioteca da Meta carrega. `group-click-tracker.tsx` registra os toques em todos os links de convite. O rodapé `privacy-note.tsx` informa o uso do Pixel e oferece links de preferências de anúncios. Deixar `metaPixelId` vazio desliga o Pixel e o aviso, preservando a medição Vercel.

Configuração local preparada em 17/11/2026. Antes da campanha, publicar a LP e validar `PageView` e `Lead` em **Testar eventos** no Gerenciador de Eventos, conferindo que cada ação gera apenas um evento. Testar o convite pelo navegador do Instagram e do Facebook no celular. Testes locais não comprovam recebimento na Meta.

Validação local em 17/11: lint, typecheck e build aprovados. No Chromium, em 1440 e 390 px, a fila do Pixel registrou uma inicialização com o ID correto, um `PageView` na abertura e um `Lead` por toque em cada um dos dois botões. Clique na marca não gerou `Lead`. Sem erros de execução ou rolagem horizontal; rodapé conferido visualmente nas duas larguras. As requisições externas foram bloqueadas no teste para não enviar eventos de verificação à Meta. Evidências locais em `.artifacts/pixel-verification.json` e `.artifacts/pixel-*.png` (arquivos ignorados pelo Git).

A saída estática também foi verificada em Chromium, em desktop e celular, servindo apenas `out/`: textos e links comparados com a versão anterior, todas as imagens carregadas, pausa/rolagem da prévia, carrossel e fila do Pixel conferidos. Sem chamadas ao otimizador `/_next/image` ou ao coletor Vercel no build de Pages. Evidências em `.artifacts/cloudflare/` (ignoradas pelo Git).

A alteração desta LP não publica a página nem muda contas ou convites.
