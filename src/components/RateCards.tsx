import React from 'react';
import CountUp from 'react-countup';
import '../styles/RateCards.css';

const rateCards = [
  {
    rating: "9.7",
    city: "NEW ORLEANS",
    country: "United States",
    background: "https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/new-orleans_bg.png"
  },
  {
    rating: "9.5",
    city: "LONDON",
    country: "England",
    background: "https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/london_bg.png"
  },
  {
    rating: "9.8",
    city: "MUNICH",
    country: "Germany",
    background: "https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/munich_bg.png"
  },
  {
    rating: "9.5",
    city: "SHANGHAI",
    country: "China",
    background: "https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/shanghai_bg.png"
  },
  {
    rating: "9.6",
    city: "DUBAI",
    country: "United Arab Emirates",
    background: "https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/dubai_bg.jpg"
  }
];

const RateCards = () => {
  return (
    <section className="rate-cards">
      <h2 className="rate-cards-title">
        VOTED <span className="highlight">THE BEST BUSINESS EDUCATIONAL EVENT</span>
        <br />IN YPO FOR FOUR CONSECUTIVE YEARS
      </h2>

      <div className="cards-container">
        {rateCards.map((card, index) => (
          <div 
            key={index} 
            className="rate-card"
            style={{
              backgroundImage: `url(${card.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="rating">
              <CountUp
                start={0}
                end={card.rating}
                duration={2}
                decimals={1}
                decimal="."
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="rating-label">RATING</div>
            <div className="city">{card.city}</div>
            <div className="country">{card.country}</div>
          </div>
        ))}
      </div>

      <div className="rate-cards-footer">
        <h3>... AND HOSTED IN OVER 40 OTHER CITIES WORLDWIDE.</h3>
        <p>This event has been waitlisted for four years running.</p>
      </div>
    </section>
  );
};

export default RateCards; 