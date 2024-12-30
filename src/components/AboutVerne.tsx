import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/AboutVerne.css';

const AboutVerne = () => {
  return (
    <section className="about-verne">
      <div className="about-verne-card">
        <div className="verne-image">
          <img 
            src="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/verne_bio_photo.png" 
            alt="Verne Harnish"
          />
        </div>
        <div className="card-content">
          <h1>VERNE HARNISH</h1>
          <h2>SCALEUP EXPERT. WORLD-RENOWNED SPEAKER. BESTSELLING AUTHOR.</h2>
          
          <p>
            Founder of the world-renowned Entrepreneurs' Organization (EO) and chaired for 15 years EO's 
            premier CEO program, the "Birthing of Giants", held at MIT.
          </p>
          
          <p>
            Founder and CEO of Gazelles, a global executive education and coaching company with 
            hundreds of partners on six continents, Verne has spent more than 30 years educating 
            entrepreneurial teams.
          </p>
          
          <p>
            The "Growth Guy" syndicated columnist, he's also a regular columnist for Fortune magazine. 
            He's the author of Scaling Up, Mastering the Rockefeller Habits and, along with the editors of 
            Fortune, authored The Greatest Business Decisions of All Time, for which Jim Collins wrote the 
            foreword. Verne chairs annual Growth Summits in North America, Europe, and Asia and 
            continues to teach in the MIT-based executive program he founded.
          </p>

          <a 
            href="http://scalingup.com/wp-content/uploads/2024/10/Verne-Harnish-Introduction-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-button"
          >
            View Verne's full bio
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutVerne; 