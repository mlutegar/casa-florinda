import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Brand from './Brand.jsx'
import { waReserva } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import { useCurrency } from '../i18n/CurrencyProvider.jsx'
import './Navbar.css'

function CurrToggle({ currency, setCurrency, scrolled }) {
  return (
    <div className={`nav__lang ${scrolled ? 'is-dark' : ''}`}>
      <button className={currency === 'BRL' ? 'active' : ''} onClick={() => setCurrency('BRL')}>BRL</button>
      <span>|</span>
      <button className={currency === 'USD' ? 'active' : ''} onClick={() => setCurrency('USD')}>USD</button>
    </div>
  )
}

function LangToggle({ lang, setLang, scrolled }) {
  return (
    <div className={`nav__lang ${scrolled ? 'is-dark' : ''}`}>
      <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
      <span>|</span>
      <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
    </div>
  )
}

export default function Navbar() {
  const { t, lang, setLang } = useT()
  const { currency, setCurrency } = useCurrency()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/acomodacoes', label: t('nav.acomodacoes') },
    { to: '/sobre-nos', label: t('nav.sobre') },
    { to: '/servicos', label: t('nav.servicos') },
    { to: '/contato', label: t('nav.contato') },
    { to: '/faq', label: t('nav.faq') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('menu-open', open)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <Brand variant={scrolled ? 'dark' : 'light'} size="sm" />
        </Link>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav__lang-mobile"><LangToggle lang={lang} setLang={setLang} scrolled /></li>
            <li className="nav__curr-mobile"><CurrToggle currency={currency} setCurrency={setCurrency} scrolled /></li>
            <li className="nav__cta-mobile">
              <a href={waReserva()} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('nav.reservar')}
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav__right">
          <CurrToggle currency={currency} setCurrency={setCurrency} scrolled={scrolled} />
          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />
          <a href={waReserva()} target="_blank" rel="noreferrer" className="btn btn-primary nav__cta">
            {t('nav.reservar')}
          </a>
        </div>

        <button className="nav__toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
