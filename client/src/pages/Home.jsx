import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeatureBanner from '../components/home/FeatureBanner';
import JourneyBanner from '../components/home/JourneyBanner';
import JourneySteps from '../components/home/JourneySteps';
import MeetTheTeam from '../components/home/MeetTheTeam';
import LookAtYourLife from '../components/home/LookAtYourLife';
import YourBirthChart from '../components/home/YourBirthChart';
import PersonalJourneyBeginning from '../components/home/PersonalJourneyBeginning';
import DistinctGuidance from '../components/home/DistinctGuidance';
import ChooseTheLevel from '../components/home/ChooseTheLevel';
import AboutAkashvani from '../components/home/AboutAkashvani';
import TheAkashvaniJournal from '../components/home/TheAkashvaniJournal';
import OffersSection from '../components/home/OffersSection';
import MindBodySoul from '../components/home/MindBodySoul';
import Faq from '../components/home/Faq';
import ThereIsAlways from '../components/home/ThereIsAlways';
import StartWhere from '../components/home/StartWhere';
import WavyBackground from '../components/home/WavyBackground';
import AnimatedSection from '../components/common/AnimatedSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Background Contour Waves */}
      <WavyBackground />

      {/* Primary Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <FeatureBanner />
        
        {/* Continuous Solid Dark Blue Experience */}
        <MindBodySoul />
        <OffersSection />
        <JourneyBanner />
        <JourneySteps />

        {/* Subsequent Editorial Sections */}
        <AnimatedSection delay={0.15} fadeOnly={true}><MeetTheTeam /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><LookAtYourLife /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><YourBirthChart /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><PersonalJourneyBeginning /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><DistinctGuidance /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><ChooseTheLevel /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><AboutAkashvani /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><TheAkashvaniJournal /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><Faq /></AnimatedSection>
        <AnimatedSection delay={0.15} fadeOnly={true}><ThereIsAlways /></AnimatedSection>
        <StartWhere />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
