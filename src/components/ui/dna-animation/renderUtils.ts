
import { DNAStrand, Particle } from './types';

export const drawDNAStrands = (
  ctx: CanvasRenderingContext2D, 
  strands: DNAStrand[], 
  rotationAngle: number, 
  centerX: number, 
  centerY: number
) => {
  for (let i = 0; i < strands.length; i++) {
    const strand = strands[i];
    const strandIndex = i % 2;
    
    const segmentIndex = Math.floor(i / 2);
    const segmentOffset = segmentIndex * Math.PI / 12; // Adjusted from PI/6 to PI/12 to match doubled segments
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
      
      // Draw the connecting line with reduced opacity
      ctx.beginPath();
      ctx.moveTo(extendedX1, extendedY1);
      ctx.lineTo(extendedX2, extendedY2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * scale})`; // Reduced from 0.1 to 0.05
      ctx.lineWidth = 1.5 * scale;
      ctx.stroke();
      
      // Draw dots at extended positions with reduced opacity
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
};

export const drawParticles = (
  ctx: CanvasRenderingContext2D, 
  particles: Particle[], 
  centerX: number, 
  centerY: number
) => {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    
    // Apply perspective
    const scale = 800 / (800 + particle.z);
    const x2d = centerX + particle.x * scale;
    const y2d = centerY + particle.y * scale;
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(x2d, y2d, particle.radius * scale, 0, Math.PI * 2);
    
    // Create glow effect with reduced opacity
    const gradient = ctx.createRadialGradient(
      x2d, y2d, 0,
      x2d, y2d, particle.radius * 4 * scale
    );
    gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fill();
  }
};

export const updateParticlePositions = (particles: Particle[]) => {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    
    // Update orbit
    particle.angle += particle.orbitSpeed;
    particle.x = Math.cos(particle.angle) * particle.orbitRadius;
    particle.z = Math.sin(particle.angle) * particle.orbitRadius;
    
    // Update opacity for fading effect (with reduced range)
    particle.opacity += 0.01 * particle.fadeDirection;
    if (particle.opacity > 0.3 || particle.opacity < 0.05) { // Reduced from 0.8/0.1 to 0.3/0.05
      particle.fadeDirection *= -1;
    }
  }
};
