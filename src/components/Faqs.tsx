'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { useRef } from 'react'
import { Bobble } from './Bobble'
import { CallToAction } from './CallToAction'

export function Faqs() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: any

  const closePopover = () => {
    return buttonRef.current?.click()
  }

  const closePopover2 = () => {
    return buttonRef2.current?.click()
  }
  const closePopover3 = () => {
    return buttonRef3.current?.click()
  }

  const onMouseEnter = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseEnter2 = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef2.current?.click()
  }

  const onMouseEnter3 = (open: any) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef3.current?.click()
  }

  const onMouseLeave = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  const onMouseLeave2 = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover2(), timeoutDuration)
  }

  const onMouseLeave3 = (open: any) => {
    if (!open) return
    timeout = setTimeout(() => closePopover3(), timeoutDuration)
  }

  return (
    <div className="bg-[url('../images/background-graphic.gif')]">
      <div className="mx-auto max-w-[115rem] px-6 py-32 sm:py-48 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <h2 className="pb-12 text-5xl font-bold leading-10 tracking-tight text-white">
            Why are we a DAO?
          </h2>
          <div className="border-b border-white/70"></div>
          <dl>
            <Disclosure as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      ref={buttonRef}
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className="relative flex w-full items-start justify-between text-left text-white focus:outline-none"
                    >
                      <svg
                        width="565"
                        height="249"
                        viewBox="0 0 565 249"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${open ? 'absolute' : 'hidden'} `}
                      >
                        <g opacity="0.2" filter="url(#filter0_f_870_6165)">
                          <ellipse
                            cx="9"
                            cy="246"
                            rx="416"
                            ry="112"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_870_6165"
                            x="-547"
                            y="-6"
                            width="1112"
                            height="504"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="70"
                              result="effect1_foregroundBlur_870_6165"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        <div className={`${open ? 'absolute' : 'hidden'} `}>
                          <Bobble />
                        </div>
                        <span className={`${open ? '' : ''} `}>
                          Decentralized Governance
                        </span>
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    className="overflow-visible"
                    // enter="transition ease-in-out duration-700"
                    // enterFrom="transform scale-95 opacity-0"
                    // enterTo="transform scale-100 opacity-100"
                    // leave="transition ease-in-out duration-700"
                    // leaveFrom="transform scale-100 opacity-100"
                    // leaveTo="transform scale-95 opacity-0"
                    enter="transition transition-[max-height] duration-[20000ms] ease-in-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-in-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="dd"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className="durat mt-2 h-36 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2 px-10">
                        <span className="text-2xl leading-7 text-gray-300">
                          Continuum is a trustless MPC network of decentralized
                          nodes that allows dApps from many diverse blockchains
                          to seamlessly interact using decentralized SMPC for
                          security.
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <dl>
            <Disclosure as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      ref={buttonRef2}
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className="relative flex w-full items-start justify-between text-left text-white focus:outline-none"
                    >
                      <svg
                        width="565"
                        height="249"
                        viewBox="0 0 565 249"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${open ? 'absolute' : 'hidden'} `}
                      >
                        <g opacity="0.2" filter="url(#filter0_f_870_6165)">
                          <ellipse
                            cx="9"
                            cy="246"
                            rx="416"
                            ry="112"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_870_6165"
                            x="-547"
                            y="-6"
                            width="1112"
                            height="504"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="70"
                              result="effect1_foregroundBlur_870_6165"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        Global and Borderless
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition ease-in-out duration-700"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition ease-in-out duration-700"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className="mt-2 h-36 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2 px-10">
                        <span className="text-2xl leading-7 text-gray-300">
                          Our community members are from all over the world, and
                          we are not tied to a specific jurisdiction. This
                          global perspective enriches CTM by bringing diverse
                          ideas and experiences.
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <dl>
            <Disclosure as="div" className="pt-6 focus:outline-none">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      ref={buttonRef3}
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className="relative flex w-full items-start justify-between text-left text-white focus:outline-none"
                    >
                      <svg
                        width="565"
                        height="249"
                        viewBox="0 0 565 249"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${open ? 'absolute' : 'hidden'} `}
                      >
                        <g opacity="0.2" filter="url(#filter0_f_870_6165)">
                          <ellipse
                            cx="9"
                            cy="246"
                            rx="416"
                            ry="112"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_870_6165"
                            x="-547"
                            y="-6"
                            width="1112"
                            height="504"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="70"
                              result="effect1_foregroundBlur_870_6165"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        Transparency
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition ease-in-out duration-700"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition ease-in-out duration-700"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className="mt-2 h-36 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2 px-10">
                        <span className=" text-2xl leading-7 text-gray-300">
                          We are committed to building trust with our community
                          by providing full visibility into our daily operations
                          as much as possible.
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                  <div className="border-b border-white/70 pt-6"></div>
                </>
              )}
            </Disclosure>
          </dl>
          <div></div>
        </div>
        <div className="pt-20">
          <CallToAction />
        </div>
      </div>
    </div>
  )
}
