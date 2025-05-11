
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
  const [developerImagePosition, setDeveloperImagePosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  // Get and update developer image position
  useEffect(() => {
    const updateDeveloperImagePosition = () => {
      const profileElement = document.querySelector('#home .md\\:w-1\\/2:last-child .relative');
      if (profileElement) {
        const rect = profileElement.getBoundingClientRect();
        setDeveloperImagePosition({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY,
          width: rect.width,
          height: rect.height
        });
      }
    };
    
    // Initial position check
    updateDeveloperImagePosition();
    
    // Update on resize
    window.addEventListener('resize', updateDeveloperImagePosition);
    
    return () => {
      window.removeEventListener('resize', updateDeveloperImagePosition);
    };
  }, []);
  
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
  
  // Add a firework at a random position within the developer image
  const addRandomFirework = useCallback(() => {
    if (!isActive) return;
    
    // Generate random position within the developer image area
    const { x, y, width, height } = developerImagePosition;
    const randomX = x + Math.random() * width;
    const randomY = y + Math.random() * height;
    
    const newFirework = createFirework(randomX, randomY);
    
    setFireworks(prev => [...prev, newFirework]);
    
    // Remove the firework after animation completes
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
    }, 700);
    
  }, [createFirework, isActive, developerImagePosition]);
  
  // Add fireworks on developer image click
  const handleClick = useCallback((e: MouseEvent) => {
    const { x, y, width, height } = developerImagePosition;
    
    // Check if click is within the developer image area
    if (
      e.clientX + window.scrollX >= x &&
      e.clientX + window.scrollX <= x + width &&
      e.clientY + window.scrollY >= y &&
      e.clientY + window.scrollY <= y + height
    ) {
      const newFirework = createFirework(e.clientX + window.scrollX, e.clientY + window.scrollY);
      
      setFireworks(prev => [...prev, newFirework]);
      
      // Remove the firework after animation completes
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
      }, 700);
    }
  }, [createFirework, developerImagePosition]);
  
  useEffect(() => {
    // Set random fireworks interval
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && developerImagePosition.width > 0) {
      interval = setInterval(addRandomFirework, 800);
    }
    
    // Add click listener
    window.addEventListener('click', handleClick);
    
    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('click', handleClick);
    };
  }, [addRandomFirework, handleClick, isActive, developerImagePosition]);
  
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
          style={{ 
            position: 'absolute',
            left: firework.x, 
            top: firework.y,
            pointerEvents: 'none',
            zIndex: 100
          }}
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
