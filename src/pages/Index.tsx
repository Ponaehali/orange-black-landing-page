import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Code, Database, Monitor, Server, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="heading-gradient">Инновационный</span> IT центр для вашего бизнеса
                </h1>
                <p className="text-lg text-foreground/70 mb-8">
                  Мы помогаем компаниям внедрять современные технологии и 
                  оптимизировать рабочие процессы. Наши решения помогут 
                  вашему бизнесу выйти на новый уровень.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-itcenter-orange hover:bg-itcenter-orange-dark text-white">
                    Наши услуги
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    О нас
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="IT решения" 
                  className="max-w-full rounded-lg shadow-lg border border-border"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Мы предлагаем широкий спектр IT услуг для решения задач любой сложности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard 
                icon={Code} 
                title="Разработка ПО" 
                description="Создаем эффективные программные решения для оптимизации бизнес-процессов, мобильные и веб-приложения."
              />
              <ServiceCard 
                icon={Server} 
                title="IT Инфраструктура" 
                description="Проектирование, внедрение и поддержка надежной IT-инфраструктуры для вашего бизнеса."
              />
              <ServiceCard 
                icon={Shield} 
                title="Кибербезопасность" 
                description="Защита ваших данных и систем от угроз с помощью передовых технологий и методов безопасности."
              />
              <ServiceCard 
                icon={Database} 
                title="Управление данными" 
                description="Разработка, интеграция и оптимизация баз данных для эффективного хранения и обработки информации."
              />
              <ServiceCard 
                icon={Monitor} 
                title="IT Консалтинг" 
                description="Стратегическое планирование IT-решений и консультации по внедрению цифровых технологий в бизнес."
              />
              <ServiceCard 
                icon={Smartphone} 
                title="Мобильные решения" 
                description="Разработка кроссплатформенных мобильных приложений для расширения возможностей вашего бизнеса."
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 md:py-24 bg-itcenter-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="О нашей компании" 
                  className="rounded-lg shadow-lg border border-itcenter-black-light"
                  width={500}
                  height={400}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-itcenter-orange">О нашем IT центре</h2>
                <p className="text-gray-300 mb-6">
                  IT Центр — это команда опытных профессионалов, работающих над созданием и внедрением инновационных IT-решений для бизнеса любого масштаба.
                </p>
                <p className="text-gray-300 mb-6">
                  Мы гордимся тем, что помогаем нашим клиентам развиваться и преуспевать в цифровом мире. Наш подход основан на глубоком понимании потребностей бизнеса и современных технологических тенденций.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-itcenter-orange"></span>
                    <span>Более 50 успешных проектов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-itcenter-orange"></span>
                    <span>Команда из 30+ IT специалистов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-itcenter-orange"></span>
                    <span>10+ лет опыта в IT отрасли</span>
                  </li>
                </ul>
                <Link to="/about">
                  <Button className="bg-itcenter-orange hover:bg-itcenter-orange-dark text-white">
                    Подробнее о нас
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Готовы обсудить ваш проект или имеете вопросы? Наши специалисты всегда рады помочь!
              </p>
              <div className="flex justify-center">
                <Link to="/contacts">
                  <Button size="lg" className="bg-itcenter-orange hover:bg-itcenter-orange-dark text-white">
                    Связаться сейчас
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
