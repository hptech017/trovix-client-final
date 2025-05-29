import React from 'react'
import bgImg from "../assets1/landing/bg.jpg"
import Button from '../component/Landing/Button'
import Ecosystem from '../component/Landing/Ecosystem'
import Faq from '../component/Landing/Faq'
import Footer from '../component/Landing/Footer'
import Leaderboard from '../component/Landing/Leaderboard'
import Navbar from '../component/Landing/Navbar'
import Phenomena from '../component/Landing/phenomena'
import RoadMap from '../component/Landing/RoadMap'
import Signup from '../component/Landing/Signup'
import Tokenomics from '../component/Landing/Tokenomics'
import TopNav from '../component/Landing/TopNav'
import BlockchainEfficiencySection from './BlockchainEfficiencySection'
import FeaturedOn from './FeaturedOn'
import HeroSection from './HeroSection'
import ImageSlider from './ImageSlider'
import JoinSection from './JoinSection'
import ReferToEarnSection from './ReferToEarnSection'
import SeamlessEntrySection from './SeamlessEntrySection'
import TROVIXInvestment from './CrudoInvestment'
import TROVIXTokenSection from './CrudoTokenSection'
import YoutubeSlider from './YoutubeSlider'

const Home = () => {
  return (
    <>
      <div className='text-white text-sm' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', height: 'screen' }}>
        <TopNav />
        <Navbar />
        <HeroSection />
        {/* <JoinSection /> */}
        <TROVIXInvestment />
        {/* <YoutubeSlider /> */}
        {/* <FeaturedOn /> */}
        <SeamlessEntrySection />
        {/* <TROVIXTokenSection /> */}
        <BlockchainEfficiencySection />
        {/* <ImageSlider /> */}
        <ReferToEarnSection />
        {/* <Leaderboard /> */}
        <Phenomena />
        <Ecosystem />
        {/* <Tokenomics /> */}
        {/* <RoadMap /> */}
        <Signup />
        <Faq />
        <Footer />
      </div>
      <div className='fixed top-[50%] right-[-7%]  rotate-90 text-white space-x-5 md:block hidden'>
        <Button title="Refer To Earn" className={'border rounded-b-lg p-4 hover:bg-bg_color1'} />
        <Button title="How to Buy" className={'bg-bg_color1 p-4 rounded-b-lg'} />
      </div>

    </>

  )
}

export default Home