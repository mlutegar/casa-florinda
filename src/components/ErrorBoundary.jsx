import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Em produção, enviar para um serviço de monitoramento aqui
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center', gap: '16px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--olive)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Algo deu errado
          </h1>
          <p style={{ color: 'var(--texto-suave)', maxWidth: '400px' }}>
            Ocorreu um erro inesperado. Por favor, tente recarregar a página.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn btn-primary"
              onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
            >
              Recarregar
            </button>
            <Link className="btn btn-outline" to="/" onClick={() => this.setState({ hasError: false })}>
              Voltar ao início
            </Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
