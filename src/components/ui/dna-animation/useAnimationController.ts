
import { useState, useEffect, useRef } from 'react';
import { DNAStrand, Particle } from './types';
import { createDNAStrands, createParticles } from './initUtils';
import { drawDNAStrands, drawParticles, updateParticlePositions } from './renderUtils';

export const useAnimationController = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
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

    // Create DNA strands and particles
    const strands: DNAStrand[] = createDNAStrands();
    const particles: Particle[] = createParticles();
    
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
      drawDNAStrands(ctx, strands, rotationAngle, centerX, centerY);
      
      // Update and draw particles
      updateParticlePositions(particles);
      drawParticles(ctx, particles, centerX, centerY);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [canvasRef]);
};
