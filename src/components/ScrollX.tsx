import Image from 'next/image'

const partners = [
  {
    name: 'Arbitrum',
    img: require('@/images/partner/1..png'),
  },
  {
    name: 'Areon Network',
    img: require('@/images/partner/2..png'),
  },
  {
    name: 'Avalanche',
    img: require('@/images/partner/3..png'),
  },
  {
    name: 'Berachain',
    img: require('@/images/partner/4..png'),
  },
  {
    name: 'Bitlayer',
    img: require('@/images/partner/5..png'),
  },
  {
    name: 'Blast',
    img: require('@/images/partner/6..png'),
  },
  {
    name: 'BNB',
    img: require('@/images/partner/7..png'),
  },
  {
    name: 'Core DAO',
    img: require('@/images/partner/8..png'),
  },
  {
    name: 'CrossFi',
    img: require('@/images/partner/9..png'),
  },

  {
    name: 'Fantom',
    img: require('@/images/partner/10..png'),
  },
  {
    name: 'Humanode',
    img: require('@/images/partner/11..png'),
  },
  {
    name: 'Linea',
    img: require('@/images/partner/12..png'),
  },
  {
    name: 'LUKSO',
    img: require('@/images/partner/13..png'),
  },
  {
    name: 'Manta Network',
    img: require('@/images/partner/14..png'),
  },
  {
    name: 'Numa Chain',
    img: require('@/images/partner/15..png'),
  },
  {
    name: 'RARI Chain',
    img: require('@/images/partner/16..png'),
  },
  {
    name: 'Taiko',
    img: require('@/images/partner/17..png'),
  },
  {
    name: 'UniLend',
    img: require('@/images/partner/18..png'),
  },
  {
    name: 'Vanar',
    img: require('@/images/partner/19..png'),
  },
]
export const ScrollX = () => {
  return (
    <>
    <style>

{
    `
    @keyframes ani {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(calc(${-1 * partners?.length * 200}px + 16px), 0, 0);
        }
    }    


    .scroll-parent{
        animation: ani linear 30s infinite;
    }
    .scroll-item{
        min-width: 200px;
        width: 200px;
    }
    `
}

    </style>
    <div className='w-screen overflow-hidden'>
    <div className="flex items-center scroll-parent mb-10 w-screen">
      {[...partners, ...partners]?.map((i: any, index: number) => {
        return (
          <div></div>
          // <div key={index} className="scroll-item relative flex h-[166px] items-center">
          //   <div className="absolute flex h-full w-full items-center">
          //     <div
          //       className="flex h-full w-full flex-col items-center gap-4"
          //     >
          //       <div className="h-16 w-16 flex items-center justify-center">
          //         <Image
          //           width={36}
          //           height={36}
          //           // className=" -mb-1.5 -ml-5 scale-50 pt-1.5 w-[76px]"
          //           src={i.img}
          //           alt="Logo"
          //         />
          //       </div>
          //       <div className="font-semibold text-[#fff] text-center">{i.name}</div>
          //     </div>
          //   </div>
          // </div>
        )
      })}
    </div>
    </div>
    
    </>
  )
}

export default ScrollX
