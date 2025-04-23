import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronRight, Monitor, Code, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Cpu className="h-8 w-8 text-itcenter-orange" />
            <span className="text-xl font-bold">IT Центр</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link font-medium">Главная</Link>
          <Link to="/services" className="nav-link font-medium">Услуги</Link>
          <Link to="/about" className="nav-link font-medium">О нас</Link>
          <Link to="/contacts" className="nav-link font-medium">Контакты</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-itcenter-orange hover:bg-itcenter-orange-dark text-white">
            Связаться с нами
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col space-y-4 py-2">
            <Link to="/" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Главная</Link>
            <Link to="/services" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Услуги</Link>
            <Link to="/about" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>О нас</Link>
            <Link to="/contacts" className="nav-link font-medium py-2" onClick={() => setIsOpen(false)}>Контакты</Link>
            <Button className="bg-itcenter-orange hover:bg-itcenter-orange-dark text-white w-full justify-center mt-2">
              Связаться с нами
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
