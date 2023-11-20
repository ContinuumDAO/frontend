'use client'

export function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative py-48">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-wide text-white/50 sm:text-7xl">
                Continuum
              </h1>
              <p className="mt-6 text-xl font-semibold leading-8 text-white">
                ContinuumDAO, a trustless and fully decentralized MPC
                infrastructure to connect the world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="border border-white px-10 py-3 text-sm font-semibold leading-6 text-white"
                >
                  Learn about ContinuumDAO <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
