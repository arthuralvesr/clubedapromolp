import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso · clubedapromo",
  description: "Condições para utilizar a página e os conteúdos do clubedapromo.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      description="Ao acessar esta página ou nossos canais, você concorda com as condições a seguir."
    >
      <section>
        <h2>1. Sobre o serviço</h2>
        <p>
          O clubedapromo seleciona e compartilha promoções, cupons e links de lojas de terceiros.
          O conteúdo tem finalidade informativa e pode ser alterado, suspenso ou encerrado a qualquer momento.
        </p>
      </section>

      <section>
        <h2>2. Ofertas e links</h2>
        <p>
          Preços, estoque, frete, cupons e condições são definidos pelas lojas e podem mudar sem aviso.
          Sempre confira as informações no site ou aplicativo do vendedor antes de comprar. Alguns links podem
          ser de afiliado e gerar comissão para o clubedapromo, sem custo adicional para você.
        </p>
      </section>

      <section>
        <h2>3. Compras em outras plataformas</h2>
        <p>
          O clubedapromo não vende, entrega, cobra ou presta garantia dos produtos divulgados. A compra é feita
          diretamente com a loja responsável e segue os termos, políticas e canais de atendimento dela.
          Não garantimos disponibilidade, precisão permanente das ofertas nem aprovação de pedidos.
        </p>
      </section>

      <section>
        <h2>4. Uso permitido</h2>
        <p>
          Você deve usar a página e os canais de forma lícita, sem tentar interromper seu funcionamento,
          obter acesso não autorizado, distribuir conteúdo malicioso ou utilizar a marca e os materiais do
          clubedapromo de modo enganoso. Marcas de lojas e produtos pertencem aos respectivos titulares.
        </p>
      </section>

      <section>
        <h2>5. WhatsApp e serviços externos</h2>
        <p>
          O ingresso e a permanência no grupo dependem das regras do clubedapromo e dos termos do WhatsApp.
          Podemos moderar ou remover participantes para proteger a comunidade, evitar spam e preservar o funcionamento do serviço.
        </p>
      </section>

      <section>
        <h2>6. Responsabilidade</h2>
        <p>
          Na medida permitida por lei, não nos responsabilizamos por alterações ou cancelamentos de ofertas,
          decisões das lojas, indisponibilidade de plataformas externas ou danos decorrentes de uso indevido.
          Nada nestes termos limita direitos obrigatórios previstos na legislação brasileira.
        </p>
      </section>

      <section>
        <h2>7. Privacidade e mudanças</h2>
        <p>
          O tratamento de dados é explicado na <a href="/privacidade">Política de Privacidade</a>. Podemos atualizar estes termos,
          e a versão vigente será a publicada nesta página. A legislação brasileira rege estas condições.
        </p>
      </section>

      <section>
        <h2>8. Contato</h2>
        <p>
          Em caso de dúvida, fale com o perfil{" "}
          <a href="https://www.instagram.com/achamais.promos/" target="_blank" rel="noopener noreferrer">
            @achamais.promos no Instagram
          </a>.
        </p>
      </section>
    </LegalPage>
  );
}
