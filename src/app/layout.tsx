import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coding-Pundits',
  description: 'Coding club of NIT,AP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
