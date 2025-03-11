
import React, { useRef } from 'react';
import { useAnimationController } from './dna-animation/useAnimationController';

const DNAHelixAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use the animation controller hook
  useAnimationController(canvasRef);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DNAHelixAnimation;
