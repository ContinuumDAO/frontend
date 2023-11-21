'use client'

import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-black py-20"
    >
      <Container className="relative isolate">
        <div className="mt-6 flex flex-col items-center justify-center gap-y-6 md:mt-10 md:flex-row md:gap-x-6">
          <a
            href="#"
            className="link relative overflow-hidden border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Forum <span aria-hidden="true">↗</span>
            <span className="link-bg"></span>
          </a>
          <a
            href="#"
            className="link relative overflow-hidden border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Vote <span aria-hidden="true">↗</span>
            <span className="link-bg"></span>
          </a>
          <a
            href="#"
            className="link relative overflow-hidden border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Learn More <span aria-hidden="true">↗</span>
            <span className="link-bg"></span>
          </a>
          <a
            href="#"
            className="link relative overflow-hidden border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Build With Us <span aria-hidden="true">↗</span>
            <span className="link-bg"></span>
          </a>
        </div>
      </Container>

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
    </section>
  )
}
