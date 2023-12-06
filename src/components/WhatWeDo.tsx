'use client'

import WhoWeAreGraphic from '../images/who-we-are-graphic.gif'
import Image from 'next/image'

export function WhatWeDo() {
  return (
    <div
      id="what-we-do"
      className="bg-[url('../images/background-graphic.gif')]"
    >
      <div className="mx-auto max-w-7xl sm:px-6">
        <div className="relative isolate px-6 xs:py-10 sm:px-10 sm:py-20 sm:py-24 sm:selection:rounded-3xl lg:py-12 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="xs:text-center lg:row-start-2 lg:max-w-xl lg:text-left xl:-ml-24">
              <p className="text-5xl font-bold tracking-tight text-white">
                What We Do
              </p>
              <p className="mt-10 font-medium leading-8 text-white xs:text-2xl sm:text-3xl">
                Propel multi-chain dApps through a decentralized MPC network
              </p>
              <p className="mt-10 font-light leading-8 text-gray-300 xs:text-xl sm:text-2xl xl:pr-24">
                Continuum is a trustless MPC network of decentralized nodes that
                allows dApps from many diverse blockchains to seamlessly
                interact using decentralized SMPC for security.
              </p>
              <div className="mt-10 flex xs:justify-center lg:justify-start">
                <a
                  href="../../assets/White_Paper_ContinuumDAO.a0c79446.pdf"
                  className="link relative overflow-hidden border border-white px-10 py-4 text-base font-semibold leading-6 text-white"
                >
                  Read Our Whitepaper <span aria-hidden="true">↗</span>
                  <span className="link-bg"></span>
                </a>
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

                .webkit-center {
                  display: flex;
                  -webkit-align-items: center;
                  align-items: center;
                  justify-content: center;
                }
              `}</style>
            </div>
            <div className="-z-20 xs:-mt-10 sm:-mt-24 lg:row-span-4 lg:-ml-24 lg:max-w-none">
              <Image
                className="md:items-center lg:ml-16 lg:mt-20 lg:scale-100 xl:ml-32 xl:mt-24"
                src={WhoWeAreGraphic}
                alt="Network Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
