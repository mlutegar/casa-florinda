import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import './Legal.css'

export default function PoliticaPrivacidade() {
  return (
    <>
      <Seo title="Política de Privacidade" path="/politica-de-privacidade" image="pousada-03.webp" />
      <PageHeader title="Política de Privacidade" eyebrow="LGPD" image="pousada-03.webp" />

      <section className="section">
        <div className="container legal">
          <p className="legal__updated">Última atualização: 2026</p>
          <p>
            A Pousada Casa Florinda respeita a sua privacidade e está comprometida em proteger
            os dados pessoais dos seus visitantes e hóspedes, em conformidade com a Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>

          <h2>1. Dados que coletamos</h2>
          <p>
            Coletamos apenas os dados que você nos fornece voluntariamente ao entrar em contato,
            como nome, telefone, e-mail, datas de estadia e mensagens enviadas por meio do nosso
            formulário ou WhatsApp. Este site é estático e não utiliza cadastro nem cookies de
            rastreamento de terceiros por padrão.
          </p>

          <h2>2. Como usamos seus dados</h2>
          <p>
            Utilizamos suas informações exclusivamente para responder às suas solicitações,
            realizar reservas e prestar um bom atendimento. Não vendemos nem compartilhamos seus
            dados com terceiros para fins de marketing.
          </p>

          <h2>3. Armazenamento e segurança</h2>
          <p>
            As mensagens enviadas via WhatsApp ficam sujeitas à política de privacidade do próprio
            aplicativo. Mantemos os dados de contato somente pelo tempo necessário para o
            atendimento.
          </p>

          <h2>4. Seus direitos</h2>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados;</li>
            <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>

          <h2>5. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo
            e-mail <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a> ou pelo
            WhatsApp {site.contato.whatsapp}.
          </p>
        </div>
      </section>
    </>
  )
}
