import WhoWeAreGraphic from '../images/who-we-are-graphic.gif'
import Image from 'next/image'

export function PrimaryFeatures() {
  return (
    <div className="bg-[url('../images/background-graphic.gif')] py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-black px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <p className="text-5xl font-bold tracking-tight text-white">
                What We Do
              </p>
              <p className="mt-10 text-3xl font-medium leading-8 text-white">
                Propel multi-chain dApps through a decentralized MPC network
              </p>
              <p className="mt-10 text-2xl font-light leading-8 text-gray-300">
                Continuum is a trustless MPC network of decentralized nodes that
                allows dApps from many diverse blockchains to seamlessly
                interact using decentralized SMPC for security.
              </p>
            </div>
            <div className="relative -z-20 min-w-full max-w-xl lg:row-span-4 lg:w-[64rem] lg:max-w-none">
              <Image src={WhoWeAreGraphic} alt="Network Graphic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
