'use client'

import React, { useEffect, useState } from 'react'
import SideBarGif from '@/images/sidebar-dots.gif'
import Image from 'next/image'

export function SideNav() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(
    'hero',
  )

  const handleScroll = () => {
    const elementsUnderNav = document.elementsFromPoint(
      window.innerWidth / 2,
      150,
    )
    const foundComponent = elementsUnderNav.find((el) => el.hasAttribute('id'))

    // Update the state with either the component name or null
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

  return (
    <div className="xs:hidden 2xl:inline">
      <div
        className={`${
          currentComponent === 'footer' || currentComponent === 'hero'
            ? 'inline opacity-0 transition-opacity duration-200 ease-in-out'
            : 'inline opacity-100 transition-opacity duration-500 ease-in-out'
        }`}
      >
        <div className="fixed left-10 top-96 z-40">
          {currentComponent === 'what-we-do' ? (
            <div className="-my-10 -ml-9">
              <Selected />
            </div>
          ) : (
            <Line />
          )}
          {currentComponent === 'continuum-matrix' ? (
            <div className="-my-10 -ml-9">
              <Selected />
            </div>
          ) : (
            <Line />
          )}
          {currentComponent === 'use-cases' ? (
            <div className="-my-10 -ml-9">
              <Selected />
            </div>
          ) : (
            <Line />
          )}
          {currentComponent === 'faq' ? (
            <div className="-my-10 -ml-9">
              <Selected />
            </div>
          ) : (
            <Line />
          )}
        </div>
      </div>
    </div>
  )
}

export function Line() {
  return (
    <svg
      width="76"
      height="79"
      viewBox="0 0 76 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

export function Selected() {
  return <Image className="scale-50" src={SideBarGif} alt="Side Bar Graphic" />
}
