import React from 'react';
import '../styles/AgendaDay.css';


interface AgendaItem {
    title: string;
    description: string;
  }
  
  interface AgendaDayProps {
    dayNumber: number;
    title: string;
    items: AgendaItem[];
    backgroundImage: string;
  }
  
  const AgendaDay: React.FC<AgendaDayProps> = ({ dayNumber, title, items, backgroundImage }) => {
    return (
      <div className="agenda-day">
      <div className="day-header" style={{ backgroundImage: `url('${backgroundImage}')` }}>
          <h2>DAY {dayNumber}</h2>
          <h3>{title}</h3>
        </div>
        <div className="agenda-items">
          {items.map((item, index) => (
            <div key={index} className="agenda-item">
              <h4>{item.title}</h4>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AgendaDay;