import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-section relative z-10">
        <div className="max-w-3xl">
          <div className="divider-gold mb-8 animate-fade-in" />
          
          <h1 className="heading-hero text-primary-foreground mb-6 animate-slide-up">
            Excelência Jurídica com{" "}
            <span className="text-accent">Compromisso</span> e{" "}
            <span className="text-accent">Resultados</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Há mais de 25 anos defendendo os interesses dos nossos clientes com 
            dedicação, ética e conhecimento especializado em diversas áreas do Direito.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-gold-light text-accent-foreground font-medium px-8"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 hover:text-primary-foreground"
            >
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">25+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">5.000+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Casos de Sucesso</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">98%</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
