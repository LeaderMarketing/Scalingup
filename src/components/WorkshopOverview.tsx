import React from 'react';
import '../styles/WorkshopOverview.css';

const WorkshopOverview = () => {
  return (
    <section className="workshop-overview">
      <div className="overview-container">
        <div className="overview-content">
          <h1>
            HOW IT WORKS
            <div className="subtitle">
              <span>DISCIPLINED PEOPLE.</span>
              <span>DISCIPLINED THOUGHT.</span>
              <span>DISCIPLINED ACTION.</span>
            </div>
          </h1>
          
          <p>
            Scaling Up focuses on the 4 DECISIONS™ methodology every company must get right: 
            PEOPLE, STRATEGY, EXECUTION, CASH™ — a series of One-Page Tools including the famous 
            One-Page Strategic Plan and the Rockefeller Habits Execution Checklist, which more than 
            70,000 firms around the globe have used to scale their companies successfully.
          </p>
        </div>

        <div className="overview-cards">
          <div className="card">
            <div className="card-icon orange">
              <img src="path-to-people-icon" alt="People" />
            </div>
            <div className="overview-card-content">
              <h3>PEOPLE</h3>
              <p>RECRUITMENT, ON BOARDING, COACHING & CULTURE: DESIGNING THE EMPLOYEE JOURNEY.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon blue">
              <img src="path-to-strategy-icon" alt="Strategy" />
            </div>
            <div className="overview-card-content">
              <h3>STRATEGY</h3>
              <p>PURPOSE, CORE CUSTOMER, BRAND PROMISE & IDENTIFYING THE COMPANY CULTURE.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon brown">
              <img src="path-to-execution-icon" alt="Execution" />
            </div>
            <div className="overview-card-content">
              <h3>EXECUTION</h3>
              <p>SYSTEMS, PROCESSES & ACCOUNTABILITY THROUGH CURRENT TECHNOLOGIES.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon green">
              <img src="path-to-cash-icon" alt="Cash" />
            </div>
            <div className="overview-card-content">
              <h3>CASH</h3>
              <p>CASH FLOW, MARGINS, KEY PERFORMANCE INDICATORS & EFFICIENCIES.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview; 