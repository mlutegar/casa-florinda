import { Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SocialFloat from './components/SocialFloat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Home from './pages/Home.jsx'
import Acomodacoes from './pages/Acomodacoes.jsx'
import AcomodacaoDetalhe from './pages/AcomodacaoDetalhe.jsx'
import SobreNos from './pages/SobreNos.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import Faq from './pages/Faq.jsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx'
import Termos from './pages/Termos.jsx'
import Checkout from './pages/Checkout.jsx'
import BookingConfirmacao from './pages/BookingConfirmacao.jsx'
import BookingPendente from './pages/BookingPendente.jsx'
import BookingErro from './pages/BookingErro.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acomodacoes" element={<Acomodacoes />} />
            <Route path="/acomodacoes/casinha-da-bel" element={<Navigate to="/acomodacoes/suite-1953-hidromassagem" replace />} />
            <Route path="/acomodacoes/sweet-holly" element={<Navigate to="/acomodacoes/suite-1954" replace />} />
            <Route path="/acomodacoes/suite-das-flores" element={<Navigate to="/acomodacoes/suite-1952" replace />} />
            <Route path="/acomodacoes/suite-da-lua" element={<Navigate to="/acomodacoes/suite-1955" replace />} />
            <Route path="/acomodacoes/:slug" element={<AcomodacaoDetalhe />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/reserva/confirmada" element={<BookingConfirmacao />} />
            <Route path="/reserva/pendente" element={<BookingPendente />} />
            <Route path="/reserva/erro" element={<BookingErro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <SocialFloat />
    </>
  )
}
