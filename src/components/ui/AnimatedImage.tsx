
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div 
        className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000 ease-out-expo",
          isLoaded ? "opacity-100" : "opacity-0",
          isInView ? "scale-100 blur-0" : "scale-105 blur-[5px]"
        )}
        onLoad={handleImageLoad}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default AnimatedImage;
