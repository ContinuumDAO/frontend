'use client'

import WhoWeAreGraphic from '../images/who-we-are-graphic.gif'
import Image from 'next/image'

export function WhatWeDo() {
  return (
    <div
      id="what-we-do"
      className=" "
    >
      <div className="mx-auto max-w-7xl sm:px-6">
        <div className="relative isolate px-6 xxs:py-10 sm:px-10 sm:py-20 sm:selection:rounded-3xl lg:py-12 xl:px-24">
          <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="xxs:text-center lg:row-start-2 lg:max-w-xl lg:text-left xl:-ml-24">
              <p className="font-bold tracking-tight text-white xxs:text-4xl xs:text-5xl">
              Ultimate public good
              </p>
              <p className="mt-10 font-medium leading-8 text-white xxs:text-2xl sm:text-3xl">
              Permissionless service<br/>Autonomous operation<br/>Programable MPC functions<br/>Unlimited node scaling
              </p>
              <p className="mt-10 font-light leading-8 text-gray-300 xs:text-xl sm:text-2xl xl:pr-24">
              Continuum is a decentralized MPC network designed to serve as a public good. Its primary purpose is to facilitate seamless integration of dApps across various blockchains. Governance of the network is managed through on-chain voting by ContinuumDAO 
              </p>
              <div className="mt-10 flex xs:justify-center lg:justify-start">
                <a
                  href="../../assets/White_Paper_ContinuumDAO.pdf"
                  className="backdrop-blur-[2px] link relative overflow-hidden border border-white py-4 text-base font-semibold leading-6 text-white xxs:px-8 xs:px-10"
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
                className="main-shadow md:items-center lg:ml-16 lg:mt-20 lg:scale-100 xl:ml-32 xl:mt-24"
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
