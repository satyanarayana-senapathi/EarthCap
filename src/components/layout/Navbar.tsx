import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      if (location.pathname === "/") {
        const scrollPosition = window.scrollY;
        
        const sections = document.querySelectorAll("section[id]");
        
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute("id") || "";
          
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClass = scrolled
    ? "bg-forest-800/95 shadow-lg backdrop-blur-md"
    : "bg-forest-700/90 backdrop-blur-sm";

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/about", section: "about" },
    { name: "Products", path: "/products", section: "products" },
    { name: "Blog", path: "/blog", section: "blog" },
    { name: "Contact", path: "/contact", section: "contact" },
  ];

  const isActive = (path: string, section?: string) => {
    if (location.pathname !== "/" && path === location.pathname) {
      return true;
    }
    
    if (location.pathname === "/" && section && section === activeSection) {
      return true;
    }
    
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-serif text-2xl font-bold text-white">
                Nutricap<span className="text-accent">Mushrooms</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => scrollToSection(item.section || "")}
                  className={`h-16 px-3 flex items-center rounded-none text-sm font-medium transition-all duration-300 
                    ${isActive(item.path, item.section)
                      ? "text-white bg-forest-600 font-semibold shadow-md"
                      : "text-white hover:text-white hover:bg-forest-500 hover:font-semibold"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="secondary" 
                className="ml-4 bg-accent text-white hover:bg-accent/90 hover:scale-105 transition-all shadow-md" 
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-forest-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-forest-800 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => scrollToSection(item.section || "")}
              className={`block w-full px-3 py-3 text-base font-medium transition-all duration-300 
                ${isActive(item.path, item.section)
                  ? "text-white bg-forest-600 font-semibold shadow-md"
                  : "text-white hover:text-white hover:bg-forest-500 hover:font-semibold"
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="secondary" 
            className="w-full mt-2 bg-accent text-white hover:bg-accent/90 hover:scale-105 transition-all shadow-md" 
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
