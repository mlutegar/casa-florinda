import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { useT } from '../i18n/LanguageProvider.jsx'

export default function NotFound() {
  const { t } = useT()
  return (
    <>
      <Seo title={t('notfound.title')} path="/404" />
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 20px',
          textAlign: 'center',
          gap: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            color: 'var(--champanhe)',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          404
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--olive)',
            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
            margin: 0,
          }}
        >
          {t('notfound.title')}
        </h1>
        <p style={{ color: 'var(--texto-suave)', maxWidth: '420px', margin: 0 }}>
          {t('notfound.sub')}
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
          {t('notfound.voltar')}
        </Link>
      </div>
    </>
  )
}
