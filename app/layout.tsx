import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'J & H Projects Pvt. Ltd. | Engineering & Construction Excellence',
  description: 'J & H Projects Pvt. Ltd. - Leading engineering and construction company specializing in multi-discipline projects, fabrication, and power control systems since 1999.',
  keywords: ['engineering', 'construction', 'fabrication', 'power control', 'Ahmedabad', 'Gujarat', 'industrial projects'],
  authors: [{ name: 'J & H Projects Pvt. Ltd.' }],
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
