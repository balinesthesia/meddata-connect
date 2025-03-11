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
    const strandSegments = 24; // More segments for smoother spiral
    const verticalSpacing = 25; // Spacing between segments
    const strands: DNAStrand[] = [];
    
    // Create wider DNA spiral
    for (let i = 0; i < strandCount; i++) {
      for (let j = 0; j < strandSegments; j++) {
        const strand: DNAStrand = {
          x: 0,
          y: j * verticalSpacing - (strandSegments * verticalSpacing / 2),
          z: 0,
          radius: 6,
          color: i === 0 ? '#E1F0FF' : '#C2FFE8',
          opacity: 0.25
        };
        strands.push(strand);
      }
    }
    
    // Create particles
    const particleCount = 15;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        x: 0,
        y: (Math.random() - 0.5) * (strandSegments * verticalSpacing),
        z: 0,
        radius: Math.random() * 2.5 + 1,
        color: Math.random() > 0.5 ? '#00E5FF' : '#00FF9D',
        opacity: Math.random() * 0.5 + 0.3,
        orbitRadius: Math.random() * 50 + 120,
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
      rotationAngle += 0.004;
      floatOffset += 0.012 * floatDirection;
      
      if (floatOffset > 15 || floatOffset < -15) {
        floatDirection *= -1;
      }
      
      // Center position with offset
      const centerX = canvas.width / 2 + Math.sin(rotationAngle * 0.5) * 40;
      const centerY = canvas.height / 2 + floatOffset;
      
      // Draw DNA strands with spiral pattern
      for (let i = 0; i < strands.length; i++) {
        const strand = strands[i];
        const strandIndex = i % 2;
        
        const segmentIndex = Math.floor(i / 2);
        const segmentOffset = segmentIndex * Math.PI / 6;
        const angle = rotationAngle + (strandIndex * Math.PI) + segmentOffset;
        
        // Calculate base position
        const baseX = Math.cos(angle) * 120;
        const baseZ = Math.sin(angle) * 120;
        
        // Apply perspective for base position
        const scale = 800 / (800 + baseZ);
        const baseX2d = centerX + baseX * scale;
        const baseY2d = centerY + strand.y * scale;
        
        // Connect strands and position dots at the extended endpoints
        if (i > 0 && (i % 2) === 1) {
          const prevStrand = strands[i - 1];
          const prevAngle = rotationAngle + ((i - 1) % 2 * Math.PI) + segmentOffset;
          
          const prevX = Math.cos(prevAngle) * 120;
          const prevZ = Math.sin(prevAngle) * 120;
          const prevScale = 800 / (800 + prevZ);
          const prevX2d = centerX + prevX * prevScale;
          const prevY2d = centerY + prevStrand.y * prevScale;
          
          // Calculate midpoint and vectors
          const midX = (baseX2d + prevX2d) / 2;
          const midY = (baseY2d + prevY2d) / 2;
          
          const vecX1 = baseX2d - midX;
          const vecY1 = baseY2d - midY;
          const vecX2 = prevX2d - midX;
          const vecY2 = prevY2d - midY;
          
          // Calculate extended endpoints
          const extendedX1 = midX + vecX1 * 2;
          const extendedY1 = midY + vecY1 * 2;
          const extendedX2 = midX + vecX2 * 2;
          const extendedY2 = midY + vecY2 * 2;
          
          // Draw the connecting line
          ctx.beginPath();
          ctx.moveTo(extendedX1, extendedY1);
          ctx.lineTo(extendedX2, extendedY2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * scale})`;
          ctx.lineWidth = 1.5 * scale;
          ctx.stroke();
          
          // Draw dots at extended positions
          ctx.beginPath();
          ctx.arc(extendedX1, extendedY1, strand.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = `${strand.color}${Math.floor(strand.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(extendedX2, extendedY2, prevStrand.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = `${prevStrand.color}${Math.floor(prevStrand.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
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
          x2d, y2d, particle.radius * 4 * scale
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
