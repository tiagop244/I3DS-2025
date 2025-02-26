import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  open: true, // abre automatico o navegador e inicia o server
  port: 3000, // porta de conexao, altere quando necessario
  host: true, // habilitar rede externa
  },
})
