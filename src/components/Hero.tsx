import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="hero-title-main">SCALING UP</span>
          <span className="hero-title-main-2">WORKSHOP</span>
        </h1>
        
        <div className="hero-info">
          <div className="speaker-box">
            <img src="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/hosted-by-logo.png" alt="Verne Harnish" className="speaker-image" />
          </div>
          
          <div className="quote-box">
            <img src="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/top-10-logo.png" alt="Top 10 Business Minds Quote" className="quote-image" />
          </div>
        </div>

        <div className="event-details">
          <div className="event-location">
            <div>HILTON ADELAIDE</div>
            <div>SOUTH AUSTRALIA</div>
          </div>

          <div className="event-date">
            <div>20<sup>TH</sup> - 21<sup>ST</sup></div>
            <div>FEBRUARY, 2025</div>
          </div>

          <div className="event-day">
            <div>DAY 1:</div>
            <div>10:00 AM - 6:00 PM</div>
          </div>

          <div className="event-day">
            <div>DAY 2:</div>
            <div>8:30 AM - 6:00 PM</div>
          </div>
        </div>

        <button className="register-button">
          REGISTER NOW <ArrowUpRight className="arrow" size={32} />
        </button>

        <p className="description">
          Leader's purpose is to help our MSP/resellers grow and be highly successful. We are very excited to bring to Australia, 
          Forbes Magazine Top 10 business minds in the world - Verne Harnish, to do this highly rated 2 day "Scaling Up" 
          workshop. Leader has grown business 17x size since our first workshop with Verne 7 years ago and we would love to 
          share this with our resellers so they too can achieve great results.
        </p>
      </div>
    </section>
  );
};

export default Hero; 