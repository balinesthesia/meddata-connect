
import { DNAStrand, Particle } from './types';

export const createDNAStrands = (): DNAStrand[] => {
  const strandCount = 2;
  const strandSegments = 48; // Doubled from 24 to 48 for more connections
  const verticalSpacing = 12.5; // Halved from 25 to maintain the same total height
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
        opacity: 0.15 // Reduced from 0.25 to 0.15
      };
      strands.push(strand);
    }
  }
  
  return strands;
};

export const createParticles = (): Particle[] => {
  const particleCount = 15;
  const strandSegments = 48;
  const verticalSpacing = 12.5;
  const particles: Particle[] = [];
  
  for (let i = 0; i < particleCount; i++) {
    const particle: Particle = {
      x: 0,
      y: (Math.random() - 0.5) * (strandSegments * verticalSpacing),
      z: 0,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.5 ? '#00E5FF' : '#00FF9D',
      opacity: Math.random() * 0.15 + 0.15, // Reduced from 0.5+0.3 to 0.15+0.15
      orbitRadius: Math.random() * 50 + 120,
      orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      angle: Math.random() * Math.PI * 2,
      fadeDirection: Math.random() > 0.5 ? 1 : -1
    };
    particles.push(particle);
  }
  
  return particles;
};
