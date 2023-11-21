'use client'

import React, { useEffect, useRef } from 'react'

export function Hero() {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Force a reflow
    if (linkRef.current) {
      linkRef.current.offsetWidth
    }
  }, [])

  return (
    <div className="bg-black">
      <div className="relative isolate py-48">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden"
          aria-hidden="true"
        >
          <img src="https://s3-alpha-sig.figma.com/img/dee8/32aa/bf7a34c81bbee5b138cd60cfdece8056?Expires=1701648000&Signature=ZHFFKc3y7jwItCitRk0eVp2QE6YALp4Twf1Zu~642bTAElftc8ddF-SDHZv67cxRN-g7oR1mmX42cfp~JTFpAWWTpgyij492qd6dHsC98jAmJ7GIVJ0wlzFyuLmGq1IGnhyH5f4tAdVGjGWAGpHN18Xo-470eD1egYRtgsP60lSuRGcW7IclqpQ6yRJmB-FRe3zopqvcv7IK4s5JYTyfLM-H27XsnMAMFM71nYzam-3-kN8BQIKLQvW149B8kuW6J4fd6B8PTaZeZGNQnVmHywfNLfQbU7h6bYBuDonaSgKYqWdXWt8znzW7JKDz1PCMhEPfBWGCTguUHZHqjCrihQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                  ref={linkRef}
                  href="#"
                  className="link relative overflow-hidden border border-white px-10 py-3 text-sm font-semibold leading-6 text-white"
                >
                  Learn about ContinuumDAO <span aria-hidden="true">↗</span>
                  <span className="link-bg"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .link {
          position: relative;
          overflow: hidden;
          transition: color 0.5s ease;
          color: white;
        }

        .link-bg {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 100%;
          bottom: 0;
          background-color: white;
          z-index: -1;
          transition: right 0.5s ease;
        }

        .link:hover {
          color: black;
        }
        .link:hover .link-bg {
          right: 0;
        }
      `}</style>
    </div>
  )
}
