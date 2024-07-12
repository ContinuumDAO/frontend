import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhatWeDo } from '@/components/WhatWeDo'
// import { ContinuumMatrix } from '@/components/ContinuumMatrix'
import { UseCases } from '@/components/UseCases'
import { SideNav } from '@/components/SideNav'
import { ScrollX } from '@/components/ScrollX'

export default function Home() {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 -z-[10] w-screen h-screen bg-cover bg-[url('../images/background-graphic.gif')]" />
      <Header />
      <SideNav />
      <main>
        <Hero />
        <WhatWeDo />
        {/* <ContinuumMatrix /> */}
        <UseCases />
        <Faqs />
        <ScrollX />
      </main>
      <Footer />
    </>
  )
}
