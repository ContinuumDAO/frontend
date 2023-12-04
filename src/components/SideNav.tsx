'use client'

import React, { useEffect, useState } from 'react'
import SideBarGif from '@/images/sidebar-dots.gif'
import Image from 'next/image'

export function SideNav() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(
    'hero',
  )
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  const handleScroll = () => {
    // Check if the screen height is less than 1280 pixels
    if (window.innerHeight < 1280) {
      // Calculate the distance from the bottom
      const distanceFromBottom =
        document.body.offsetHeight - (window.innerHeight + window.scrollY)

      console.log(distanceFromBottom, document.body.scrollHeight)

      // Check if the distance from the bottom is less than or equal to 1000px
      if (distanceFromBottom + document.body.scrollHeight <= 1500) {
        setCurrentComponent(null)
        return
      }
    }

    const elementsUnderNav = document.elementsFromPoint(
      window.innerWidth / 2,
      150,
    )
    const foundComponent = elementsUnderNav.find((el) => el.hasAttribute('id'))
    setCurrentComponent(
      foundComponent ? foundComponent.getAttribute('id') : null,
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigateTo = (componentId: string) => {
    const element = document.getElementById(componentId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const componentList = ['what-we-do', 'continuum-matrix', 'use-cases', 'faq']

  return (
    <div className="xs:hidden z-50 2xl:inline">
      <div
        className={`${
          currentComponent === null || currentComponent === 'hero'
            ? 'inline opacity-0 transition-opacity duration-200 ease-in-out'
            : 'inline opacity-100 transition-opacity duration-500 ease-in-out'
        }`}
      >
        <div className="fixed left-10 top-96 z-40">
          {componentList.map((componentId, index) => {
            const isAdjacentSelected =
              (currentComponent === componentId &&
                hoveredComponent === componentList[index + 1]) ||
              (hoveredComponent === componentId &&
                currentComponent === componentList[index + 1])

            return (
              <div key={componentId}>
                {currentComponent === componentId ||
                hoveredComponent === componentId ? (
                  <Selected
                    isAdjacentSelected={isAdjacentSelected}
                    onClick={() => navigateTo(componentId)}
                    onMouseEnter={() => setHoveredComponent(componentId)}
                    onMouseLeave={() => setHoveredComponent(null)}
                  />
                ) : (
                  <Line
                    onClick={() => navigateTo(componentId)}
                    onMouseEnter={() => setHoveredComponent(componentId)}
                    onMouseLeave={() => setHoveredComponent(null)}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface LineProps {
  onClick: React.MouseEventHandler<SVGSVGElement>
  onMouseEnter: React.MouseEventHandler<SVGSVGElement>
  onMouseLeave: React.MouseEventHandler<SVGSVGElement>
}

export function Line({ onClick, onMouseEnter, onMouseLeave }: LineProps) {
  return (
    <svg
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      width="76"
      height="79"
      viewBox="0 0 76 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <g clipPath="url(#clip0_850_3162)">
        <rect width="1" height="79" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_850_3162">
          <rect width="76" height="79" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

interface SelectedProps {
  isAdjacentSelected: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>
}

export function Selected({
  isAdjacentSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SelectedProps) {
  return (
    <div
      className={`-ml-9 ${
        isAdjacentSelected ? '-mb-20 -ml-9 -mt-10' : '-my-10 -ml-9'
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image className="scale-50" src={SideBarGif} alt="Side Bar Graphic" />
    </div>
  )
}
