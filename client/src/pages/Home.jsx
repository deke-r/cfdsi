import React from 'react'
import CableFaultRepair from '../components/CableFaultRepair'
import FastEffectiveRepair from '../components/FastEffectiveRepair'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ExploreOurServices from '../components/ExploreOurServices'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import img from '../assets/images/2232-202403181445151076.jpg';
import img2 from '../assets/images/section5.jpg';
import PageHelmet from '../components/PageHelmet'
const Home = () => {
  return (
    <>
<PageHelmet
  title="CFDSI | Underground Cable Fault Repair Experts in Delhi NCR"
  description="CFDSI provides expert underground cable fault repair, HT/LT cable testing, and OFC repair services. We ensure fast and reliable fault detection for all cable types across Delhi NCR."
  keywords="Underground cable fault repair, HT cable fault detection, LT cable repair, OFC fault detection, Cable testing, Cable fault finding service, Delhi cable repair, Emergency cable repair, Cable fault locator, Cable jointing services"
  canonicalUrl="https://cfdsi.com/"
/>


<CableFaultRepair 
      title="Underground Cable Fault Repair Services"
      paragraphs={[
        "Our underground Cable Fault Repair Services ensure swift and reliable solutions for all your cable faults. Our expert technicians use cutting-edge equipment to detect and repair faults efficiently, minimizing downtime and ensuring uninterrupted connectivity.",
        "Trust us for prompt, cost-effective, and professional cable fault repair services that keep your operations running smoothly."
      ]}
      image={img}
    />

<FastEffectiveRepair 
      title="Fast and Effective Fault Repair Services"
      paragraphs={[
        "Experience seamless solutions for HT, LT, and OFC cable repair needs with our expert services. Our team specializes in repairing high-tension, low-tension, and optical fiber cables promptly and efficiently.",
        "Whether it's underground faults or above-ground damages, trust us for comprehensive solutions. We prioritize quality, safety, and reliability in every repair job we undertake.",
        "With our industry-leading expertise and state-of-the-art equipment, we ensure minimal downtime and maximum performance for your cable networks."
      ]}
      image={img2}
    />    <OurServices/>
    <WhyChooseUs/>
    <ExploreOurServices/>
    <AboutUs/>
    <Testimonials/>
    
    </>
  )
}

export default Home