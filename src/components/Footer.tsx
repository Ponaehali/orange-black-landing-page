import { Link } from "react-router-dom";
import { Cpu, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-itcenter-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-itcenter-orange" />
              <span className="text-xl font-bold">IT Центр</span>
            </div>
            <p className="text-gray-300 mb-4">
              Современные IT-решения для вашего бизнеса. Мы помогаем компаниям расти и развиваться с помощью инновационных технологий.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-itcenter-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-itcenter-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-itcenter-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-itcenter-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-itcenter-orange transition-colors">Разработка ПО</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-itcenter-orange transition-colors">IT Консалтинг</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-itcenter-orange transition-colors">Кибербезопасность</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-itcenter-orange transition-colors">Облачные решения</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-itcenter-orange transition-colors">О нас</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-itcenter-orange transition-colors">Команда</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-itcenter-orange transition-colors">Карьера</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-itcenter-orange transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-itcenter-orange shrink-0 mt-1" />
                <span className="text-gray-300">ул. Технологическая, 42, Москва, Россия</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-itcenter-orange shrink-0" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-itcenter-orange shrink-0" />
                <span className="text-gray-300">info@itcenter.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} IT Центр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
