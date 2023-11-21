'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Decentralized Governance',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Global and Borderless',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Transparency',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

export function Faqs() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[115rem] px-6 py-32 sm:py-48 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <h2 className="pb-12 text-5xl font-bold leading-10 tracking-tight text-white">
            Why are we a DAO?
          </h2>
          <div className="border-b border-white/70"></div>
          <dl className="">
            {faqs.map((faq, i) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="py-6 text-3xl font-medium leading-7">
                          {faq.question}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                    <div className="border-b border-white/70 pt-6"></div>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <div></div>
        </div>
      </div>
    </div>
  )
}
