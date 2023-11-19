'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Logo } from './Logo'

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

  return (
    <header className="bg-black pt-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between border-b border-t border-white/30 p-6 lg:p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5 lg:-mx-8">
            <span className="sr-only">Continuum</span>
            <div className="flex flex-row items-center">
              <Logo className="scale-[0.8]" />
              <span className="pl-2 text-2xl font-semibold text-white">
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
        <Popover.Group className="hidden items-center lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            What We Do
          </a>
          <div className="-mx-4 hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Continuum Matrix
          </a>
          <div className="-mx-4 hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Use Cases
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-4 w-48 max-w-md overflow-hidden bg-black shadow-lg ring-1 ring-white/30">
                <div className="p-4">
                  {useCases.map((item, i) => (
                    <div
                      key={item.name}
                      className={`group relative flex items-center gap-x-6 ${
                        i !== useCases.length - 1
                          ? 'border-b border-white/30'
                          : ''
                      } p-4 text-sm leading-6 hover:bg-white/10`}
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="-mx-4 hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Governance
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-4 w-48 max-w-md overflow-hidden bg-black shadow-lg ring-1 ring-white/30">
                <div className="p-4">
                  {governance.map((item, i) => (
                    <div
                      key={item.name}
                      className={`group relative flex items-center gap-x-6 ${
                        i !== governance.length - 1
                          ? 'border-b border-white/30'
                          : ''
                      } p-4 text-sm leading-6 hover:bg-white/10`}
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="-mx-4 hidden min-h-[2.2rem] w-[1px] bg-white/30 lg:inline-block"></div>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Contact Us
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-4 w-48 max-w-md overflow-hidden bg-black shadow-lg ring-1 ring-white/30">
                <div className="p-4">
                  {contactUs.map((item, i) => (
                    <div
                      key={item.name}
                      className={`group relative flex items-center gap-x-6 ${
                        i !== contactUs.length - 1
                          ? 'border-b border-white/30'
                          : ''
                      } p-4 text-sm leading-6 hover:bg-white/10`}
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:-mr-8 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-full bg-[#C8EAFF] px-8 py-2 text-sm font-semibold leading-6 text-gray-900"
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
