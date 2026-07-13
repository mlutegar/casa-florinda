import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Acomodacoes from './pages/Acomodacoes.jsx'
import AcomodacaoDetalhe from './pages/AcomodacaoDetalhe.jsx'
import SobreNos from './pages/SobreNos.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import Faq from './pages/Faq.jsx'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx'
import Termos from './pages/Termos.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acomodacoes" element={<Acomodacoes />} />
          <Route path="/acomodacoes/:slug" element={<AcomodacaoDetalhe />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
