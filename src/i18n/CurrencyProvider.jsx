import { createContext, useContext, useEffect, useState } from 'react'

const CurrencyContext = createContext(null)

const FALLBACK_RATE = 0.18 // 1 BRL ≈ US$ 0,18 (fallback offline)
const LS_CURR = 'cf-currency'
const LS_RATE = 'cf-usd-rate'
const LS_RATE_TS = 'cf-usd-rate-ts'
const TTL = 6 * 60 * 60 * 1000 // 6 horas

function getInitial() {
  return localStorage.getItem(LS_CURR) === 'USD' ? 'USD' : 'BRL'
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyRaw] = useState(getInitial)
  const [rate, setRate] = useState(() => {
    const saved = parseFloat(localStorage.getItem(LS_RATE))
    return saved > 0 ? saved : FALLBACK_RATE
  })

  // Persiste escolha
  useEffect(() => {
    localStorage.setItem(LS_CURR, currency)
  }, [currency])

  // Busca taxa de câmbio (max 1x a cada 6h)
  useEffect(() => {
    const ts = parseInt(localStorage.getItem(LS_RATE_TS) ?? '0', 10)
    if (Date.now() - ts < TTL) return
    fetch('https://open.er-api.com/v6/latest/BRL')
      .then((r) => r.json())
      .then((data) => {
        const usd = data?.rates?.USD
        if (usd > 0) {
          setRate(usd)
          localStorage.setItem(LS_RATE, String(usd))
          localStorage.setItem(LS_RATE_TS, String(Date.now()))
        }
      })
      .catch(() => {/* usa fallback silenciosamente */})
  }, [])

  function setCurrency(c) {
    setCurrencyRaw(c)
  }

  function formatPrice(brl) {
    if (!brl) return ''
    if (currency === 'USD') {
      const usd = Math.round(brl * rate)
      return `US$ ${usd.toLocaleString('en-US')}`
    }
    return `R$ ${Number(brl).toLocaleString('pt-BR')}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rate, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency deve ser usado dentro de CurrencyProvider')
  return ctx
}
