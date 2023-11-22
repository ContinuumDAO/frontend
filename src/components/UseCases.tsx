import buildOnCtm from '@/images/build-on-ctm-1.svg'

const useCases = [
  {
    name: 'C3Router',
    role: 'Enables cross-chain liquidity aggregation or token transfer, all under the control of the dApp. It has a simple-to-implement interface and an inexpensive gas-based fee structure.',
    startImageUrl: '../images/build-on-ctm-1.svg',
    endImageUrl: '../images/build-on-ctm-2.svg',
  },
  {
    name: 'C3Caller',
    role: 'The purest cross-chain primitive, allowing unencrypted messages to be sent cross-chain. Fees can be charged on the source or destination chain and smart contracts can be called on the destination chain, all within one transaction.',
    startImageUrl: '../images/build-on-ctm-1.svg',
    endImageUrl: '../images/build-on-ctm-2.svg',
  },
  {
    name: 'C3Wallet',
    role: 'This will be the first truly cross-chain multi-signature wallet, allowing users to sign from diverse chains.',
    startImageUrl: '../images/build-on-ctm-1.svg',
    endImageUrl: '../images/build-on-ctm-2.svg',
  },
  {
    name: 'Build On CTM',
    role: 'External page with project submission application with BD guild info',
    startImageUrl: '../images/build-on-ctm-1.svg',
    endImageUrl: '../images/build-on-ctm-2.svg',
  },
]

export function UseCases() {
  return (
    <div className="bg-[url('../images/background-graphic.gif')] py-24 sm:py-32">
      <div className="mx-auto max-w-xl px-6 text-left lg:max-w-[100rem] lg:px-8">
        <div className="mx-auto">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Use Cases
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-7xl lg:grid-cols-4 lg:pl-24">
          {useCases.map((useCase, index) => (
            <li
              key={useCase.name}
              style={{ zIndex: useCases.length - index }}
              className="group z-0 -mr-24 max-w-lg border border-white bg-black px-8 py-10 hover:!z-10 lg:max-w-7xl"
            >
              <div className="group-hover:hidden">
                <BuildOnCtmStart />
              </div>
              <div className="hidden group-hover:inline">
                <BuildOnCtmEnd />
              </div>
              <div
                className={`${
                  useCases.length - index < useCases.length ? 'text-right' : ''
                }`}
              >
                <h3 className="mt-6 pb-10 text-3xl font-medium leading-7 tracking-tight text-white group-hover:text-left">
                  {useCase.name}
                </h3>
                <p className="text-2xl font-light leading-8 text-white/70 group-hover:text-left">
                  {useCase.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function BuildOnCtmStart() {
  return (
    <svg
      width="345"
      height="208"
      viewBox="0 0 345 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_865_4565)">
        <g opacity="0.4" filter="url(#filter0_f_865_4565)">
          <ellipse cx="170.5" cy="343.5" rx="191.5" ry="88.5" fill="white" />
        </g>
        <rect
          x="77.5"
          y="45.5"
          width="187"
          height="262"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="77.5"
          y="45.5"
          width="187"
          height="262"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="77.5"
          y="45.5"
          width="187"
          height="262"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          opacity="0.4"
          x="94"
          y="89"
          width="153"
          height="22"
          rx="10"
          fill="white"
        />
        <rect
          opacity="0.4"
          x="94"
          y="131"
          width="153"
          height="22"
          rx="10"
          fill="white"
        />
        <rect
          opacity="0.4"
          x="94"
          y="173"
          width="103"
          height="22"
          rx="10"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_865_4565"
          x="-121"
          y="155"
          width="583"
          height="377"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_865_4565"
          />
        </filter>
        <clipPath id="clip0_865_4565">
          <rect width="345" height="208" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function BuildOnCtmEnd() {
  return (
    <svg
      width="345"
      height="208"
      viewBox="0 0 345 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_865_4587)">
        <g opacity="0.4" filter="url(#filter0_f_865_4587)">
          <ellipse cx="170.5" cy="273.5" rx="191.5" ry="88.5" fill="white" />
        </g>
        <rect
          x="118.376"
          y="47.5434"
          width="187"
          height="262"
          rx="9.5"
          transform="rotate(5.21912 118.376 47.5434)"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="36.5301"
          y="64.1331"
          width="187"
          height="262"
          rx="9.5"
          transform="rotate(-3.55743 36.5301 64.1331)"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="77.5"
          y="45.5"
          width="187"
          height="262"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect x="94" y="89" width="153" height="22" rx="10" fill="white" />
        <rect x="94" y="131" width="153" height="22" rx="10" fill="white" />
        <rect
          opacity="0.4"
          x="94"
          y="173"
          width="103"
          height="22"
          rx="10"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_865_4587"
          x="-121"
          y="85"
          width="583"
          height="377"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_865_4587"
          />
        </filter>
        <clipPath id="clip0_865_4587">
          <rect width="345" height="208" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
