import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Exclusão de Dados · clubedapromo",
  description: "Instruções para solicitar a exclusão de dados tratados pelo clubedapromo.",
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Exclusão de Dados"
      description="Você pode solicitar a exclusão dos dados pessoais que estejam sob nosso controle seguindo as instruções abaixo."
    >
      <section>
        <h2>Como fazer a solicitação</h2>
        <ol>
          <li>
            Acesse o perfil{" "}
            <a href="https://www.instagram.com/achamais.promos/" target="_blank" rel="noopener noreferrer">
              @achamais.promos no Instagram
            </a>.
          </li>
          <li>Envie uma mensagem direta com o assunto ou início de texto “EXCLUSÃO DE DADOS”.</li>
          <li>Informe qual interação ou dado deseja excluir e, se possível, a data aproximada em que ocorreu.</li>
        </ol>
        <p>Podemos pedir informações adicionais somente quando forem necessárias para localizar o registro e confirmar que o pedido foi feito pelo titular.</p>
      </section>

      <section>
        <h2>O que acontece depois</h2>
        <p>
          Confirmaremos o recebimento e analisaremos o pedido. Quando a exclusão for aplicável e o dado estiver
          sob nosso controle, ele será removido ou anonimizado. Poderemos conservar informações quando houver
          obrigação legal, necessidade de defesa de direitos ou outra hipótese permitida pela legislação.
        </p>
      </section>

      <section>
        <h2>Dados tratados por terceiros</h2>
        <p>
          As estatísticas da Vercel são agregadas e podem não permitir a identificação de uma visita específica.
          Dados recebidos diretamente pela Meta, Instagram ou WhatsApp também ficam sujeitos às ferramentas e
          políticas dessas empresas. Nesses casos, pode ser necessário fazer o pedido diretamente na plataforma correspondente.
        </p>
        <p>
          Você também pode revisar a{" "}
          <a href="https://www.facebook.com/off_facebook_activity/" target="_blank" rel="noopener noreferrer">atividade fora das tecnologias da Meta</a>,
          as <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">preferências de anúncios</a> e as configurações do WhatsApp.
        </p>
      </section>

      <section>
        <h2>Outros direitos</h2>
        <p>
          O mesmo canal pode ser usado para solicitar acesso, correção, informação sobre compartilhamento,
          oposição ou revogação de consentimento. Saiba mais na nossa <a href="/privacidade">Política de Privacidade</a>.
        </p>
      </section>
    </LegalPage>
  );
}
