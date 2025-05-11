
import React, { useCallback, useEffect, useState } from 'react';

type Firework = {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: {
    dx: number;
    dy: number;
    color: string;
  }[];
};

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [isActive, setIsActive] = useState(false);
  
  // Generate random colors for the fireworks
  const getRandomColor = useCallback(() => {
    const colors = ['#ff4d4d', '#4d79ff', '#ffff4d', '#4dff4d', '#ff4dff', '#4dffd6'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);
  
  // Create a firework with particles
  const createFirework = useCallback((x: number, y: number) => {
    const id = Date.now();
    const color = getRandomColor();
    const particles = [];
    
    // Create particles in different directions
    for (let i = 0; i < 36; i++) {
      const angle = (Math.PI * 2 * i) / 36;
      particles.push({
        dx: Math.cos(angle),
        dy: Math.sin(angle),
        color: getRandomColor(),
      });
    }
    
    return { id, x, y, color, particles };
  }, [getRandomColor]);
  
  // Add a firework at a random position
  const addRandomFirework = useCallback(() => {
    if (!isActive) return;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight / 2); // Top half of the screen
    
    const newFirework = createFirework(x, y);
    
    setFireworks(prev => [...prev, newFirework]);
    
    // Remove the firework after animation completes
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
    }, 700);
    
  }, [createFirework, isActive]);
  
  // Add fireworks on click
  const handleClick = useCallback((e: MouseEvent) => {
    const newFirework = createFirework(e.clientX, e.clientY);
    
    setFireworks(prev => [...prev, newFirework]);
    
    // Remove the firework after animation completes
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
    }, 700);
  }, [createFirework]);
  
  useEffect(() => {
    // Set random fireworks interval
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(addRandomFirework, 800);
    }
    
    // Add click listener
    window.addEventListener('click', handleClick);
    
    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('click', handleClick);
    };
  }, [addRandomFirework, handleClick, isActive]);
  
  // Activate fireworks when scrolling to Welcome section
  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById('home');
      if (welcomeSection) {
        const rect = welcomeSection.getBoundingClientRect();
        setIsActive(rect.top <= 0 && rect.bottom >= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="firework"
          style={{ left: firework.x, top: firework.y }}
        >
          <div
            className="firework-explosion"
            style={{ background: firework.color }}
          ></div>
          {firework.particles.map((particle, index) => (
            <div
              key={index}
              className="firework-particle"
              style={{
                background: particle.color,
                '--dx': particle.dx,
                '--dy': particle.dy,
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Fireworks;
