import Image from 'next/image'

const parterners = [
  {
    name: 'Arbtrum',
    img: require('@/images/parterner/1..png'),
  },
  {
    name: 'Areon',
    img: require('@/images/parterner/2..png'),
  },
  {
    name: 'Avalanche',
    img: require('@/images/parterner/3..png'),
  },
  {
    name: 'Berachain',
    img: require('@/images/parterner/4..png'),
  },
  {
    name: 'Bitlayer',
    img: require('@/images/parterner/5..png'),
  },
  {
    name: 'Blast',
    img: require('@/images/parterner/6..png'),
  },
  {
    name: 'BNB',
    img: require('@/images/parterner/7..png'),
  },
  {
    name: 'Core DAO',
    img: require('@/images/parterner/8..png'),
  },
  {
    name: 'Crossfi',
    img: require('@/images/parterner/9..png'),
  },

  {
    name: 'Fantom',
    img: require('@/images/parterner/10..png'),
  },
  {
    name: 'Humanode',
    img: require('@/images/parterner/11..png'),
  },
  {
    name: 'Linea',
    img: require('@/images/parterner/12..png'),
  },
  {
    name: 'LUKSO',
    img: require('@/images/parterner/13..png'),
  },
  {
    name: 'Manta Network',
    img: require('@/images/parterner/14..png'),
  },
  {
    name: 'Numa Chain',
    img: require('@/images/parterner/15..png'),
  },
  {
    name: 'RARI Chain',
    img: require('@/images/parterner/16..png'),
  },
  {
    name: 'Taiko',
    img: require('@/images/parterner/17..png'),
  },
  {
    name: 'UniLend',
    img: require('@/images/parterner/18..png'),
  },
  {
    name: 'Vanar',
    img: require('@/images/parterner/19..png'),
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
            transform: translate3d(calc(${-1 * parterners?.length * 200}px + 16px), 0, 0);
        }
    }    


    .scroll-parent{
        animation: ani linear 40s infinite;
    }
    .scroll-item{
        min-width: 200px;
        width: 200px;
    }
    `
}

    </style>
    <div className="flex items-center scroll-parent mb-10">
      {[...parterners, ...parterners]?.map((i: any, index: number) => {
        return (
          <div key={index} className="scroll-item relative flex h-[166px] w-screen items-center overflow-hidden">
            <div className="absolute flex h-full w-full items-center">
              <div
                className="flex h-full w-full flex-col items-center gap-4"
              >
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    width={36}
                    height={36}
                    // className=" -mb-1.5 -ml-5 scale-50 pt-1.5 w-[76px]"
                    src={i.img}
                    alt="Logo"
                  />
                </div>
                <div className="font-semibold text-[#fff] text-center">{i.name}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default ScrollX
