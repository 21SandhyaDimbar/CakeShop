import React from 'react'
import Header from '../../Component/Layout/Header'
import Hero from '../../Component/HomeDesign/Hero'
import Categories from '../../Component/HomeDesign/Hero/Categories/Categories'
import BestDeals from '../../Component/HomeDesign/BestDeals/BestDeals'
import FeatureProducts from '../../Component/HomeDesign/featureProduct/FeatureProducts'
import Events from '../../Component/Events/Events'
import Footer from '../../Component/Layout/Footer'
import WhyChooseUs from '../../Component/AboutUs/WhyChooseUs'



const HomePage = () => {

  return (
    <div>
        <Header activeHeading={1} />
        <div className='bg-[#e3e1e1]'>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeatureProducts />
        <WhyChooseUs />
        <Footer />
        </div>
    </div>
  )
}

export default HomePage