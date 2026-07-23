import { Helmet } from 'react-helmet-async'
import { site, avaliacoes } from '../data/site.js'

const SITE_URL = 'https://mlutegar.github.io/casa-florinda'
const DEFAULT_DESC =
  'Pousada Casa Florinda — refúgio de tranquilidade no Parque Imbuí, Teresópolis/RJ. Chalés e suítes aconchegantes cercados pela Mata Atlântica, com vista para as montanhas.'

function lodgingJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Pousada Casa Florinda',
    description: DEFAULT_DESC,
    url: SITE_URL,
    image: `${SITE_URL}/midia/og-image.jpg`,
    email: site.contato.email,
    telephone: site.contato.whatsapp,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contato.endereco,
      addressLocality: site.contato.cidade,
      addressRegion: site.contato.estado,
      addressCountry: 'BR',
    },
    sameAs: [site.contato.instagramLink],
  }
  // Só inclui nota se houver avaliações reais (evita rich snippet falso)
  if (avaliacoes.length) {
    const notas = avaliacoes.filter((a) => a.nota)
    if (notas.length) {
      const media = notas.reduce((s, a) => s + a.nota, 0) / notas.length
      const total = notas.reduce((s, a) => s + (a.qtd || 0), 0)
      data.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: media.toFixed(1),
        reviewCount: total || notas.length,
      }
    }
  }
  return data
}

function hotelRoomJsonLd(acomodacao) {
  const a = acomodacao
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: a.nome,
    description: a.resumo,
    url: `${SITE_URL}/#/acomodacoes/${a.slug}`,
    image: `${SITE_URL}/midia/${a.capa}`,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: a.hospedes,
    },
    amenityFeature: (a.comodidades ?? []).map((c) => ({
      '@type': 'LocationFeatureSpecification',
      name: c,
      value: true,
    })),
    containedInPlace: {
      '@type': 'LodgingBusiness',
      name: 'Pousada Casa Florinda',
      url: SITE_URL,
    },
  }
}

export default function Seo({ title, description = DEFAULT_DESC, image = 'og-image.jpg', path = '/', jsonLd, acomodacao }) {
  const fullTitle = title
    ? `${title} — Pousada Casa Florinda`
    : 'Pousada Casa Florinda — Teresópolis/RJ'
  const url = `${SITE_URL}/#${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}/midia/${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pousada Casa Florinda" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd === 'business' && (
        <script type="application/ld+json">{JSON.stringify(lodgingJsonLd())}</script>
      )}
      {acomodacao && (
        <script type="application/ld+json">{JSON.stringify(hotelRoomJsonLd(acomodacao))}</script>
      )}
    </Helmet>
  )
}
