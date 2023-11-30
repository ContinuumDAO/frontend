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
          currentComponent === 'footer' || currentComponent === 'hero'
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

export function Line({ onClick, onMouseEnter, onMouseLeave }) {
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

export function Selected({
  isAdjacentSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
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
