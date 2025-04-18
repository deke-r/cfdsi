import React from 'react'
import Testimonials from '../components/Testimonials'
import img2 from '../assets/images/section5.jpg';
import FastEffectiveRepair from '../components/FastEffectiveRepair';
import BannerTop from '../components/BannerTop';
import img from '../assets/images/lt.jpg'

const About = () => {
  return (
    <>

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