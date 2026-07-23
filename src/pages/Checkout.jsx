import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { initMercadoPago, Payment } from '@mercadopago/sdk-react'
import { FiArrowLeft, FiCalendar, FiUsers } from 'react-icons/fi'
import Seo from '../components/Seo.jsx'
import './Checkout.css'

// Inicializa o SDK com a chave pública (exposta no browser — seguro)
const MP_PUBLIC_KEY = import.meta.env.VITE_MP_PUBLIC_KEY

export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state

  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    if (!state?.preferenceId) {
      navigate('/acomodacoes', { replace: true })
      return
    }
    if (MP_PUBLIC_KEY) {
      initMercadoPago(MP_PUBLIC_KEY, { locale: 'pt-BR' })
      setSdkReady(true)
    }
  }, [state, navigate])

  if (!state) return null

  const { preferenceId, total, noites, acomodacao, checkin, checkout, hospedes, nome } = state

  function formatDate(d) {
    if (!d) return ''
    const [y, m, day] = d.split('-')
    return `${day}/${m}/${y}`
  }

  const initialization = {
    amount: total,
    preferenceId,
  }

  const customization = {
    paymentMethods: {
      ticket: 'all',        // boleto
      bankTransfer: 'all',  // PIX
      creditCard: 'all',
      debitCard: 'all',
      maxInstallments: 12,
    },
    visual: {
      style: {
        theme: 'default',
        customVariables: {
          baseColor: '#4a4f3d',
          baseColorFirstVariant: '#c9a96a',
          baseColorSecondVariant: '#b2915a',
          fontSizeSmall: '14px',
          borderRadiusSmall: '6px',
          borderRadiusMedium: '6px',
          borderRadiusLarge: '8px',
        },
      },
    },
  }

  async function onSubmit({ selectedPaymentMethod, formData }) {
    // O Bricks chama onSubmit apenas para confirmar — o pagamento em si
    // é processado pelo Mercado Pago via preferenceId.
    // Para métodos como PIX e boleto, o Bricks redireciona automaticamente.
    return new Promise((resolve) => resolve())
  }

  function onError(error) {
    console.error('MP Bricks error:', error)
  }

  function onReady() {
    // Bricks carregado com sucesso
  }

  return (
    <>
      <Seo title="Finalizar Reserva" description="Escolha a forma de pagamento e confirme sua reserva na Pousada Casa Florinda." />

      <section className="checkout-page section">
        <div className="container checkout-page__inner">

          {/* Resumo da reserva */}
          <div className="checkout-page__resumo">
            <Link to={`/acomodacoes/${acomodacao?.slug}`} className="checkout-page__back">
              <FiArrowLeft /> Voltar
            </Link>

            <h1 className="checkout-page__titulo">Finalizar Reserva</h1>

            <div className="checkout-page__card">
              <h2 className="checkout-page__acomodacao">{acomodacao?.nome}</h2>

              <ul className="checkout-page__info">
                <li>
                  <FiCalendar />
                  <span>
                    {formatDate(checkin)} → {formatDate(checkout)}
                  </span>
                </li>
                <li>
                  <FiUsers />
                  <span>
                    {hospedes} {hospedes === 1 ? 'hóspede' : 'hóspedes'}
                  </span>
                </li>
              </ul>

              <div className="checkout-page__total-box">
                <span>
                  {noites} noite{noites > 1 ? 's' : ''}
                </span>
                <span className="checkout-page__total">
                  R$ {total?.toLocaleString('pt-BR')}
                </span>
              </div>

              {nome && (
                <p className="checkout-page__guest">Reserva para: <strong>{nome}</strong></p>
              )}
            </div>

            <p className="checkout-page__seguro">
              🔒 Pagamento 100% seguro via Mercado Pago · PIX, Boleto ou Cartão de Crédito
            </p>
          </div>

          {/* Bricks de pagamento */}
          <div className="checkout-page__bricks">
            {!MP_PUBLIC_KEY ? (
              <div className="checkout-page__aviso">
                <p>
                  ⚠️ Chave pública do Mercado Pago não configurada.
                  Configure a variável <code>VITE_MP_PUBLIC_KEY</code> no Vercel.
                </p>
              </div>
            ) : sdkReady ? (
              <Payment
                initialization={initialization}
                customization={customization}
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
              />
            ) : (
              <div className="checkout-page__loading">Carregando métodos de pagamento…</div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
