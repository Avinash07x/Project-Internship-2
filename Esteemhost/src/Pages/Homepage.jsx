import React from 'react'
import Hero from '../components/Hero';
import Esteemhost from '../components/Esteemhost';
import Features from '../components/Features';
import Plans from '../components/Plans';
import AnimatedDashboard from '../components/AnimatedDashboard';
import EsteemhostsSection from '../components/EsteemhostsSection';
import Testimonials from '../components/Testimonials';
import EsteemhostFAQ from '../components/EsteemhostFAQ';
// import ServicesSection from '../components/ServicesSection.jsx';


const Homepage = () => {
    return (
        <>
            <Hero />
            <Esteemhost />
            {/* <ServicesSection /> */}
            <Features />
            <Plans />
            <AnimatedDashboard />
            <EsteemhostsSection />
            <EsteemhostFAQ />
            <Testimonials />
        </>
    )
}

export default Homepage;
