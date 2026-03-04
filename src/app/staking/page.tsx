import { Header } from '@/components/Header'
import backgroundGraphic from '@/images/background-graphic.gif'

export default function StakingPage() {
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 -z-[10] h-screen w-screen bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${backgroundGraphic.src})` }}
        aria-hidden
      />
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-white text-lg sm:text-xl md:text-2xl font-medium max-w-2xl">
          Staking on MPC nodes, rewarded with CTM is coming soon. Stay tuned.
        </p>
      </main>
    </>
  )
}
