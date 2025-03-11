
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Team", href: "#team" },
    { name: "Journal", href: "#journal", icon: <BookOpen className="h-4 w-4 inline ml-1" /> },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-custom py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={cn("flex items-center space-x-3", 
              isScrolled ? "text-medical-blue" : "text-white"
            )}
          >
            <span className="text-xl font-semibold tracking-tight">
              MEDDSAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm link-hover transition-colors flex items-center",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.name}
                {link.icon && link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Trigger */}
          <button
            className={cn(
              "block md:hidden", 
              isScrolled ? "text-gray-700" : "text-white"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white flex flex-col pt-24 px-8 transition-all duration-500 ease-custom",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "text-3xl font-medium py-4 border-b border-gray-100 transition-all duration-300",
              "hover:pl-2 hover:text-medical-blue"
            )}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
            onClick={toggleMenu}
          >
            {link.name}
            {link.icon && React.cloneElement(link.icon as React.ReactElement, { 
              className: "h-6 w-6 inline ml-2"
            })}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
