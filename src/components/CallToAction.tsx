import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-black py-20"
    >
      <Container className="relative">
        <div className="mt-6 flex flex-col items-center justify-center gap-y-6 md:mt-10 md:flex-row md:gap-x-6">
          <a
            href="#"
            className="border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Forum <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#"
            className="border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Vote <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#"
            className="border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Learn More <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#"
            className="border border-white px-20 py-4 text-base font-semibold leading-6 text-white"
          >
            Build With Us <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
