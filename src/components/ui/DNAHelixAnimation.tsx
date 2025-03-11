
import React, { useEffect, useRef } from 'react';

interface DNAStrand {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  opacity: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  opacity: number;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
  fadeDirection: number;
}

const DNAHelixAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create DNA strands
    const strandCount = 2;
    const strandSegments = 20;
    const strands: DNAStrand[] = [];
    
    for (let i = 0; i < strandCount; i++) {
      for (let j = 0; j < strandSegments; j++) {
        const strand: DNAStrand = {
          x: 0,
          y: j * 30 - (strandSegments * 15),
          z: 0,
          radius: 5,
          color: i === 0 ? '#E1F0FF' : '#C2FFE8',
          opacity: 0.8
        };
        strands.push(strand);
      }
    }
    
    // Create particles
    const particleCount = 12;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        x: 0,
        y: (Math.random() - 0.5) * (strandSegments * 30),
        z: 0,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00E5FF' : '#00FF9D',
        opacity: Math.random() * 0.5 + 0.3,
        orbitRadius: Math.random() * 30 + 70,
        orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        angle: Math.random() * Math.PI * 2,
        fadeDirection: Math.random() > 0.5 ? 1 : -1
      };
      particles.push(particle);
    }
    
    // Animation variables
    let rotationAngle = 0;
    let floatOffset = 0;
    let floatDirection = 1;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation and floating effect
      rotationAngle += 0.005; // Full rotation every ~5 seconds
      floatOffset += 0.015 * floatDirection;
      
      if (floatOffset > 15 || floatOffset < -15) {
        floatDirection *= -1;
      }
      
      // Center position with offset
      const centerX = canvas.width / 2 + Math.sin(rotationAngle * 0.5) * 30;
      const centerY = canvas.height / 2 + floatOffset;
      
      // Draw DNA strands
      for (let i = 0; i < strands.length; i++) {
        const strand = strands[i];
        const strandIndex = i % 2;
        const angle = rotationAngle + (strandIndex * Math.PI);
        
        // Calculate 3D position
        strand.x = Math.cos(angle) * 50;
        strand.z = Math.sin(angle) * 50;
        
        // Apply perspective
        const scale = 800 / (800 + strand.z);
        const x2d = centerX + strand.x * scale;
        const y2d = centerY + strand.y * scale;
        
        // Draw strand node
        ctx.beginPath();
        ctx.arc(x2d, y2d, strand.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = `${strand.color}${Math.floor(strand.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Connect strands
        if (i > 0 && (i % 2) === 1) {
          const prevStrand = strands[i - 1];
          const prevAngle = rotationAngle + ((i - 1) % 2 * Math.PI);
          const prevX = Math.cos(prevAngle) * 50;
          const prevZ = Math.sin(prevAngle) * 50;
          const prevScale = 800 / (800 + prevZ);
          const prevX2d = centerX + prevX * prevScale;
          const prevY2d = centerY + prevStrand.y * prevScale;
          
          ctx.beginPath();
          ctx.moveTo(x2d, y2d);
          ctx.lineTo(prevX2d, prevY2d);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * scale})`;
          ctx.lineWidth = 1 * scale;
          ctx.stroke();
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Update orbit
        particle.angle += particle.orbitSpeed;
        particle.x = Math.cos(particle.angle) * particle.orbitRadius;
        particle.z = Math.sin(particle.angle) * particle.orbitRadius;
        
        // Update opacity for fading effect
        particle.opacity += 0.01 * particle.fadeDirection;
        if (particle.opacity > 0.8 || particle.opacity < 0.1) {
          particle.fadeDirection *= -1;
        }
        
        // Apply perspective
        const scale = 800 / (800 + particle.z);
        const x2d = centerX + particle.x * scale;
        const y2d = centerY + particle.y * scale;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, particle.radius * scale, 0, Math.PI * 2);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          x2d, y2d, 0,
          x2d, y2d, particle.radius * 3 * scale
        );
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DNAHelixAnimation;
