'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { useRef } from 'react'

export function Faqs() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: any

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )
  }

  const closePopover2 = () => {
    return buttonRef2.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )
  }
  const closePopover3 = () => {
    return buttonRef3.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )
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
    <div className="bg-black">
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
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        Decentralized Governance
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className="mt-2 h-24 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2">
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
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        Global and Borderless
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className="mt-2 h-24 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2">
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
                      <span className="py-6 pl-8 text-3xl font-medium leading-7 focus:outline-none">
                        Transparency
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    show={open}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      as="dd"
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className="mt-2 h-24 pr-12"
                    >
                      <div className="absolute -top-14 right-0 w-1/2">
                        <span className="text-2xl leading-7 text-gray-300">
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
      </div>
    </div>
  )
}
