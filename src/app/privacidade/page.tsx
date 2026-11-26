import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade · clubedapromo",
  description: "Saiba quais dados são tratados pelo clubedapromo e para quais finalidades.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="Esta política explica, de forma simples, como o clubedapromo trata dados quando você acessa esta página ou segue para o nosso grupo."
    >
      <section>
        <h2>1. Quem somos</h2>
        <p>
          O clubedapromo é uma iniciativa do Acha Mais que seleciona e compartilha promoções,
          cupons e oportunidades de compra. Para assuntos de privacidade, fale conosco pelo perfil{" "}
          <a href="https://www.instagram.com/achamais.promos/" target="_blank" rel="noopener noreferrer">
            @achamais.promos no Instagram
          </a>.
        </p>
      </section>

      <section>
        <h2>2. Quais dados são tratados</h2>
        <ul>
          <li>dados técnicos de acesso, como página visitada, data e hora, referência de origem, navegador, dispositivo e localização aproximada;</li>
          <li>eventos de navegação, incluindo a visualização da página e o clique no convite do grupo;</li>
          <li>cookies, identificadores e tecnologias semelhantes utilizados pela Meta para mensuração e personalização de anúncios;</li>
          <li>informações que você decidir enviar ao entrar em contato conosco pelo Instagram ou por outro canal externo.</li>
        </ul>
        <p>Esta landing page não possui cadastro, formulário ou área de usuário e não solicita nome, e-mail ou telefone diretamente.</p>
      </section>

      <section>
        <h2>3. Para que usamos esses dados</h2>
        <p>
          Usamos os dados para manter a página funcionando, entender o desempenho do conteúdo,
          medir visitas e cliques, melhorar campanhas, exibir anúncios mais relevantes, prevenir abusos
          e responder solicitações. O tratamento ocorre conforme as bases legais aplicáveis, incluindo
          legítimo interesse e consentimento, quando exigido.
        </p>
      </section>

      <section>
        <h2>4. Serviços de terceiros</h2>
        <p>
          A página utiliza Vercel Analytics, que fornece estatísticas agregadas de navegação, e o Pixel
          da Meta, que recebe eventos de visualização e de clique para mensuração e publicidade. Ao abrir
          o convite, você passa a usar o WhatsApp, sujeito aos termos e à política dessa plataforma.
        </p>
        <p>
          Esses provedores podem tratar dados em outros países e segundo suas próprias políticas. Consulte as políticas da{" "}
          <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta</a>,{" "}
          <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel</a> e{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy/?lang=pt_br" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      </section>

      <section>
        <h2>5. Retenção e proteção</h2>
        <p>
          Mantemos apenas os dados aos quais temos acesso pelo tempo necessário às finalidades descritas,
          ao cumprimento de obrigações legais e à proteção de direitos. Os provedores conservam os dados
          conforme suas próprias políticas. Adotamos medidas razoáveis para reduzir acessos e usos indevidos.
        </p>
      </section>

      <section>
        <h2>6. Seus direitos</h2>
        <p>
          Você pode pedir confirmação de tratamento, acesso, correção, informação sobre compartilhamento,
          oposição, revogação do consentimento e, quando cabível, anonimização, bloqueio ou exclusão.
          Veja o passo a passo em nossa <a href="/exclusao-de-dados">página de exclusão de dados</a>.
        </p>
      </section>

      <section>
        <h2>7. Alterações</h2>
        <p>Podemos atualizar esta política para refletir mudanças na página, nos serviços utilizados ou na legislação. A versão vigente sempre estará publicada neste endereço.</p>
      </section>
    </LegalPage>
  );
}
