import { createContext, useContext, useEffect, useState } from 'react'
import { translations, phraseMap } from './translations.js'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('cf-lang')
    if (saved === 'pt' || saved === 'en') return saved
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
    return 'en'
  }
  return 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem('cf-lang', lang)
    if (typeof document !== 'undefined') document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang])

  // Traduz uma chave de UI, com interpolação simples de {n}
  const t = (key, vars) => {
    let str = translations[lang]?.[key] ?? translations.pt[key] ?? key
    if (vars) Object.entries(vars).forEach(([k, v]) => (str = str.replace(`{${k}}`, v)))
    return str
  }

  // Escolhe o campo traduzido de um objeto de dados (campo vs campo_en)
  const pick = (obj, field) => (lang === 'en' && obj[`${field}_en`]) || obj[field]

  // Traduz uma frase de dados (comodidades/regras)
  const tp = (phrase) => (lang === 'en' && phraseMap[phrase]) || phrase

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick, tp }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT deve ser usado dentro de LanguageProvider')
  return ctx
}
