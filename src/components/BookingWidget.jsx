import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCalendar, FiUsers, FiSearch } from 'react-icons/fi'
import { acomodacoes } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './BookingWidget.css'

function toInputDate(date) {
  return date.toISOString().split('T')[0]
}

export default function BookingWidget() {
  const { t } = useT()
  const navigate = useNavigate()
  const today = toInputDate(new Date())
  const tomorrow = toInputDate(new Date(Date.now() + 86400000))

  const [form, setForm] = useState({ checkin: '', checkout: '', hospedes: 2, slug: '' })
  const [erro, setErro] = useState('')

  function handle(e) {
    const { name, value } = e.target
    setForm((f) => {
      const next = { ...f, [name]: value }
      // Garante checkout > checkin ao mudar checkin
      if (name === 'checkin' && next.checkout && next.checkout <= value) {
        next.checkout = ''
      }
      return next
    })
    setErro('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.checkin) return setErro(t('widget.erroCheckin'))
    if (!form.checkout || form.checkout <= form.checkin) return setErro(t('widget.erroDatas'))

    const state = { checkin: form.checkin, checkout: form.checkout, hospedes: Number(form.hospedes) }

    if (form.slug) {
      navigate(`/acomodacoes/${form.slug}`, { state })
    } else {
      navigate('/acomodacoes', { state })
    }
  }

  return (
    <div className="bw-wrap">
      <form className="bw" onSubmit={handleSubmit} noValidate>
        {/* Check-in */}
        <div className="bw__field">
          <label htmlFor="bw-checkin">
            <FiCalendar className="bw__icon" />
            {t('widget.checkin')}
          </label>
          <input
            type="date"
            id="bw-checkin"
            name="checkin"
            min={today}
            value={form.checkin}
            onChange={handle}
          />
        </div>

        {/* Check-out */}
        <div className="bw__field">
          <label htmlFor="bw-checkout">
            <FiCalendar className="bw__icon" />
            {t('widget.checkout')}
          </label>
          <input
            type="date"
            id="bw-checkout"
            name="checkout"
            min={form.checkin || tomorrow}
            value={form.checkout}
            onChange={handle}
          />
        </div>

        {/* Hóspedes */}
        <div className="bw__field bw__field--sm">
          <label htmlFor="bw-hospedes">
            <FiUsers className="bw__icon" />
            {t('widget.hospedes')}
          </label>
          <select id="bw-hospedes" name="hospedes" value={form.hospedes} onChange={handle}>
            {[1, 2, 3].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Acomodação */}
        <div className="bw__field bw__field--lg">
          <label htmlFor="bw-slug">
            {t('widget.acomodacao')}
          </label>
          <select id="bw-slug" name="slug" value={form.slug} onChange={handle}>
            <option value="">{t('widget.qualquer')}</option>
            {acomodacoes.map((a) => (
              <option key={a.slug} value={a.slug}>{a.nome}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary bw__btn">
          <FiSearch />
          <span>{t('widget.buscar')}</span>
        </button>
      </form>

      {erro && <p className="bw__erro">{erro}</p>}
    </div>
  )
}
