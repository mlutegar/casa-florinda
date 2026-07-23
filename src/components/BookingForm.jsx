import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCalendar, FiUsers, FiUser, FiMail, FiPhone, FiCreditCard, FiLoader } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useAvailability } from '../hooks/useAvailability.js'
import { waReserva } from '../data/site.js'
import './BookingForm.css'

// Hoje no formato YYYY-MM-DD (mínimo para check-in)
function toInputDate(date) {
  return date.toISOString().split('T')[0]
}

function calcNoites(checkin, checkout) {
  if (!checkin || !checkout) return 0
  const diff = new Date(checkout) - new Date(checkin)
  return Math.max(0, Math.round(diff / 86400000))
}

function calcTotal(checkin, checkout, preco, precoFimSemana) {
  if (!checkin || !checkout) return 0
  let total = 0
  const current = new Date(checkin)
  const end = new Date(checkout)
  while (current < end) {
    const dow = current.getDay() // 0=dom, 5=sex, 6=sab
    const isFimSemana = dow === 5 || dow === 6
    total += isFimSemana ? precoFimSemana : preco
    current.setDate(current.getDate() + 1)
  }
  return total
}

function formatCPF(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

function formatTelefone(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
}

export default function BookingForm({ acomodacao }) {
  const navigate = useNavigate()
  const today = toInputDate(new Date())
  const tomorrow = toInputDate(new Date(Date.now() + 86400000))

  const [form, setForm] = useState({
    checkin: today,
    checkout: tomorrow,
    hospedes: 1,
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
  })
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const { isRangeAvailable, loading: loadingAvail } = useAvailability(acomodacao.slug)

  const noites = useMemo(() => calcNoites(form.checkin, form.checkout), [form.checkin, form.checkout])
  const total = useMemo(
    () => calcTotal(form.checkin, form.checkout, acomodacao.preco, acomodacao.precoFimSemana),
    [form.checkin, form.checkout, acomodacao.preco, acomodacao.precoFimSemana],
  )

  function handle(e) {
    const { name, value } = e.target
    if (name === 'cpf') return setForm((f) => ({ ...f, cpf: formatCPF(value) }))
    if (name === 'telefone') return setForm((f) => ({ ...f, telefone: formatTelefone(value) }))
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    // Validações básicas
    if (noites < 1) return setErro('A data de checkout deve ser após o check-in.')
    if (!isRangeAvailable(form.checkin, form.checkout))
      return setErro('Essas datas não estão disponíveis para essa acomodação. Escolha outras datas ou reserve pelo WhatsApp.')

    const cpfNumeros = form.cpf.replace(/\D/g, '')
    if (cpfNumeros.length !== 11) return setErro('CPF inválido.')

    setLoading(true)
    try {
      const res = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          acomodacaoNome: acomodacao.nome,
          acomodacaoSlug: acomodacao.slug,
          checkin: form.checkin,
          checkout: form.checkout,
          hospedes: form.hospedes,
          noites,
          total,
          nome: form.nome,
          email: form.email,
          cpf: cpfNumeros,
          telefone: form.telefone,
        }),
      })

      if (!res.ok) throw new Error('Erro ao criar preferência de pagamento.')
      const { preferenceId } = await res.json()

      navigate('/checkout', {
        state: {
          preferenceId,
          total,
          noites,
          acomodacao: { nome: acomodacao.nome, slug: acomodacao.slug },
          checkin: form.checkin,
          checkout: form.checkout,
          hospedes: form.hospedes,
          nome: form.nome,
          email: form.email,
        },
      })
    } catch (err) {
      setErro(err.message || 'Erro inesperado. Tente novamente ou reserve pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="booking-form">
      <div className="booking-form__preco">
        <span className="booking-form__preco-valor">
          R$ {acomodacao.preco.toLocaleString('pt-BR')}
        </span>
        <span className="booking-form__preco-label">/noite (semana)</span>
        {acomodacao.precoFimSemana && (
          <span className="booking-form__preco-fds">
            R$ {acomodacao.precoFimSemana.toLocaleString('pt-BR')}/noite (fim de semana)
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="booking-form__fields" noValidate>
        {/* Datas */}
        <div className="booking-form__row">
          <div className="booking-form__field">
            <label htmlFor="checkin">
              <FiCalendar /> Check-in
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              min={today}
              value={form.checkin}
              onChange={handle}
              required
            />
          </div>
          <div className="booking-form__field">
            <label htmlFor="checkout">
              <FiCalendar /> Check-out
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              min={form.checkin || tomorrow}
              value={form.checkout}
              onChange={handle}
              required
            />
          </div>
        </div>

        <div className="booking-form__field">
          <label htmlFor="hospedes">
            <FiUsers /> Hóspedes
          </label>
          <select id="hospedes" name="hospedes" value={form.hospedes} onChange={handle}>
            {Array.from({ length: acomodacao.hospedes }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'hóspede' : 'hóspedes'}
              </option>
            ))}
          </select>
        </div>

        {/* Resumo de valor */}
        {noites > 0 && (
          <div className="booking-form__resumo">
            <span>{noites} noite{noites > 1 ? 's' : ''}</span>
            <span className="booking-form__total">
              R$ {total.toLocaleString('pt-BR')}
            </span>
          </div>
        )}

        <hr className="booking-form__divider" />

        {/* Dados pessoais */}
        <div className="booking-form__field">
          <label htmlFor="nome">
            <FiUser /> Nome completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handle}
            required
          />
        </div>

        <div className="booking-form__field">
          <label htmlFor="email">
            <FiMail /> E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handle}
            required
          />
        </div>

        <div className="booking-form__row">
          <div className="booking-form__field">
            <label htmlFor="cpf">
              <FiCreditCard /> CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={handle}
              required
            />
          </div>
          <div className="booking-form__field">
            <label htmlFor="telefone">
              <FiPhone /> Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(21) 90000-0000"
              value={form.telefone}
              onChange={handle}
              required
            />
          </div>
        </div>

        {erro && <p className="booking-form__erro">{erro}</p>}

        <button
          type="submit"
          className="btn btn-primary booking-form__btn"
          disabled={loading || loadingAvail}
        >
          {loading ? (
            <>
              <FiLoader className="spin" /> Aguarde...
            </>
          ) : (
            'Ir para pagamento'
          )}
        </button>
      </form>

      {/* WhatsApp como fallback */}
      <div className="booking-form__whatsapp">
        <p>Prefere falar com a Cida?</p>
        <a
          href={waReserva(acomodacao.nome)}
          target="_blank"
          rel="noreferrer"
          className="booking-form__whatsapp-link"
        >
          <FaWhatsapp /> Reserve pelo WhatsApp
        </a>
      </div>
    </div>
  )
}
