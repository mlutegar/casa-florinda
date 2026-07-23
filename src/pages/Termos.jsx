import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import './Legal.css'

export default function Termos() {
  return (
    <>
      <Seo title="Termos e Condições" path="/termos" image="pousada-04.webp" />
      <PageHeader title="Termos e Condições" eyebrow="Informações" image="pousada-04.webp" />

      <section className="section">
        <div className="container legal">
          <p className="legal__updated">Última atualização: 2026</p>
          <p>
            Ao navegar neste site e realizar reservas na Pousada Casa Florinda, você concorda com
            os termos abaixo.
          </p>

          <h2>1. Reservas</h2>
          <p>
            As reservas são confirmadas mediante contato direto (WhatsApp) e conforme
            disponibilidade. Valores são informados no momento da reserva e podem variar de acordo
            com a data e a acomodação escolhida.
          </p>

          <h2>2. Check-in e check-out</h2>
          <p>
            Check-in das {site.horarios.checkin} e check-out das {site.horarios.checkout}. Horários
            diferentes podem ser combinados previamente, sujeitos à disponibilidade.
          </p>

          <h2>3. Regras da casa</h2>
          <ul>
            <li>Não é permitido fumar nos quartos;</li>
            <li>Não são permitidos eventos ou festas;</li>
            <li>Serviços adicionais devem ser solicitados com antecedência.</li>
          </ul>
          <p>
            A aceitação de bebês e animais de estimação varia conforme a acomodação. Consulte as
            regras específicas de cada acomodação na página de detalhes ou entre em contato conosco
            antes de reservar.
          </p>

          <h2>4. Cancelamentos</h2>
          <p>
            As condições de cancelamento e reembolso são informadas no momento da reserva. Em caso
            de dúvidas, entre em contato conosco.
          </p>

          <h2>5. Conteúdo do site</h2>
          <p>
            As imagens e textos deste site são de propriedade da Pousada Casa Florinda e não podem
            ser reproduzidos sem autorização.
          </p>
        </div>
      </section>
    </>
  )
}
