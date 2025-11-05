import React from 'react'
import Testimonials from '../components/Testimonials'
import img2 from '../assets/images/section5.jpg';
import FastEffectiveRepair from '../components/FastEffectiveRepair';
import BannerTop from '../components/BannerTop';
import img from '../assets/images/lt.jpg'
import PageHelmet from '../components/PageHelmet'
const About = () => {
  return (
    <>
<PageHelmet
  title="About CFDSI | Trusted Underground Cable Fault Repair Experts"
  description="Learn more about CFDSI — a leading name in HT, LT, and OFC cable fault detection and repair across India. We specialize in accurate diagnostics and reliable restoration services."
  keywords="cfdsi company profile,
cable fault detection specialists india,
experienced cable fault repair team,
certified cable testing experts,
reliable underground cable solutions provider,
india's leading cable fault engineers,
our expertise in ht lt ofc repair,
advanced cable diagnostic services,
mission vision cable fault detection,
professional cable maintenance company,
why choose cfdsi for cable faults,"
  canonicalUrl="https://cfdsi.com/cfdsi/about-us/underground-cable-fault-repair-experts"
/>


    <BannerTop names='About' img={img}/>
     <FastEffectiveRepair 
      title="Your Trusted Partner for Professional Cable Fault Repair Services"
      paragraphs={[
        "Welcome to CFDSI, your trusted partner for professional cable fault repair services. With over 10+ years of experience in the industry, we have established ourselves as leaders in providing swift and reliable solutions for underground cable faults, HT cable faults, LT cable faults, and optical fiber cable faults.",
        "We understand the critical importance of uninterrupted connectivity for businesses and organizations.",
        "Our team of expert technicians is dedicated to delivering prompt and effective cable fault repair services, minimizing downtime and ensuring seamless operations for our clients."
      ]}
      image={img2}
    />
    <Testimonials/>
    </>
  )
}

export default About