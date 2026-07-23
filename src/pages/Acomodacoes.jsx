import PageHeader from '../components/PageHeader.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import Seo from '../components/Seo.jsx'
import useReveal from '../hooks/useReveal.js'
import { acomodacoes } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Home.css'

export default function Acomodacoes() {
  const { t } = useT()
  useReveal()
  return (
    <>
      <Seo
        title={t('acom.title')}
        description="Chalés e suítes da Pousada Casa Florinda em Teresópolis/RJ: Chalé das Flores, Casinha da Bel, Suíte 1954, Suíte 1952 e Suíte 1955."
        image="pousada-01.webp"
        path="/acomodacoes"
      />
      <PageHeader
        eyebrow={t('acom.eyebrow')}
        title={t('acom.title')}
        subtitle={t('acom.sub')}
        image="pousada-01.webp"
      />
      <section className="section">
        <div className="container">
          <div className="home-acoms">
            {acomodacoes.map((a) => (
              <AccommodationCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
