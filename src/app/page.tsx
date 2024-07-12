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
      <div className="fixed bottom-0 left-0 right-0 top-0 -z-[10] h-screen w-screen bg-[url('../images/background-graphic.gif')] bg-cover" />
      <Header />
      <SideNav />
      <main>
        <Hero />
        <WhatWeDo />
        {/* <ContinuumMatrix /> */}
        <UseCases />
        <Faqs />
        <div className="flex flex-col">
          <span className="mb-12 self-center text-[36px] font-bold text-[#fff]">
            Our Partner
          </span>
          <ScrollX />
        </div>
      </main>
      <Footer />
    </>
  )
}
