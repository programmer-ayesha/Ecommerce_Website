import FreeTrail from '@/components/pricing/trial-offer'
import Plan from '@/components/pricing/service-plans'
import Price from '@/components/pricing/cost'
import PriceFaqs from '@/components/pricing/cost-queries'
import Footer from '@/components/shop/footer'
import Header from '@/components/shop/head'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <Price />
        <Plan />
        <PriceFaqs />
        <FreeTrail />
        <Footer />
    </div>
  )
}

export default PricingPage