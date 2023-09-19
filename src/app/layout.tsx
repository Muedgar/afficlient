import { AppContextProvider } from '@/context/app.context'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Affidavit',
  description: 'Built with love by Edgar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">  
      </script>
      </head>
      <body className={inter.className}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
        </body>
    </html>
  )
}
