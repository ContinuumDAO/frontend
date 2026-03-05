import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQs } from '@/components/FAQs'
import { faqItems } from '@/data/faqs'
import backgroundGraphic from '@/images/background-graphic.gif'
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
        className="fixed bottom-0 left-0 right-0 top-0 -z-[10] h-screen w-screen bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${backgroundGraphic.src})` }}
        aria-hidden
      />
      <Header />
      <main className="min-h-screen relative z-10 flex flex-col">
        <FAQs />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
    </>
  )
}
