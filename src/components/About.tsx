import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  "Ética e transparência em todas as relações",
  "Compromisso com resultados e excelência",
  "Atendimento personalizado e humanizado",
  "Atualização constante e expertise técnica",
];

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Sobre o Escritório
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Tradição e Inovação a Serviço da Justiça
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-body mb-6">
              Fundado em 1998, o escritório Martins & Associados nasceu com a missão 
              de oferecer advocacia de excelência, combinando conhecimento jurídico 
              aprofundado com um atendimento próximo e personalizado.
            </p>
            <p className="text-body mb-8">
              Ao longo de mais de duas décadas, construímos uma sólida reputação 
              baseada em resultados consistentes, atuando tanto no contencioso quanto 
              no consultivo, sempre com foco na satisfação dos nossos clientes.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-navy-light text-primary-foreground"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-elegant p-8 text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">25+</p>
              <p className="text-sm text-muted-foreground">Anos de Atuação</p>
            </div>
            <div className="card-elegant p-8 text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">15</p>
              <p className="text-sm text-muted-foreground">Advogados Especialistas</p>
            </div>
            <div className="card-elegant p-8 text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">5k+</p>
              <p className="text-sm text-muted-foreground">Casos Atendidos</p>
            </div>
            <div className="card-elegant p-8 text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
