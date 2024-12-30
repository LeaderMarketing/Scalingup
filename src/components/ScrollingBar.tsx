import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/ScrollingBar.css';

const scrollItems = [
  {
    text: "HAVE YOU GOT THE RIGHT PEOPLE TO DRIVE STRATEGY?",
    href: "#people",
    bgColor: "#FFA500"
  },
  {
    text: "HAVE YOU GOT THE RIGHT STRATEGY TO EXECUTE?",
    href: "#strategy",
    bgColor: "#00A3E0"
  },
  {
    text: "ARE YOU WASTING CASH ON POOR EXECUTION?",
    href: "#execution",
    bgColor: "#8B572A"
  },
  {
    text: "HAVE YOU GOT ENOUGH CASH TO FUEL YOUR GROWTH?",
    href: "#growth",
    bgColor: "#8DC63F"
  }
];

const ScrollingBar = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        {[...scrollItems, ...scrollItems, ...scrollItems].map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            className="scroll-item"
            style={{ backgroundColor: item.bgColor }}
          >
            {item.text} <ArrowRight size={20} strokeWidth={2.5} className="scroll-arrow" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBar; 