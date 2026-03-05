import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQs } from '@/components/FAQs'
import { faqItems } from '@/data/faqs'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently asked questions about ContinuumDAO, the CTM token, veCTM, MPC network, C3Caller, governance, and the Multi-Party Agent Wallet.',
}

const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQsPage() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 min-h-screen min-w-full overflow-hidden pointer-events-none"
        aria-hidden
      >
        <Image
          src="/images/background-graphic.gif"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10">
        <Header />
      <main className="min-h-screen flex flex-col">
        <FAQs />
      </main>
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
    </>
  )
}
