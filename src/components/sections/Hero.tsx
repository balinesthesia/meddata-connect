
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create nodes for the neural network
    const createNodes = (count: number) => {
      const nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1.5,
          opacity: Math.random() * 0.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
      return nodes;
    };
    
    // Create connection rays
    const createRays = (count: number, nodes: any[]) => {
      const rays = [];
      for (let i = 0; i < count; i++) {
        const startNodeIndex = Math.floor(Math.random() * nodes.length);
        let endNodeIndex;
        do {
          endNodeIndex = Math.floor(Math.random() * nodes.length);
        } while (endNodeIndex === startNodeIndex);
        
        rays.push({
          startNode: startNodeIndex,
          endNode: endNodeIndex,
          progress: Math.random(),
          speed: Math.random() * 0.01 + 0.005,
          active: true,
          opacity: Math.random() * 0.7 + 0.3,
          color: Math.random() > 0.5 ? '#a3e635' : '#ffffff',
        });
      }
      return rays;
    };
    
    // Initialize nodes and rays
    const nodeCount = window.innerWidth < 768 ? 15 : 25;
    const rayCount = window.innerWidth < 768 ? 3 : 5;
    const nodes = createNodes(nodeCount);
    const rays = createRays(rayCount, nodes);
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position
        node.x += node.speedX;
        node.y += node.speedY;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1;
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.fill();
      }
      
      // Draw connections between nearby nodes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw rays
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        const startNode = nodes[ray.startNode];
        const endNode = nodes[ray.endNode];
        
        // Update ray progress
        ray.progress += ray.speed;
        if (ray.progress >= 1) {
          ray.progress = 0;
          ray.startNode = ray.endNode;
          ray.endNode = Math.floor(Math.random() * nodes.length);
          ray.opacity = Math.random() * 0.7 + 0.3;
          ray.color = Math.random() > 0.5 ? '#a3e635' : '#ffffff';
        }
        
        // Calculate current position
        const currentX = startNode.x + (endNode.x - startNode.x) * ray.progress;
        const currentY = startNode.y + (endNode.y - startNode.y) * ray.progress;
        
        // Draw ray pulse
        const pulseRadius = 3;
        const gradient = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, pulseRadius * 3
        );
        gradient.addColorStop(0, ray.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, pulseRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = ray.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div 
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-center relative pt-20"
    >
      {/* Neural Network Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1930] to-[#0d2a55] opacity-95"
        aria-hidden="true"
      />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-down">
            <span className="inline-block py-1 px-3 mb-5 rounded-full bg-medical-lightBlue text-medical-blue text-sm font-medium">
              Medical Data Science & AI Division
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down animate-delay-100 tracking-tight">
            Pioneering AI in Anesthesiology and 
            <span className="text-medical-blue"> Critical Care</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-down animate-delay-200 max-w-3xl mx-auto">
            Medical Data Science and Artificial Intelligence Division, Udayana University
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down animate-delay-300">
            <a 
              href="#about" 
              className="px-6 py-3 rounded-lg bg-medical-blue text-white font-medium transition-all hover:shadow-lg hover:translate-y-[-2px]"
            >
              Explore Our Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-gray-300 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="rounded-full p-2 border border-gray-400 hover:border-medical-blue transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
