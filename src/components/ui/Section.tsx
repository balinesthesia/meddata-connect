
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id,
  fullWidth = false
}) => {
  return (
    <section 
      id={id}
      className={cn(
        "w-full section-padding",
        className
      )}
    >
      <div className={fullWidth ? "w-full" : "container mx-auto"}>
        {children}
      </div>
    </section>
  );
};

export default Section;
