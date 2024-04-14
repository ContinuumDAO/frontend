import Logo from '@/images/logo.png'
import Image from 'next/image'

const navigation = {
  useCases: [
    {
      name: 'Token and Message Bridging',
      href: '#use-cases',
    },
    {
      name: 'Cross-Chain Liquidity Network',
      href: '#use-cases',
    },
    {
      name: 'Decentralized Identity Wallets',
      href: '#use-cases',
    },
    {
      name: 'Interoperability for Games',
      href: '#use-cases',
    },
  ],
  governance: [
    {
      name: 'Forum',
      href: 'https://forum.continuumdao.org/',
    },
    {
      name: 'Vote',
      href: 'https://snapshot.org/#/continuumdao.eth',
    },
    {
      name: 'Staking',
      href: 'https://c3staking-frontend.pages.dev/',
    },
    // {
    //   name: 'Learn More',
    //   href: 'https://docs.continuumdao.org/ContinuumDAO/Governance/Constitution',
    // },
    // {
    //   name: 'Build With Us',
    //   href: 'https://cjlxc0ssl3j.typeform.com/to/NOoKdeBc',
    // },
  ],
  contactUs: [
    {
      name: 'X',
      href: 'https://twitter.com/ContinuumDAO',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/ContinuumDAO',
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@continuumdao',
    },
    {
      name: 'Forum',
      href: 'https://forum.continuumdao.org/',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ContinuumDAO',
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/PxYFWs93',
    },
  ],
  learnMore: [
    {
      name: 'Docs',
      href: 'https://docs.continuumdao.org/',
    },
    {
      name: 'Whitepaper',
      href: 'https://continuumdao.org/assets/White_Paper_ContinuumDAO.a0c79446.pdf',
    },
  ],
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/PxYFWs93',
      icon: () => (
        <svg className='w-[31px] h-[32px]' height="1828" viewBox="-10.63 -.07077792 823.87 610.06955549" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m678.27 51.62c90.35 132.84 134.97 282.68 118.29 455.18-.07.73-.45 1.4-1.05 1.84-68.42 50.24-134.71 80.73-200.07 100.95a2.55 2.55 0 0 1 -2.81-.95c-15.1-21.01-28.82-43.16-40.84-66.42-.69-1.37-.06-3.02 1.36-3.56 21.79-8.21 42.51-18.05 62.44-29.7 1.57-.92 1.67-3.17.22-4.25-4.23-3.14-8.42-6.44-12.43-9.74-.75-.61-1.76-.73-2.61-.32-129.39 59.75-271.13 59.75-402.05 0-.85-.38-1.86-.25-2.59.35-4 3.3-8.2 6.57-12.39 9.71-1.45 1.08-1.33 3.33.25 4.25 19.93 11.43 40.65 21.49 62.41 29.74 1.41.54 2.08 2.15 1.38 3.52-11.76 23.29-25.48 45.44-40.86 66.45-.67.85-1.77 1.24-2.81.92-65.05-20.22-131.34-50.71-199.76-100.95-.57-.44-.98-1.14-1.04-1.87-13.94-149.21 14.47-300.29 118.18-455.18.25-.41.63-.73 1.07-.92 51.03-23.42 105.7-40.65 162.84-50.49 1.04-.16 2.08.32 2.62 1.24 7.06 12.5 15.13 28.53 20.59 41.63 60.23-9.2 121.4-9.2 182.89 0 5.46-12.82 13.25-29.13 20.28-41.63a2.47 2.47 0 0 1 2.62-1.24c57.17 9.87 111.84 27.1 162.83 50.49.45.19.82.51 1.04.95zm-339.04 283.7c.63-44.11-31.53-80.61-71.9-80.61-40.04 0-71.89 36.18-71.89 80.61 0 44.42 32.48 80.6 71.89 80.6 40.05 0 71.9-36.18 71.9-80.6zm265.82 0c.63-44.11-31.53-80.61-71.89-80.61-40.05 0-71.9 36.18-71.9 80.61 0 44.42 32.48 80.6 71.9 80.6 40.36 0 71.89-36.18 71.89-80.6z" fill="#fff"/></svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ContinuumDAO',
      icon: () => (
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4902 18.2144C12.8337 18.9885 12.1894 19.7481 11.5451 20.5077C9.62191 22.7758 7.69835 25.0439 5.77515 27.3124C5.60416 27.5141 5.43613 27.7182 5.26069 27.9158C5.22508 27.956 5.16277 27.9935 5.11233 27.9939C3.63349 27.9981 2.15465 27.9973 0.675808 27.9966C0.658746 27.9966 0.641684 27.9916 0.601254 27.9854C4.18838 23.7533 7.76363 19.5356 11.3418 15.3138C7.5637 10.2137 3.79261 5.12272 0 0.00306597H0.175814C3.23067 0.00306597 6.2859 0.00344869 9.34076 0.000768639C9.4487 0.000768639 9.51657 0.0325465 9.58297 0.122902C11.7061 3.02348 13.8318 5.92176 15.9571 8.82004C15.9846 8.85756 16.0135 8.89432 16.0506 8.94256C16.2479 8.71093 16.4405 8.48618 16.6318 8.25991C18.9297 5.54809 21.2279 2.83626 23.5234 0.122519C23.5969 0.0356093 23.6703 -0.000379843 23.7835 3.02049e-06C25.2067 0.00421452 26.6299 0.00268304 28.0531 0.00268304H28.2267L18.1782 11.8611C22.1136 17.2323 26.046 22.6001 30 27.9969H29.8097C26.8476 27.9969 23.8851 27.9962 20.923 28C20.795 28 20.7152 27.9648 20.6359 27.8572C18.2961 24.6943 15.9531 21.5346 13.6104 18.3744C13.5736 18.3254 13.5369 18.2768 13.4902 18.2144ZM24.5587 25.1538C24.493 25.063 24.4518 25.006 24.4107 24.9493C21.7197 21.2758 19.0287 17.6018 16.3377 13.9282C13.6241 10.224 10.9101 6.52018 8.19871 2.81444C8.1338 2.72561 8.06778 2.68924 7.95836 2.68962C7.14717 2.6946 6.33598 2.6923 5.52478 2.69269C5.48176 2.69269 5.43873 2.69728 5.37493 2.70073C5.42797 2.77309 5.46618 2.82592 5.50513 2.87838C6.3612 4.03309 7.21727 5.18781 8.07297 6.34253C12.6938 12.5763 17.314 18.8093 21.9322 25.0443C21.9919 25.1251 22.0531 25.1565 22.1514 25.1561C22.8977 25.1519 23.644 25.1538 24.3903 25.1538H24.5587Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/ContinuumDAO',
      icon: () => (
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6622 27.7539L12.1438 20.2437L25.3532 7.95756C25.9379 7.40717 25.2328 7.14086 24.4588 7.62023L8.15347 18.2552L1.10159 15.9471C-0.411982 15.5032 -0.429182 14.4202 1.44558 13.639L28.9135 2.70223C30.1691 2.11633 31.3731 3.02181 30.8915 5.01031L26.2131 27.7539C25.8863 29.3695 24.9404 29.7601 23.6332 29.0144L16.5125 23.5815L13.0898 27.0082C12.6942 27.4165 12.3674 27.7539 11.6622 27.7539Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@continuumdao',
      icon: () => (
        <svg
          width="32"
          height="19"
          viewBox="0 0 32 19"
          className="mt-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.025 0.626099C4.04065 0.626099 0 4.59929 0 9.50002C0 14.4008 4.04095 18.3739 9.025 18.3739C14.0091 18.3739 18.05 14.401 18.05 9.50002C18.05 4.599 14.0096 0.626099 9.025 0.626099ZM23.4375 1.14592C20.9452 1.14592 18.9253 4.88708 18.9253 9.50017C18.9253 14.1133 20.9456 17.8547 23.4378 17.8547C25.9301 17.8547 27.9504 14.1135 27.9504 9.50017H27.95C27.95 4.88577 25.93 1.14592 23.4376 1.14592H23.4375ZM30.4128 2.01609C29.5365 2.01609 28.826 5.36706 28.826 9.50017C28.826 13.6333 29.536 16.9843 30.4128 16.9843C31.2895 16.9843 32 13.6324 32 9.50002C32 5.36677 31.2892 2.01609 30.4129 2.01609H30.4128Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      name: 'Forum',
      href: 'https://forum.continuumdao.org/',
      icon: () => (
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29 15.5C29 22.7884 23.2242 28.7279 16 28.9909V29H15.5H2V15.5V15H2.00909C2.27211 7.7758 8.21155 2 15.5 2C22.9558 2 29 8.04416 29 15.5ZM24 15.5C24 20.089 20.3634 23.8287 15.8148 23.9943V24.0001L15.7985 23.9949C15.6994 23.9983 15.5999 24 15.5 24C14.1903 24 12.9498 23.7038 11.8419 23.1747C10.3485 23.1083 8.90608 23.3837 7 24.0001C7.60924 22.0667 7.84346 20.5891 7.71789 18.9242C7.25629 17.8766 7 16.7183 7 15.5C7 15.4009 7.0017 15.3022 7.00506 15.204L7 15.1853H7.00572C7.17127 10.6367 10.9109 7 15.5 7C20.1944 7 24 10.8056 24 15.5Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ContinuumDAO',
      icon: () => (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 0.000749941C10.695 -0.0383244 7.03036 1.45093 4.31142 4.1412C1.59248 6.83148 0.0417339 10.5027 0 14.3479C0.0146613 17.3867 0.98197 20.3427 2.76299 22.7912C4.54401 25.2397 7.0471 27.0548 9.91273 27.9757C10.6377 28.1089 10.9014 27.6693 10.9014 27.283V24.8451C6.86773 25.711 6.01091 22.9269 6.01091 22.9269C5.74239 22.0528 5.17153 21.3057 4.40273 20.8221C3.08455 19.9429 4.50818 19.9562 4.50818 19.9562C4.96381 20.0178 5.39974 20.1828 5.78327 20.4388C6.1668 20.6949 6.48798 21.0355 6.72273 21.4349C7.1318 22.1517 7.80302 22.6776 8.59192 22.8993C9.38083 23.1211 10.2243 23.0209 10.9409 22.6205C11.0146 21.891 11.3415 21.2114 11.8636 20.7022C8.64727 20.3425 5.27273 19.1169 5.27273 13.6152C5.24396 12.1801 5.76868 10.7899 6.73591 9.73869C6.29541 8.50655 6.34742 7.14943 6.88091 5.95541C6.88091 5.95541 8.10682 5.56909 10.8355 7.42076C13.2107 6.78112 15.7102 6.78112 18.0855 7.42076C20.8536 5.56909 22.04 5.95541 22.04 5.95541C22.5735 7.14943 22.6255 8.50655 22.185 9.73869C23.1747 10.7706 23.7279 12.1515 23.7273 13.5886C23.7273 19.1036 20.3264 20.3159 17.1364 20.6755C17.4857 21.0183 17.7555 21.4349 17.9264 21.8956C18.0974 22.3563 18.1652 22.8495 18.125 23.3398V27.2696C18.125 27.7359 18.3886 28.1089 19.1136 27.9623C21.9711 27.0357 24.4658 25.2202 26.2413 22.7752C28.0168 20.3301 28.9823 17.3806 29 14.3479C28.9583 10.5027 27.4075 6.83148 24.6886 4.1412C21.9696 1.45093 18.305 -0.0383244 14.5 0.000749941Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <div className="z-10   bg-right-top">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-[115rem] px-6 pb-8 xxs:pt-0 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div/>
          {/* <div className="grid grid-cols-1 xxs:pl-8 xl:pl-0">
            <div className="mt-10 xl:mt-0">
              <h3 className="text-[22px] font-extrabold leading-6 text-white">
                The Vision
              </h3>
              <p className="mt-8 text-lg leading-6 text-white/70">
                <a className="hover:underline" href="#what-we-do">
                  The Vision
                </a>
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-[22px] font-extrabold leading-6 text-white">
                Continuum Matrix
              </h3>
              <p className="mt-6 text-lg leading-6 text-white/70">
                <a className="hover:underline" href="#continuum-matrix">
                  Continuum Matrix
                </a>
              </p>
            </div>
          </div> */}
          <div className="mt-10 xxs:pl-8 md:-ml-16 md:grid md:grid-cols-3 md:pl-24 xl:col-span-2 xl:mt-0 xl:gap-20 xl:pl-0 2xl:mt-0 2xl:gap-32">
            {/* <div/> */}
            {/* <div>
              <h3 className="text-[22px] font-extrabold leading-6 text-white">
                Use Cases
              </h3>
              <ul role="list" className="mt-6 space-y-5">
                {navigation.useCases.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xl leading-6 text-white/70 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="mt-10 md:ml-16 md:mt-0 text-center">
              <h3 className="text-[22px] font-extrabold leading-6 text-white">
                Governance
              </h3>
              <ul role="list" className="mt-6 space-y-5">
                {navigation.governance.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xl leading-6 text-white/70 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:ml-24 md:mt-0 text-center">
              <h3 className="text-[22px] font-extrabold leading-6 text-white">
                Contact Us
              </h3>
              <ul role="list" className="mt-6 space-y-5">
                {navigation.contactUs.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-xl leading-6 text-white/70 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/30 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="mb-2 flex xxs:space-x-6 xs:space-x-8 sm:only:space-x-14 md:order-2 md:mb-0">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_"
                className="h-8 w-8 text-white hover:text-white/75"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="-ml-6 flex lg:-ml-0 lg:flex-1">
            <a href="#" className=" lg:-mx-8">
              <span className="sr-only">Continuum</span>
              <div className="flex flex-row items-center xxs:pl-2 md:pl-3">
                <Image
                  className="-mr-4 pt-1.5 xxs:scale-50 xs:scale-[0.6] lg:scale-[0.5]"
                  src={Logo}
                  alt="Logo"
                />
                <span className="pl-3 pt-0.5 font-semibold text-white xxs:text-3xl xs:text-4xl">
                  Continuum
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
