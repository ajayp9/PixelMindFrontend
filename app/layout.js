import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from './components/QueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce App',
  description: 'A responsive e-commerce product listing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}