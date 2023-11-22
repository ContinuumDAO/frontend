'use client'

import { Fragment, useRef, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Logo } from './Logo'
import './Header.css'

const useCases = [
  {
    name: 'C3Router',
    href: '#',
  },
  {
    name: 'C3Caller',
    href: '#',
  },
  {
    name: 'C3Wallet',
    href: '#',
  },
  {
    name: 'Build on CTM',
    href: '#',
  },
]

const governance = [
  {
    name: 'Forum',
    href: '#',
  },
  {
    name: 'Vote',
    href: '#',
  },
  {
    name: 'Learn More',
    href: '#',
  },
  {
    name: 'Build With Us',
    href: '#',
  },
]

const contactUs = [
  {
    name: 'X',
    href: '#',
  },
  {
    name: 'Telegram',
    href: '#',
  },
  {
    name: 'Medium',
    href: '#',
  },
  {
    name: 'Forum',
    href: '#',
  },
  {
    name: 'GitHub',
    href: '#',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <header className="fixed top-0 z-50 w-full bg-black pt-8">
      <nav
        className="mx-auto flex max-w-[100rem] items-center justify-between border-b border-t border-white/30 px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5 lg:-mx-8">
            <span className="sr-only">Continuum</span>
            <div className="flex flex-row items-center">
              <Logo />
              <span className="pl-3 pt-0.5 text-4xl font-semibold text-white">
                Continuum
              </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden items-center lg:flex">
          <a
            href="#"
            className="custom-link group relative px-8 py-8 text-lg font-medium leading-6 text-white focus:outline-none"
          >
            What We Do
            <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full"></span>
          </a>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <a
            href="#"
            className="custom-link group relative px-8 py-8 text-lg font-medium leading-6 text-white focus:outline-none"
          >
            Continumm Matrix
            <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full"></span>
          </a>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            {({ open }) => {
              return (
                <>
                  <div>
                    <Popover.Button
                      ref={buttonRef}
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                      className="custom-link group relative p-8 text-lg font-medium leading-6 text-white focus:outline-none"
                    >
                      <span className="flex items-center gap-x-1">
                        Use Cases
                        <ChevronDownIcon
                          className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full"></span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-500"
                      enterFrom="opacity-0 -translate-x-6"
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-x-6"
                    >
                      <Popover.Panel
                        className="absolute -left-4 top-3/4 z-10 mt-8 w-48 max-w-md -translate-x-6 overflow-hidden bg-[#171717] opacity-0 shadow-lg ring-1 ring-white/30 transition"
                        onMouseEnter={onMouseEnter.bind(null, open)}
                        onMouseLeave={onMouseLeave.bind(null, open)}
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="px-4">
                            {useCases.map((item, i) => (
                              <div
                                key={item.name}
                                className="animate-slide-in-left group relative flex items-center gap-x-6 p-4 text-sm leading-6"
                              >
                                <div className="flex-auto">
                                  <a
                                    href={item.href}
                                    className="block font-semibold text-white"
                                  >
                                    {item.name}
                                  </a>
                                  <div
                                    className={`${
                                      i !== useCases.length - 1
                                        ? 'animate-grow-border absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform bg-white/30'
                                        : ''
                                    } `}
                                  ></div>
                                  <div className=""></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                </>
              )
            }}
          </Popover>

          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            {({ open }) => {
              return (
                <>
                  <div>
                    <Popover.Button
                      ref={buttonRef2}
                      onMouseEnter={onMouseEnter2.bind(null, open)}
                      onMouseLeave={onMouseLeave2.bind(null, open)}
                      className="custom-link group relative p-8 text-lg font-medium leading-6 text-white focus:outline-none"
                    >
                      <span className="flex items-center gap-x-1">
                        Governance
                        <ChevronDownIcon
                          className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full"></span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-500"
                      enterFrom="opacity-0 -translate-x-6"
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-x-6"
                    >
                      <Popover.Panel
                        onMouseEnter={onMouseEnter2.bind(null, open)}
                        onMouseLeave={onMouseLeave2.bind(null, open)}
                        className="absolute -left-4 top-3/4
              z-10 mt-4 w-48 max-w-md -translate-x-6 overflow-hidden bg-[#171717] opacity-0 shadow-lg ring-1 ring-white/30 transition"
                      >
                        <div className="px-4">
                          {governance.map((item, i) => (
                            <div
                              key={item.name}
                              className="animate-slide-in-left group relative flex items-center gap-x-6 p-4 text-sm leading-6"
                            >
                              <div className="flex-auto">
                                <a
                                  href={item.href}
                                  className="block font-semibold text-white"
                                >
                                  {item.name}
                                </a>
                                <div
                                  className={`${
                                    i !== governance.length - 1
                                      ? 'animate-grow-border absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform bg-white/30'
                                      : ''
                                  } `}
                                ></div>
                                <div className=""></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                </>
              )
            }}
          </Popover>
          <div className="hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            {({ open }) => {
              return (
                <>
                  <div>
                    <Popover.Button
                      ref={buttonRef3}
                      onMouseEnter={onMouseEnter3.bind(null, open)}
                      onMouseLeave={onMouseLeave3.bind(null, open)}
                      className="custom-link group relative p-8 text-lg font-medium leading-6 text-white focus:outline-none"
                    >
                      <span className="flex items-center gap-x-1">
                        Contact Us
                        <ChevronDownIcon
                          className="h-5 w-5 flex-none text-white group-hover:rotate-180 group-hover:duration-500"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="block h-0.5 max-w-0 bg-white/70 transition-all duration-500 group-hover:max-w-full"></span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-500"
                      enterFrom="opacity-0 -translate-x-6"
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-x-6"
                    >
                      <Popover.Panel
                        onMouseEnter={onMouseEnter3.bind(null, open)}
                        onMouseLeave={onMouseLeave3.bind(null, open)}
                        className="absolute -left-4 top-3/4
              z-10 mt-4 w-48 max-w-md -translate-x-6 overflow-hidden bg-[#171717] opacity-0 shadow-lg ring-1 ring-white/30 transition"
                      >
                        <div className="px-4">
                          {contactUs.map((item, i) => (
                            <div
                              key={item.name}
                              className="animate-slide-in-left group relative flex items-center gap-x-6 p-4 text-sm leading-6"
                            >
                              <div className="flex-auto">
                                <a
                                  href={item.href}
                                  className="block font-semibold text-white"
                                >
                                  {item.name}
                                </a>
                                <div
                                  className={`${
                                    i !== contactUs.length - 1
                                      ? 'animate-grow-border absolute bottom-0 left-0 h-0.5 w-full -translate-x-1/2 scale-x-0 transform bg-white/30'
                                      : ''
                                  } `}
                                ></div>
                                <div className=""></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                </>
              )
            }}
          </Popover>
        </Popover.Group>
        <div className="hidden lg:-mr-8 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-full bg-[#C8EAFF] px-12 py-4 text-base font-semibold leading-6 text-gray-900 hover:bg-[#C8EAFF]/80"
          >
            MPC Network
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className=" lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-white/30 bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/30">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                >
                  What We Do
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                >
                  Continuum Matrix
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Use Cases
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...useCases].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Governance
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...governance].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-white/10">
                        Contact Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...contactUs].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white/10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="rounded py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10"
                >
                  MPC Network
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
