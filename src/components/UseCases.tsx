'use client'

import C3RouterUseCaseGraphic from '../images/c3-router-usecase.gif'
import Image from 'next/image'

const useCases = [
  {
    name: 'C3Router',
    role: 'Enables cross-chain liquidity aggregation or token transfer, all under the control of the dApp. It has a simple-to-implement interface and an inexpensive gas-based fee structure.',
    StartImage: C3RouterStart,
    EndImage: C3RouterEnd,
  },
  {
    name: 'C3Caller',
    role: 'The purest cross-chain primitive, allowing unencrypted messages to be sent cross-chain. Fees can be charged on the source or destination chain and smart contracts can be called on the destination chain, all within one transaction.',
    StartImage: C3CallerStart,
    EndImage: C3CallerEnd,
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
      <div className="mx-auto max-w-xl pl-32 text-left lg:max-w-[100rem]">
        <div className=" mx-auto">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Use Cases
          </p>
        </div>
        <ul className="webkit-center mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:grid-cols-2 xl:max-w-7xl xl:grid-cols-4">
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
      <style jsx>{`
        .webkit-center {
          // -webkit-align-items: center;
        }
      `}</style>
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

export function C3RouterStart() {
  return (
    <svg
      width="422"
      height="254"
      viewBox="0 0 422 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-ml-14 -mt-12 scale-[0.85]"
    >
      <circle cx="298" cy="99" r="28.5" stroke="#676767" />
      <circle cx="298" cy="97" r="28.5" fill="#010101" stroke="#676767" />
      <g clip-path="url(#clip0_112_33)">
        <path
          d="M296.009 104.386L283.964 97.343L296.009 77.7034V104.386Z"
          fill="#676767"
        />
        <path
          d="M296.009 115.628L284.241 99.1038L296.009 106.011V115.628Z"
          fill="#676767"
        />
        <path
          d="M296.425 104.386L308.47 97.343L296.425 77.7034V104.386Z"
          fill="#676767"
        />
        <path
          d="M296.563 115.628L308.471 99.1038L296.563 106.011V115.628Z"
          fill="#676767"
        />
      </g>
      <path
        opacity="0.4"
        d="M191.99 87.2104L216.935 87.24L216.944 79.0297L229.966 93.3786L191.983 93.3334L191.99 87.2104Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M229.99 106.811L205.046 106.781L205.056 98.3656L191.999 113.042L229.983 113.087L229.99 106.811Z"
        fill="white"
      />
      <circle cx="120.5" cy="99.5" r="31" stroke="#676767" />
      <circle cx="120.5" cy="97.5" r="31" fill="#010101" stroke="#676767" />
      <g clip-path="url(#clip1_112_33)">
        <path
          d="M115.226 109.527L112.093 107.915L110.082 111.822L106.166 109.807L108.177 105.9L107.155 105.374L107.159 105.365L103.482 103.473L105.497 99.557L109.175 101.449L118.203 83.9058L114.526 82.0135L116.541 78.0976L121.24 80.5159L123.255 76.5999L127.171 78.6152L125.156 82.5311L128.289 84.1433L130.304 80.2273L134.22 82.2426L132.205 86.1585L131.265 85.6749C136.033 88.1286 137.765 92.1126 135.764 96.0003C134.334 98.7799 131.063 100.034 128.163 99.0528L128.091 99.1938C131.403 101.232 132.642 105.051 130.913 108.411C128.688 112.734 124.122 113.875 118.919 111.417L119.146 111.534L117.131 115.45L113.215 113.435L115.226 109.527ZM123.494 86.6824L120.099 93.2792L123.917 95.2437C126.749 96.7011 129.01 96.2846 130.114 94.1386C131.164 92.0977 130.336 90.2034 127.857 88.9274L123.494 86.6824ZM114.505 104.15L119.079 106.504C122.14 108.079 124.463 107.628 125.712 105.201C126.934 102.825 125.879 100.681 122.748 99.0694L118.299 96.7797L114.506 104.15L114.505 104.15Z"
          fill="#676767"
        />
      </g>
      <circle cx="43.5" cy="88.5" r="83.5" fill="#010101" />
      <path
        d="M57.2573 121.327V135.59L45.0068 142.72L32.7532 135.59V121.324L45.0068 128.454L57.2572 121.324L57.2573 121.327ZM99.2802 72.5022V111.118L65.9524 130.426V116.16L87.0198 103.985V79.639L99.2802 72.5058V72.5022ZM-9.27634 72.5057L2.97059 79.6388V103.985L24.0413 116.16V130.426L-9.27303 111.118L-9.27979 72.5125L-9.27634 72.5057ZM66.0676 53.1977L78.3281 60.3274V74.5939L57.2539 86.7686V111.118L45.0002 118.255L32.7465 111.121V86.7721L11.6724 74.5971V60.3308L23.926 53.2012L44.9935 65.3759L66.0676 53.2012V53.1977ZM78.3281 84.6837V98.9434L66.0744 106.073V91.8102L78.3281 84.6839V84.6837ZM11.6724 84.6804L23.926 91.8102V106.073L23.9158 106.07L11.6724 98.9434V84.6804ZM87.0265 41.0263L99.2802 48.1561V62.4225L87.0265 69.5522V55.2892H87.0231L74.7762 48.1561L87.0265 41.023V41.0263ZM2.9739 41.0263L15.2243 48.1596L2.9739 55.2927V69.5556L-9.27979 62.4293V48.1629L2.9739 41.0298V41.0263ZM44.9935 41.0263L57.2471 48.1596L44.9935 55.2927V55.2859L32.7431 48.1596L44.9935 41.0263ZM45.0002 16.6802L78.3281 35.9847L66.0744 43.111L44.9935 30.9398L23.926 43.111L11.6724 35.9847L45.0002 16.6802Z"
        fill="#676767"
      />
      <circle cx="374.5" cy="86.5" r="78.5" fill="#010101" />
      <path
        d="M374.766 20.0195C376.741 20.0759 378.668 20.6563 380.337 21.6962C383.964 23.7438 387.568 25.8316 391.179 27.9034L401.376 33.7478C407.607 37.326 413.841 40.8972 420.079 44.4613C421.449 45.2432 422.819 46.0252 424.174 46.8152C425.669 47.6603 426.954 48.8309 427.935 50.2403C428.916 51.6497 429.567 53.2618 429.841 54.9571C429.905 55.4407 429.921 55.9325 429.905 56.4242V107.605C429.914 109.227 429.563 110.83 428.877 112.299C428.191 113.769 427.188 115.067 425.939 116.102C425.228 116.645 424.464 117.115 423.658 117.505C414.075 123.051 404.482 128.582 394.879 134.095C390.123 136.835 385.375 139.592 380.635 142.357C379.452 143.149 378.123 143.694 376.725 143.962C374.847 144.324 372.92 144.195 371.122 143.599L370.985 143.551C370.262 143.314 369.565 143.004 368.906 142.623L357.16 135.86C354.961 134.599 352.763 133.336 350.566 132.071L335.758 123.534C335.943 123.575 336.072 123.486 336.185 123.268L336.427 122.865L363.601 78.1977L376.419 57.1175C376.507 56.8915 376.662 56.6981 376.864 56.5639C377.066 56.4297 377.305 56.3612 377.547 56.3678C383.198 56.3678 388.857 56.3355 394.508 56.3194C394.621 56.3194 394.75 56.2791 394.871 56.4806C394.71 56.7547 394.549 57.0772 394.363 57.3835L354.669 124.494C354.452 124.754 354.302 125.064 354.234 125.397V125.405L355.822 126.211C356.346 126.501 356.87 126.807 357.37 127.13C362.484 130.042 367.589 132.968 372.686 135.908C373.275 136.277 373.957 136.47 374.651 136.463C375.346 136.456 376.024 136.249 376.604 135.868C381.441 133.039 386.31 130.249 391.163 127.444L391.888 127.049L391.904 127.033L391.84 126.751C391.772 126.554 391.665 126.373 391.526 126.219L382.626 112.273C380.187 108.458 377.742 104.648 375.29 100.842C375.124 100.646 375.027 100.401 375.014 100.145C375.001 99.8883 375.072 99.6347 375.218 99.4231C378.499 93.9172 381.763 88.4033 385.02 82.8894C385.101 82.7604 385.157 82.6073 385.343 82.5669C385.617 82.6314 385.681 82.8894 385.802 83.0909L403.537 110.918L407.31 116.844C407.471 117.182 407.697 117.48 407.971 117.73L407.946 117.738L412.251 115.263V115.239L411.123 113.28C410.333 111.991 409.502 110.709 408.704 109.411C402.478 99.3566 396.244 89.3069 390.002 79.2618C389.623 78.6653 389.276 78.0365 388.865 77.4722C388.728 77.3083 388.653 77.1014 388.653 76.8878C388.653 76.6741 388.728 76.4672 388.865 76.3033C390.357 73.8205 391.816 71.3295 393.299 68.8305L397.386 61.9139C397.459 61.7493 397.588 61.6153 397.749 61.5351L399.893 64.8402L412.815 84.8725L421.57 98.4719C421.731 98.8024 421.949 99.1006 422.215 99.3425C422.239 99.02 422.255 98.6814 422.255 98.3429L422.271 57.2384C422.32 56.4072 422.123 55.58 421.706 54.8592C421.289 54.1385 420.67 53.5559 419.925 53.1836C405.485 44.9339 391.055 36.6658 376.636 28.379C375.986 27.9578 375.228 27.733 374.453 27.7316C373.678 27.7302 372.919 27.9522 372.267 28.371C357.811 36.7077 343.357 45.0485 328.906 53.3932C328.218 53.7476 327.648 54.2929 327.264 54.9636C326.879 55.6343 326.696 56.4018 326.737 57.1739C326.761 70.3138 326.777 83.4618 326.785 96.6016C326.785 96.8838 326.673 97.2062 326.906 97.4642C327.037 97.2948 327.161 97.12 327.277 96.9402C334.694 85.5335 342.094 74.1107 349.462 62.6636C350.937 60.3259 353.146 58.5524 355.742 57.585C358.594 56.5515 361.617 56.0674 364.649 56.1582C366.81 56.1743 368.97 56.271 371.131 56.3355C371.268 56.3355 371.445 56.271 371.534 56.5371L331.219 120.931L324.625 117.126C323.287 116.354 322.125 115.311 321.215 114.062L320.578 113.095C319.893 111.914 319.434 110.615 319.224 109.266L319.159 109.379C319.135 108.96 319.119 108.734 319.119 108.508L319.103 107.887V107.597L319.071 56.6257C319.071 55.868 319.151 55.1183 319.305 54.3847C319.587 52.8422 320.212 51.3825 321.132 50.113C322.053 48.8436 323.246 47.7966 324.625 47.0489C330.22 43.7438 335.895 40.5515 341.53 37.2948C346.286 34.554 351.026 31.7889 355.782 29.04C360.216 26.4685 364.601 23.8325 369.107 21.406C370.832 20.4467 372.791 19.9711 374.766 20.0195Z"
        fill="#676767"
      />
      <g clip-path="url(#clip2_112_33)">
        <path
          d="M373.982 163.615C373.581 163.617 373.187 163.653 372.799 163.708L372.799 163.709C372.355 163.72 371.914 163.896 371.577 164.238C370.885 164.939 370.892 166.067 371.593 166.759C371.903 167.066 372.297 167.235 372.7 167.267C372.7 167.267 372.7 167.267 372.7 167.267C372.893 167.283 373.089 167.268 373.278 167.221C373.495 167.198 373.708 167.177 373.926 167.175L374.134 167.174C376.746 167.156 378.621 169.783 378.637 172.396L378.706 183.546C378.72 186.158 376.61 188.296 373.998 188.314L373.788 188.315C371.175 188.332 369.036 186.219 369.022 183.609L368.992 178.683C369.054 178.116 368.866 177.527 368.428 177.095C367.667 176.343 366.441 176.351 365.69 177.112C365.406 177.399 365.231 177.752 365.163 178.122C365.161 178.121 365.159 178.12 365.157 178.119L365.155 178.17C365.129 178.337 365.124 178.507 365.142 178.674L365.008 183.631C365.04 188.445 369.003 192.359 373.814 192.327L374.022 192.325C378.833 192.294 382.745 188.332 382.717 183.521L382.645 172.371C382.611 167.562 378.994 163.585 374.187 163.613L373.982 163.615Z"
          fill="#5D5D5D"
        />
        <path
          d="M373.738 147.404L373.53 147.405C368.718 147.436 364.806 151.397 364.836 156.21L364.908 167.36C364.938 172.172 368.303 175.759 373.117 175.73L373.32 175.727C373.539 175.726 373.755 175.714 373.97 175.696C374.147 175.705 374.326 175.685 374.498 175.638C374.5 175.638 374.501 175.638 374.503 175.637L374.503 175.637C374.777 175.561 375.036 175.415 375.25 175.198C375.904 174.536 375.897 173.47 375.235 172.817C375.049 172.633 374.83 172.501 374.597 172.422C374.085 172.229 373.576 172.312 373.168 172.314L372.965 172.317C370.352 172.334 368.935 169.948 368.919 167.335L368.852 156.183C368.832 153.573 370.944 151.434 373.557 151.418L373.763 151.415C376.377 151.399 378.517 153.512 378.532 156.124L378.564 161.036C378.481 161.618 378.666 162.23 379.116 162.675C379.871 163.421 381.087 163.413 381.832 162.658C382.092 162.395 382.26 162.077 382.337 161.742C382.341 161.743 382.345 161.744 382.35 161.745L382.352 161.671C382.39 161.475 382.396 161.275 382.372 161.077L382.541 156.1C382.512 151.286 378.551 147.374 373.738 147.404Z"
          fill="#5D5D5D"
        />
      </g>
      <path
        d="M373.982 -15.9473C373.581 -15.9447 373.187 -15.9092 372.799 -15.8541L372.799 -15.8533C372.355 -15.8418 371.914 -15.6656 371.577 -15.3242C370.885 -14.6235 370.892 -13.4946 371.593 -12.8027C371.903 -12.4965 372.297 -12.3275 372.7 -12.2946C372.7 -12.2946 372.7 -12.2946 372.7 -12.2946C372.893 -12.2788 373.089 -12.2943 373.278 -12.3415C373.495 -12.3637 373.708 -12.3852 373.926 -12.3866L374.134 -12.3878C376.746 -12.4059 378.621 -9.779 378.637 -7.16563L378.706 3.9844C378.72 6.5961 376.61 8.73373 373.998 8.7518L373.788 8.75305C371.175 8.76957 369.036 6.65707 369.022 4.04683L368.992 -0.879071C369.054 -1.44641 368.866 -2.03534 368.428 -2.46742C367.667 -3.21894 366.441 -3.21124 365.69 -2.45021C365.406 -2.16303 365.231 -1.80964 365.163 -1.44049C365.161 -1.44124 365.159 -1.44189 365.157 -1.44264L365.155 -1.3918C365.129 -1.22496 365.124 -1.05549 365.142 -0.887715L365.008 4.06872C365.04 8.88309 369.003 12.7967 373.814 12.7648L374.022 12.7634C378.833 12.7316 382.745 8.77019 382.717 3.95911L382.645 -7.1909C382.611 -12.0001 378.994 -15.9772 374.187 -15.9487L373.982 -15.9473Z"
        fill="#5D5D5D"
      />
      <path
        d="M44.2382 162.615C43.8373 162.617 43.4432 162.653 43.0558 162.708L43.0558 162.709C42.6113 162.72 42.1704 162.896 41.8332 163.238C41.1413 163.939 41.1484 165.067 41.8491 165.759C42.1591 166.066 42.5531 166.235 42.9559 166.267C42.956 166.267 42.9561 166.267 42.9562 166.267C43.1497 166.283 43.3452 166.268 43.5345 166.221C43.7513 166.198 43.9644 166.177 44.1826 166.175L44.3905 166.174C47.0022 166.156 48.8772 168.783 48.8936 171.396L48.962 182.546C48.9768 185.158 46.8659 187.296 44.2541 187.314L44.0445 187.315C41.4312 187.332 39.292 185.219 39.2788 182.609L39.2487 177.683C39.3103 177.116 39.1223 176.527 38.6848 176.095C37.9238 175.343 36.6976 175.351 35.9461 176.112C35.6625 176.399 35.4872 176.752 35.4195 177.122C35.4173 177.121 35.4152 177.12 35.413 177.119L35.4116 177.17C35.3854 177.337 35.3805 177.507 35.398 177.674L35.2646 182.631C35.2965 187.445 39.2596 191.359 44.0706 191.327L44.2785 191.325C49.0895 191.294 53.0014 187.332 52.9729 182.521L52.9012 171.371C52.8678 166.562 49.2506 162.585 44.4429 162.613L44.2382 162.615Z"
        fill="#5D5D5D"
      />
      <path
        d="M43.9946 146.404L43.7868 146.405C38.9741 146.436 35.0621 150.397 35.0924 155.21L35.164 166.36C35.1943 171.172 38.5593 174.759 43.3736 174.73L43.5766 174.727C43.7951 174.726 44.0115 174.714 44.226 174.696C44.4035 174.705 44.582 174.685 44.7545 174.638C44.756 174.638 44.7575 174.638 44.759 174.637L44.7591 174.637C45.0334 174.561 45.2923 174.415 45.5066 174.198C46.1599 173.536 46.1531 172.47 45.4917 171.817C45.305 171.633 45.0861 171.501 44.8532 171.422C44.3414 171.229 43.8322 171.312 43.4247 171.314L43.2218 171.317C40.6085 171.334 39.1913 168.948 39.1749 166.335L39.1081 155.183C39.0884 152.573 41.2001 150.434 43.8135 150.418L44.0198 150.415C46.6332 150.399 48.7732 152.512 48.788 155.124L48.8205 160.036C48.7376 160.618 48.9219 161.23 49.3722 161.675C50.1271 162.421 51.3434 162.413 52.0888 161.658C52.3483 161.395 52.5162 161.077 52.5935 160.742C52.5977 160.743 52.6016 160.744 52.6059 160.745L52.6083 160.671C52.6459 160.475 52.6524 160.275 52.6285 160.077L52.7972 155.1C52.7688 150.286 48.8073 146.374 43.9946 146.404Z"
        fill="#5D5D5D"
      />
      <path
        d="M44.2382 -15.9473C43.8373 -15.9447 43.4432 -15.9092 43.0558 -15.8541L43.0558 -15.8533C42.6113 -15.8418 42.1704 -15.6656 41.8332 -15.3242C41.1413 -14.6235 41.1484 -13.4946 41.8491 -12.8027C42.1591 -12.4965 42.5531 -12.3275 42.9559 -12.2946C42.956 -12.2946 42.9561 -12.2946 42.9562 -12.2946C43.1497 -12.2788 43.3452 -12.2943 43.5345 -12.3415C43.7513 -12.3637 43.9644 -12.3852 44.1826 -12.3866L44.3905 -12.3878C47.0022 -12.4059 48.8772 -9.779 48.8936 -7.16563L48.962 3.9844C48.9768 6.5961 46.8659 8.73373 44.2541 8.7518L44.0445 8.75305C41.4312 8.76957 39.292 6.65707 39.2788 4.04683L39.2487 -0.879071C39.3103 -1.44641 39.1223 -2.03534 38.6848 -2.46742C37.9238 -3.21894 36.6976 -3.21124 35.9461 -2.45021C35.6625 -2.16303 35.4872 -1.80964 35.4195 -1.44049C35.4173 -1.44124 35.4152 -1.44189 35.413 -1.44264L35.4116 -1.3918C35.3854 -1.22496 35.3805 -1.05549 35.398 -0.887715L35.2646 4.06872C35.2965 8.88309 39.2596 12.7967 44.0706 12.7648L44.2785 12.7634C49.0895 12.7316 53.0014 8.77019 52.9729 3.95911L52.9012 -7.1909C52.8678 -12.0001 49.2506 -15.9772 44.4429 -15.9487L44.2382 -15.9473Z"
        fill="#5D5D5D"
      />
      <path
        d="M373.982 214.052C373.581 214.055 373.187 214.09 372.799 214.145L372.799 214.146C372.355 214.158 371.914 214.334 371.577 214.675C370.885 215.376 370.892 216.505 371.593 217.197C371.903 217.503 372.297 217.672 372.7 217.705C372.7 217.705 372.7 217.705 372.7 217.705C372.893 217.721 373.089 217.705 373.278 217.658C373.495 217.636 373.708 217.614 373.926 217.613L374.134 217.612C376.746 217.594 378.621 220.221 378.637 222.834L378.706 233.984C378.72 236.596 376.61 238.733 373.998 238.751L373.788 238.753C371.175 238.769 369.036 236.657 369.022 234.046L368.992 229.12C369.054 228.553 368.866 227.964 368.428 227.532C367.667 226.781 366.441 226.788 365.69 227.549C365.406 227.836 365.231 228.19 365.163 228.559C365.161 228.558 365.159 228.558 365.157 228.557L365.155 228.608C365.129 228.775 365.124 228.944 365.142 229.112L365.008 234.068C365.04 238.883 369.003 242.796 373.814 242.764L374.022 242.763C378.833 242.731 382.745 238.77 382.717 233.959L382.645 222.809C382.611 217.999 378.994 214.022 374.187 214.051L373.982 214.052Z"
        fill="#5D5D5D"
      />
      <path
        d="M373.738 197.842L373.53 197.843C368.718 197.873 364.806 201.835 364.836 206.647L364.908 217.797C364.938 222.61 368.303 226.196 373.117 226.168L373.32 226.165C373.539 226.163 373.755 226.152 373.97 226.133C374.147 226.142 374.326 226.123 374.498 226.075C374.5 226.075 374.501 226.075 374.503 226.075L374.503 226.074C374.777 225.998 375.036 225.852 375.25 225.635C375.904 224.974 375.897 223.908 375.235 223.255C375.049 223.07 374.83 222.939 374.597 222.859C374.085 222.667 373.576 222.749 373.168 222.752L372.965 222.755C370.352 222.771 368.935 220.385 368.919 217.772L368.852 206.62C368.832 204.01 370.944 201.872 373.557 201.856L373.763 201.853C376.377 201.836 378.517 203.949 378.532 206.561L378.564 211.473C378.481 212.055 378.666 212.668 379.116 213.113C379.871 213.858 381.087 213.851 381.832 213.096C382.092 212.833 382.26 212.514 382.337 212.179C382.341 212.18 382.345 212.181 382.35 212.182L382.352 212.109C382.39 211.913 382.396 211.712 382.372 211.514L382.541 206.538C382.512 201.723 378.551 197.811 373.738 197.842Z"
        fill="#5D5D5D"
      />
      <path
        d="M45.2382 214.052C44.8373 214.055 44.4432 214.09 44.0558 214.145L44.0558 214.146C43.6113 214.158 43.1704 214.334 42.8332 214.675C42.1413 215.376 42.1484 216.505 42.8491 217.197C43.1591 217.503 43.5531 217.672 43.9559 217.705C43.956 217.705 43.9561 217.705 43.9562 217.705C44.1497 217.721 44.3452 217.705 44.5345 217.658C44.7513 217.636 44.9644 217.614 45.1826 217.613L45.3905 217.612C48.0022 217.594 49.8772 220.221 49.8936 222.834L49.962 233.984C49.9768 236.596 47.8659 238.733 45.2541 238.751L45.0445 238.753C42.4312 238.769 40.292 236.657 40.2788 234.046L40.2487 229.12C40.3103 228.553 40.1223 227.964 39.6848 227.532C38.9238 226.781 37.6976 226.788 36.9461 227.549C36.6625 227.836 36.4872 228.19 36.4195 228.559C36.4173 228.558 36.4152 228.558 36.413 228.557L36.4116 228.608C36.3854 228.775 36.3805 228.944 36.398 229.112L36.2646 234.068C36.2965 238.883 40.2596 242.796 45.0706 242.764L45.2785 242.763C50.0895 242.731 54.0014 238.77 53.9729 233.959L53.9012 222.809C53.8678 217.999 50.2506 214.022 45.4429 214.051L45.2382 214.052Z"
        fill="#5D5D5D"
      />
      <path
        d="M44.9946 197.842L44.7868 197.843C39.9741 197.873 36.0621 201.835 36.0924 206.647L36.164 217.797C36.1943 222.61 39.5593 226.196 44.3736 226.168L44.5766 226.165C44.7951 226.163 45.0115 226.152 45.226 226.133C45.4035 226.142 45.582 226.123 45.7545 226.075C45.756 226.075 45.7575 226.075 45.759 226.075L45.7591 226.074C46.0334 225.998 46.2923 225.852 46.5066 225.635C47.1599 224.974 47.1531 223.908 46.4917 223.255C46.305 223.07 46.0861 222.939 45.8532 222.859C45.3414 222.667 44.8322 222.749 44.4247 222.752L44.2218 222.755C41.6085 222.771 40.1913 220.385 40.1749 217.772L40.1081 206.62C40.0884 204.01 42.2001 201.872 44.8135 201.856L45.0198 201.853C47.6332 201.836 49.7732 203.949 49.788 206.561L49.8205 211.473C49.7376 212.055 49.9219 212.668 50.3722 213.113C51.1271 213.858 52.3434 213.851 53.0888 213.096C53.3483 212.833 53.5162 212.514 53.5935 212.179C53.5977 212.18 53.6016 212.181 53.6059 212.182L53.6083 212.109C53.6459 211.913 53.6524 211.712 53.6285 211.514L53.7972 206.538C53.7688 201.723 49.8073 197.811 44.9946 197.842Z"
        fill="#5D5D5D"
      />
      <defs>
        <clipPath id="clip0_112_33">
          <rect
            width="46"
            height="45"
            fill="white"
            transform="translate(269 74)"
          />
        </clipPath>
        <clipPath id="clip1_112_33">
          <rect
            width="40.7854"
            height="45.4018"
            fill="white"
            transform="translate(101.467 74.1816)"
          />
        </clipPath>
        <clipPath id="clip2_112_33">
          <rect
            width="46.9793"
            height="46.9793"
            fill="white"
            transform="translate(340.744 169.99) rotate(-45.3599)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function C3RouterEnd() {
  return (
    <Image
      className="-mt-2 scale-[1.15]"
      src={C3RouterUseCaseGraphic}
      alt="Network Graphic"
    />
  )
}

export function C3CallerStart() {
  return <Image className="-mt-2 scale-[1.15]" src="" alt="Network Graphic" />
}

export function C3CallerEnd() {
  return <Image className="-mt-2 scale-[1.15]" src="" alt="Network Graphic" />
}
