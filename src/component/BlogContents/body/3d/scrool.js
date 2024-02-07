import React, { useEffect, useState } from 'react';
import './scrool.css'; // Import your CSS file

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 15000;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        id="myBar"
        style={{ height: `${scrollPercentage}%`, width: '5px', background: '#005eb8' }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
