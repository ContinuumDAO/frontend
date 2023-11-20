'use client'

export function Hero() {
  return (
    <div className="bg-black">
      <div className="relative isolate py-48">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
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
