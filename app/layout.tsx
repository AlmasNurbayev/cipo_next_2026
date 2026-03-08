import type { Metadata } from 'next'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cipo - Детская обувь',
  description: 'Сеть магазинов детской обуви Cipo. Современный минимализм, здоровье стопы, эко-френдли.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
