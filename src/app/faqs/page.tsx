import { Header } from '@/components/Header'
import { FAQs } from '@/components/FAQs'
import backgroundGraphic from '@/images/background-graphic.gif'

export default function FAQsPage() {
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 -z-[10] h-screen w-screen bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${backgroundGraphic.src})` }}
        aria-hidden
      />
      <Header />
      <main>
        <FAQs />
      </main>
    </>
  )
}
