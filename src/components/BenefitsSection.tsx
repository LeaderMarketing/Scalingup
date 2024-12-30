import React from 'react';
import '../styles/BenefitsSection.css';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefit-column">
          <h2>MORE MONEY</h2>
          <ul>
            <li>2x Cash Flow</li>
            <li>3x Industry Average Profitability</li>
            <li>10x Valuation</li>
          </ul>
        </div>

        <div className="benefit-column">
          <h2>MORE TIME</h2>
          <p>
            Reduce by 80% the time it takes
            <br />to manage the business.
          </p>
        </div>

        <div className="benefit-column">
          <h2>MORE FUN</h2>
          <p>
            Support to speed the process and
            <br />take the load off the leadership
            <br />team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 