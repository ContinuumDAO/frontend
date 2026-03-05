import Image from 'next/image'
import { Header } from '@/components/Header'

export default function MPCNetworkPage() {
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
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-white text-lg sm:text-xl md:text-2xl font-medium max-w-2xl">
          The Multi-Party Computation network page will be here soon. Stay tuned.
        </p>
      </main>
      </div>
    </>
  )
}
