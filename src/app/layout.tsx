import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//components
import Header from 'components/common/Header'
//contexts
import ThemeProvider from 'contexts/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Commerce Demo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          defaultTheme='system'
          attribute='class'
          themes={['system', 'light', 'dark', 'purple', 'rose',]}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>

  )
}