import Header from '@/components/header/header'
import './globals.css'
import './index.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/provider/theme-provider'
import { motion } from "framer-motion"
import Footer from '@/components/footer'
import ModalProvider from '@/provider/modal-provider'
import ToastProvider from '@/provider/toast-provider'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'claim',
  description: 'climb store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider />
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        // disableTransitionOnChange
        >

          <Header />
          <main className='pt-20 bg-[#FFFFF6] dark:bg-[#121212]'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
