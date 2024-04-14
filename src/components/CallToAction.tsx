'use client'

import { Container } from '@/components/Container'

export function CallToAction() {
  // List of actions, each with a label and a link (assuming URLs will be different)
  const actions = [
    { label: 'Forum', url: 'https://forum.continuumdao.org/' },
    { label: 'Vote', url: 'https://snapshot.org/#/continuumdao.eth' },
    {
      name: 'Staking',
      href: '',
      disabled: true
    },
    // {
    //   label: 'Learn More',
    //   url: 'https://docs.continuumdao.org/ContinuumDAO/Governance/Constitution',
    // },
    // {
    //   label: 'Build With Us',
    //   url: 'https://cjlxc0ssl3j.typeform.com/to/NOoKdeBc',
    // },
  ]

  return (
    <section id="footer" className="relative overflow-hidden xs:py-4 sm:py-20">
      <Container className="relative isolate">
        <div className="mt-6 flex flex-col items-center justify-center gap-y-6 md:mt-10 md:flex-row md:gap-x-6">
          {actions.map((action, index) => (
            <a
              target="_"
              key={index}
              href={action.url}
              className="backdrop-blur-[2px] link relative h-16 w-64 overflow-hidden border border-white text-center  text-base font-semibold leading-6 text-white"
            >
              <div className="mt-5">
                {action.label} <span aria-hidden="true">↗</span>
                <span className="link-bg"></span>
              </div>
            </a>
          ))}
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
