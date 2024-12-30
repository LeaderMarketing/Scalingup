import React, { useEffect } from 'react';
import '../styles/ScaleSection.css';

const ScaleSection = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.video-wrapper');
    const overlay = document.querySelector('.thumbnail-overlay');

    overlay?.addEventListener('click', () => {
      wrapper?.classList.add('playing');
      const iframe = wrapper?.querySelector('iframe');
      if (iframe) {
        const player = new Vimeo.Player(iframe);
        player.play();
      }
    });
  }, []);

  return (
    <section className="scale-section">
      <div className="scale-container">
        <div className="scale-content">
          <h1>
            SCALE THE BUSINESS.
            <br />
            <span className="highlight">ENJOY THE CLIMB.</span>
          </h1>
          
          <p>
            Many growth-company leaders reach a point where they actually dread adding another customer, employee, or location. 
            It feels like they are just adding more weight to an ever-heavier anchor they are dragging up the hill. To make matters worse, 
            the increased revenues haven't turned into more profitability, so at some point, they wonder if the journey of scaling up is 
            worth the effort.
          </p>
          
          <p>
            Running a business is ultimately about freedom. The Scaling Up workshop will teach you how to achieve it, no matter how big 
            and complicated a business becomes.
          </p>
          
          <p>
            Free your time to focus on the market-facing activities necessary to grow your business while getting everyone aligned 
            to execute your plan.
          </p>
        </div>

        <div className="video-container">
          <div className="video-wrapper">
            <div className="thumbnail-overlay">
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
            </div>
            <iframe
              src="https://player.vimeo.com/video/801674635?h=3c8f0952f4&controls=1&dnt=1&title=0&byline=0&portrait=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Verne Harnish Introduction"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection; 