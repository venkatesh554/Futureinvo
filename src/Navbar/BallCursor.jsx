import React, { useState, useEffect } from 'react';
import './BallCursor.css'; // Import the CSS file

const BallCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, newPosition];
        return newTrail.slice(-10);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="trail-dot"
          style={{
            left: point.x,
            top: point.y,
            animationDelay: `${index * 0.1}s`, // Stagger the animation
            opacity: 1 - (index / trail.length), // Fade out older dots
          }}
        />
      ))}
    </>
  );
};

export default BallCursor;
