// Prints reais enviados pelo usuário; número do pedido e código do Pix borrados antes de publicar.
// Para acrescentar: salve o print em public/images/validacoes/ e inclua um item com largura e altura reais.
export const proofsContent = {
  title: {
    before: "Quem está no clube ",
    highlight: "já aproveitou",
    after: ".",
  },
  description: "Prints reais de quem comprou com as promoções compartilhadas no grupo.",
  items: [
    {
      src: "/images/validacoes/validacao-01.png",
      width: 422,
      height: 404,
      alt: "Print dos detalhes de uma compra: kit gel de limpeza Principia com desconto e cupom aplicados, pago no Pix",
    },
    {
      src: "/images/validacoes/validacao-02-puma.png",
      width: 1341,
      height: 1173,
      alt: "Print de conversa no WhatsApp: detalhes da compra de um tênis Puma com desconto, cupom e frete grátis, e a mensagem “valeu seu promo” com emoji de palmas",
    },
    {
      src: "/images/validacoes/validacao-03-copo.png",
      width: 280,
      height: 428,
      alt: "Print de conversa no WhatsApp com a miniatura de um vídeo de um copo verde com tampa e uma mensagem de áudio abaixo",
    },
  ],
} as const;
