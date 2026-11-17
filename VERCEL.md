# Publicação na Vercel e medição dos cliques

Repositório desta LP: https://github.com/arthuralvesr/clubedapromolp

## Importar o projeto

Na Vercel, abra **Add New → Project**, importe `arthuralvesr/clubedapromolp` e use:

| Campo | Valor |
|---|---|
| Project name | `clubedapromolp`, ou outro nome disponível |
| Framework preset | **Next.js** |
| Root directory | `./` — os arquivos desta LP estão na raiz do repositório |
| Production branch | `main` |
| Build command | `npm run build` |
| Install command | `npm ci` (ou detecção automática do npm) |
| Output directory | detecção automática, sem override |
| Node.js version | **24.x** |

A configuração atual usa `output: "export"`. O build gera `out/` e continua compatível com a Vercel. `npm start` é apenas a prévia estática local; a Vercel não precisa desse comando de start.

## Variáveis

Em **Settings → Environment Variables**, configure para Production e, se quiser medir previews, também para Preview:

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED=true
```

A Vercel já habilita essa integração por padrão no código; a variável acima deixa a intenção explícita e substitui um eventual valor `false` anterior. Não adicione as variáveis `CF_PAGES` ou `CF_PAGES_URL` na Vercel.

`NEXT_PUBLIC_SITE_URL` é opcional: sem ela, o projeto usa o domínio informado pela Vercel para os metadados. Se configurá-la, informe a URL real da LP ou do domínio próprio, com `https://`, e faça novo deploy. Não use o endereço do Cloudflare como origem da LP na Vercel. Nenhum ID de Analytics ou segredo precisa ser inventado. O Pixel existente continua em `src/config/site.ts`.

## Ativar a coleta

1. Publique o primeiro deploy da LP na Vercel.
2. Abra o projeto e entre em **Analytics / Web Analytics**.
3. Clique em **Enable** se a coleta ainda não estiver habilitada.
4. Em **Deployments**, faça **Redeploy** do último deploy de produção. As rotas de coleta de Analytics ficam disponíveis após um deploy com a função habilitada.
5. Abra a URL pública, com as permissões do navegador permitindo Analytics, e clique em um botão do grupo. Os eventos aparecerão depois de processados.

## Onde ver os cliques

Em **Web Analytics**, selecione **Production** e o período desejado. No painel **Pages**, encontre ou filtre **`/clique-no-grupo`**.

Cada toque em um dos dois botões de convite registra uma visualização virtual dessa rota. O link continua abrindo o WhatsApp diretamente em nova aba. A métrica de visualizações representa os toques registrados; cliques repetidos da mesma pessoa também podem contar. O painel de visitantes ajuda a distinguir visitantes medidos de visualizações. **Nenhuma dessas métricas confirma entrada no grupo.** Bloqueadores de Analytics podem impedir o registro.

O código já inclui a biblioteca, o componente Analytics e o rastreamento do botão. Não é preciso criar evento personalizado pago nem cadastrar outra página ou alterar o convite. Visitas normais à LP continuam sendo registradas separadamente em `/`.

O Pixel `1170044962029356` continua enviando `PageView` na abertura e `Lead` no clique do convite. Seu recebimento deve ser conferido em **Testar eventos** na Meta após o deploy.

## Validação e manutenção

Em 17/11/2026, lint, typecheck e build com a configuração Vercel passaram. Em Chromium, nas larguras 1440 e 390 px, cada um dos dois botões gerou uma chamada `pageview` com `route` e `path` iguais a `/clique-no-grupo` e um `Lead` da Meta; clicar na marca não acrescentou eventos. O SDK Vercel permaneceu habilitado. Evidência local em `.artifacts/vercel-click-verification.json`, ignorada pelo Git.

Os testes substituem o coletor Vercel e bloqueiam a biblioteca externa da Meta para não enviar eventos artificiais às contas nem abrir o convite real. Confirmam que o código chama o SDK; a entrega real depende do deploy e de Web Analytics habilitado no painel.

Após conectar o repositório, novos pushes em `main` podem gerar deploy automático pela integração Git da Vercel. A publicação no GitHub, isoladamente, não comprova que o projeto já foi importado ou que Web Analytics está ativo.

Referências: [Ativar Web Analytics](https://vercel.com/docs/analytics/quickstart), [Consultar e filtrar os dados](https://vercel.com/docs/analytics/using-web-analytics).
