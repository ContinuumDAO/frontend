import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - ContinuumDAO',
    default: 'ContinuumDAO',
  },
  description:
    'A 100% DAO structure enables open democratic on-chain decision making that operates the Continuum Network with verifiable tracing.',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-black antialiased',
        montserrat.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
