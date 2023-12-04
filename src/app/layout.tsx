import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Continuum DAO',
    default: 'Continuum DAO',
  },
  description:
    'Continuum is a trustless MPC network of decentralized nodes that allows dApps from many diverse blockchains to seamlessly interact using decentralized SMPC for security.',
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
