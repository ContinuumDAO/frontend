const useCases = [
  {
    name: 'C3Router',
    role: 'Enables cross-chain liquidity aggregation or token transfer, all under the control of the dApp. It has a simple-to-implement interface and an inexpensive gas-based fee structure.',
    StartImage: BuildOnCtmStart,
    EndImage: BuildOnCtmEnd,
  },
  {
    name: 'C3Caller',
    role: 'The purest cross-chain primitive, allowing unencrypted messages to be sent cross-chain. Fees can be charged on the source or destination chain and smart contracts can be called on the destination chain, all within one transaction.',
    StartImage: C3WalletStart,
    EndImage: C3WalletEnd,
  },
  {
    name: 'C3Wallet',
    role: 'This will be the first truly cross-chain multi-signature wallet, allowing users to sign from diverse chains.',
    StartImage: C3WalletStart,
    EndImage: C3WalletEnd,
  },
  {
    name: 'Build On CTM',
    role: 'External page with project submission application with BD guild info',
    StartImage: BuildOnCtmStart,
    EndImage: BuildOnCtmEnd,
  },
]

export function UseCases() {
  return (
    <div className="bg-[url('../images/background-graphic.gif')] py-24 sm:py-32">
      <div className="mx-auto max-w-xl px-6 text-left lg:max-w-[100rem] lg:px-8">
        <div className="mx-auto">
          <p className="pl-24 text-3xl font-bold tracking-tight text-white sm:text-5xl">
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
              <div className="group relative">
                <div className="h-56"></div>
                <div className="absolute inset-0 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                  <useCase.StartImage />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <useCase.EndImage />
                </div>
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

export function C3WalletStart() {
  return (
    <svg
      width="345"
      height="208"
      viewBox="0 0 345 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_865_4431)">
        <g clip-path="url(#clip1_865_4431)">
          <g opacity="0.4">
            <path
              d="M278.5 160C278.5 218.823 231.262 266.5 173 266.5C114.738 266.5 67.5 218.823 67.5 160C67.5 101.177 114.738 53.5 173 53.5C231.262 53.5 278.5 101.177 278.5 160Z"
              fill="#010101"
              stroke="white"
            />
            <circle cx="171" cy="157" r="103.5" stroke="white" />
            <path
              d="M176.464 117.243L207.421 134.134L176.464 73V117.243ZM172.686 73L141.729 134.134L172.686 117.243V73ZM176.464 160.695L207.179 138.945L176.464 122.185V160.695ZM172.686 122.185L141.971 138.945L172.686 160.695V122.185ZM172.686 200.205V168.354L140 145.634L172.686 200.205ZM176.464 200.205L209.15 145.634L176.464 168.354V200.205Z"
              fill="white"
            />
          </g>
        </g>
        <g opacity="0.4" filter="url(#filter0_f_865_4431)">
          <ellipse cx="170.5" cy="313.5" rx="191.5" ry="88.5" fill="white" />
        </g>
        <rect
          x="26.5"
          y="123.5"
          width="292"
          height="167"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="26.5"
          y="123.5"
          width="292"
          height="167"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="26.5"
          y="123.5"
          width="292"
          height="167"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_865_4431"
          x="-121"
          y="125"
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
            result="effect1_foregroundBlur_865_4431"
          />
        </filter>
        <clipPath id="clip0_865_4431">
          <rect width="345" height="208" fill="white" />
        </clipPath>
        <clipPath id="clip1_865_4431">
          <rect
            width="212"
            height="116"
            fill="white"
            transform="translate(67 53)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function C3WalletEnd() {
  return (
    <svg
      width="345"
      height="208"
      viewBox="0 0 345 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_865_4473)">
        <g clip-path="url(#clip1_865_4473)">
          <path
            d="M278.5 114C278.5 172.823 231.262 220.5 173 220.5C114.738 220.5 67.5 172.823 67.5 114C67.5 55.1772 114.738 7.5 173 7.5C231.262 7.5 278.5 55.1772 278.5 114Z"
            fill="#010101"
            stroke="white"
          />
          <circle cx="171" cy="111" r="103.5" stroke="white" />
          <path
            d="M176.464 71.2426L207.421 88.1341L176.464 27V71.2426ZM172.686 27L141.729 88.1341L172.686 71.2426V27ZM176.464 114.695L207.179 92.9447L176.464 76.1849V114.695ZM172.686 76.1849L141.971 92.9447L172.686 114.695V76.1849ZM172.686 154.205V122.354L140 99.6344L172.686 154.205ZM176.464 154.205L209.15 99.6344L176.464 122.354V154.205Z"
            fill="white"
          />
          <g clip-path="url(#clip2_865_4473)">
            <g opacity="0.4" filter="url(#filter0_f_865_4473)">
              <ellipse cx="151" cy="177" rx="98" ry="63" fill="white" />
            </g>
          </g>
        </g>
        <path
          d="M26.5 132.135C26.5 127.221 30.2485 123.117 35.1432 122.674L274.643 100.985C280.205 100.482 285 104.862 285 110.447V258.365C285 263.279 281.251 267.383 276.357 267.826L36.8568 289.515C31.2946 290.018 26.5 285.638 26.5 280.053V132.135Z"
          fill="#010101"
          stroke="#676767"
        />
        <path
          d="M26.5 132.542C26.5 127.469 30.4871 123.29 35.5554 123.053L293.055 110.99C298.471 110.736 303 115.058 303 120.479V268.458C303 273.531 299.013 277.71 293.945 277.947L36.4445 290.01C31.0292 290.264 26.5 285.942 26.5 280.521V132.542Z"
          fill="#010101"
          stroke="#676767"
        />
        <rect
          x="26.5"
          y="123.5"
          width="292"
          height="167"
          rx="9.5"
          fill="#010101"
          stroke="#676767"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_865_4473"
          x="-47"
          y="14"
          width="396"
          height="326"
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
            result="effect1_foregroundBlur_865_4473"
          />
        </filter>
        <clipPath id="clip0_865_4473">
          <rect width="345" height="208" fill="white" />
        </clipPath>
        <clipPath id="clip1_865_4473">
          <rect
            width="212"
            height="116"
            fill="white"
            transform="translate(67 7)"
          />
        </clipPath>
        <clipPath id="clip2_865_4473">
          <rect
            width="200"
            height="200"
            fill="white"
            transform="translate(75 14)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
