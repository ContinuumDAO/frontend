const useCases = [
  {
    name: 'C3Router',
    role: 'Enables cross-chain liquidity aggregation or token transfer, all under the control of the dApp. It has a simple-to-implement interface and an inexpensive gas-based fee structure.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'C3Caller',
    role: 'The purest cross-chain primitive, allowing unencrypted messages to be sent cross-chain. Fees can be charged on the source or destination chain and smart contracts can be called on the destination chain, all within one transaction.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'C3Wallet',
    role: 'This will be the first truly cross-chain multi-signature wallet, allowing users to sign from diverse chains.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Build On CTM',
    role: 'External page with project submission application with BD guild info',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

export function UseCases() {
  return (
    <div className="bg-[url('../images/background-graphic.gif')] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
        <div className="mx-auto">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Use Cases
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 pl-24 sm:grid-cols-2 lg:mx-0 lg:max-w-5xl lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <li
              key={useCase.name}
              style={{ zIndex: useCases.length - index }}
              className="group z-0 -mr-24  border border-white bg-black px-8 py-10 hover:!z-10"
            >
              <div
                className={`${
                  useCases.length - index < useCases.length ? 'text-right' : ''
                }`}
              >
                <svg
                  width="345"
                  height="208"
                  viewBox="0 0 345 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_867_2890)">
                    <g opacity="0.4" filter="url(#filter0_f_867_2890)">
                      <ellipse
                        cx="170.5"
                        cy="273.5"
                        rx="191.5"
                        ry="88.5"
                        fill="white"
                      />
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
                    <rect
                      x="94"
                      y="89"
                      width="153"
                      height="22"
                      rx="10"
                      fill="white"
                    />
                    <rect
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
                      id="filter0_f_867_2890"
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
                        result="effect1_foregroundBlur_867_2890"
                      />
                    </filter>
                    <clipPath id="clip0_867_2890">
                      <rect width="345" height="208" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="mt-6 pb-4 text-2xl font-medium leading-7 tracking-tight text-white group-hover:text-left">
                  {useCase.name}
                </h3>
                <p className="text-xl font-light leading-7 text-white/70 group-hover:text-left">
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
