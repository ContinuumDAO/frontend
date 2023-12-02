import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhatWeDo } from '@/components/WhatWeDo'
import { ContinuumMatrix } from '@/components/ContinuumMatrix'
import { UseCases } from '@/components/UseCases'
import { SideNav } from '@/components/SideNav'

export default function Home() {
  return (
    <>
      <Header />
      <SideNav />
      <main>
        <Hero />
        <WhatWeDo />
        <ContinuumMatrix />
        <UseCases />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
