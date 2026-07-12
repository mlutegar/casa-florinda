import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// URL de produção: https://mlutegar.github.io/casa-florinda/
// Quando o domínio próprio (pousadacasaflorinda.com.br) for configurado, troque base para '/'.
export default defineConfig({
  plugins: [react()],
  base: '/casa-florinda/',
})
