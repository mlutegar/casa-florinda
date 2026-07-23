import { useState } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { site, waLink } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Contato.css'

export default function Contato() {
  const { t } = useT()
  const [form, setForm] = useState({
    nome: '',
    checkin: '',
    checkout: '',
    hospedes: '2',
    mensagem: '',
  })
  const [erroNome, setErroNome] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const update = (e) => {
    if (e.target.name === 'nome') setErroNome(false)
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!form.nome.trim()) {
      setErroNome(true)
      document.getElementById('contato-nome')?.focus()
      return
    }
    setEnviando(true)
    const linhas = [
      'Olá! Vim pelo site da Pousada Casa Florinda.',
      `Nome: ${form.nome}`,
      form.checkin && `Check-in: ${form.checkin}`,
      form.checkout && `Check-out: ${form.checkout}`,
      form.hospedes && `Hóspedes: ${form.hospedes}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ].filter(Boolean)
    window.open(waLink(linhas.join('\n')), '_blank', 'noreferrer')
    setTimeout(() => setEnviando(false), 2000)
  }

  return (
    <>
      <Seo
        title={t('contato.title')}
        description="Fale com a Pousada Casa Florinda em Teresópolis/RJ. WhatsApp, e-mail, Instagram e localização no Parque Imbuí."
        image="pousada-06.webp"
        path="/contato"
      />
      <PageHeader
        eyebrow={t('contato.eyebrow')}
        title={t('contato.title')}
        subtitle={t('contato.sub')}
        image="pousada-06.webp"
      />

      <section className="section">
        <div className="container contato">
          {/* Informações */}
          <div className="contato__info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('contato.info')}</h2>
            <hr className="divider" style={{ margin: '16px 0 26px' }} />

            <ul className="contato__list">
              <li>
                <FiPhone />
                <div>
                  <strong>WhatsApp</strong>
                  <a href={waLink('Olá! Gostaria de mais informações.')} target="_blank" rel="noreferrer">
                    {site.contato.whatsapp}
                  </a>
                </div>
              </li>
              <li>
                <FiMail />
                <div>
                  <strong>E-mail</strong>
                  <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>
                </div>
              </li>
              <li>
                <FaInstagram />
                <div>
                  <strong>Instagram</strong>
                  <a href={site.contato.instagramLink} target="_blank" rel="noreferrer">
                    {site.contato.instagram}
                  </a>
                </div>
              </li>
              <li>
                <FiMapPin />
                <div>
                  <strong>Endereço</strong>
                  <a href={site.contato.mapsLink} target="_blank" rel="noreferrer">
                    {site.contato.localizacao}
                  </a>
                </div>
              </li>
              <li>
                <FiClock />
                <div>
                  <strong>{t('acom.checkin')} / {t('acom.checkout')}</strong>
                  <span>{site.horarios.checkin} · {site.horarios.checkout}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <form className="contato__form" onSubmit={enviar}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('contato.enviarMsg')}</h2>
            <hr className="divider" style={{ margin: '16px 0 26px' }} />

            <label htmlFor="contato-nome">
              {t('contato.nome')} <span aria-hidden="true">*</span>
              <input
                id="contato-nome"
                name="nome"
                value={form.nome}
                onChange={update}
                placeholder={t('contato.placeholderNome')}
                aria-required="true"
                aria-invalid={erroNome}
                aria-describedby={erroNome ? 'contato-nome-erro' : undefined}
              />
              {erroNome && (
                <span id="contato-nome-erro" role="alert" className="contato__erro">
                  {t('contato.erroNome')}
                </span>
              )}
            </label>
            <div className="contato__row">
              <label htmlFor="contato-checkin">
                {t('acom.checkin')}
                <input id="contato-checkin" type="date" name="checkin" value={form.checkin} onChange={update} />
              </label>
              <label htmlFor="contato-checkout">
                {t('acom.checkout')}
                <input id="contato-checkout" type="date" name="checkout" value={form.checkout} onChange={update} />
              </label>
            </div>
            <label htmlFor="contato-hospedes">
              {t('contato.hospedes')}
              <select id="contato-hospedes" name="hospedes" value={form.hospedes} onChange={update}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {t(n > 1 ? 'common.hospedes' : 'common.hospede')}</option>
                ))}
              </select>
            </label>
            <label htmlFor="contato-mensagem">
              {t('contato.mensagem')}
              <textarea id="contato-mensagem" name="mensagem" value={form.mensagem} onChange={update} rows="4" placeholder={t('contato.placeholderMsg')} />
            </label>
            <button type="submit" className="btn btn-primary" disabled={enviando} aria-busy={enviando}>
              <FaWhatsapp /> {enviando ? t('contato.enviando') : t('contato.enviar')}
            </button>
            <p className="contato__hint">{t('contato.hint')}</p>
          </form>
        </div>

        <div className="container" style={{ marginTop: 56 }}>
          <MapEmbed height={380} />
        </div>
      </section>
    </>
  )
}
