import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import StickyBar from './components/StickyBar';
import Hero from './components/Hero';
import ScrollingBar from './components/ScrollingBar';
import RateCards from './components/RateCards';
import AboutVerne from './components/AboutVerne';
import ScaleSection from './components/ScaleSection';
import BenefitsSection from './components/BenefitsSection';
import WorkshopOverview from './components/WorkshopOverview';
import WorkshopAgenda from './components/WorkshopAgenda';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <StickyBar />
      <Navbar />
      <Hero />
      <ScrollingBar />
      <RateCards />
      <AboutVerne />
      <ScaleSection />
      <BenefitsSection />
      <WorkshopOverview />
      <WorkshopAgenda />
    </BrowserRouter>
  );
}

export default App;