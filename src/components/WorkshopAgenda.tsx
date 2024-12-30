import React from 'react';
import '../styles/WorkshopAgenda.css';
import AgendaDay from './AgendaDay';

const WorkshopAgenda = () => {
  const day1Items = [
    {
      title: 'CASH MODEL',
      description: 'A tool to double your operating cash flow in twelve months'
    },
    {
      title: 'MARKET INTELLIGENCE',
      description: 'How leading firms "learn faster" to remain ahead of their competitors'
    },
    {
      title: 'PEOPLE',
      description: 'How to select and hire A players and then avoid demotivating them'
    },
    {
      title: 'CORE IDEOLOGY',
      description: 'Bringing your core values and core purpose alive – energize your employees'
    },
    {
      title: 'BHAG (BIG HAIRY AUDACIOUS GOAL)',
      description: 'Aligning it with your business fundamentals'
    },
    {
      title: 'BRAND PROMISE',
      description: 'The key strategic decision that differentiates you from competitors'
    },
    {
      title: 'X FACTOR',
      description: 'Find the advantage over competitors that helps you dominate your industry'
    },
    {
      title: 'ANNUAL AND QUARTERLY FOCUS',
      description: 'The critical short term decisions an executive team can make to drive alignment'
    },
    {
      title: 'TEAM STUDY SESSION',
      description: ''
    }
  ];

  const day2Items = [
    {
      title: 'ROCKEFELLER HABITS CHECKLIST',
      description: 'Ten essential habits that reduce the executive time needed to manage the business from 50 hours/week to less than 15 hours'
    },
    {
      title: 'MEETING RHYTHM',
      description: 'The daily, weekly, monthly, quarterly, and annual meeting rhythm and the specific agendas that make them effective and practical'
    },
    {
      title: 'METRICS',
      description: 'The three types of metrics that drive the business on a daily and weekly basis'
    },
    {
      title: 'PRIORITIES',
      description: 'Using daily, weekly, and quarterly themes to drive alignment and focus'
    },
    {
      title: 'ORGANIZATIONAL STRUCTURE',
      description: 'The three types of organizational charts and how to apply them to keep everyone accountable'
    },
    {
      title: 'THEMES',
      description: 'How to use them to make your priorities memorable and add energy to your organization'
    }
  ];

  return (
    <div className="workshop-agenda">
      <h1 className="workshop-title">WORKSHOP <span>AGENDA</span></h1>
      <div className="agenda-container">
        <AgendaDay 
          dayNumber={1}
          title="PEOPLE & STRATEGY"
          items={day1Items}
          backgroundImage="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/day1_bg.jpg"
        />
        <AgendaDay 
          dayNumber={2}
          title="EXECUTION"
          items={day2Items}
          backgroundImage="https://jcardenasleader.wordpress.com/wp-content/uploads/2024/12/day2_bg.jpg"
        />
      </div>
    </div>
  );
};

export default WorkshopAgenda;