import { Scale, Briefcase, Building, Users, FileText, Shield, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, família, sucessões e questões patrimoniais.",
  },
  {
    icon: Briefcase,
    title: "Direito Empresarial",
    description: "Constituição de empresas, contratos comerciais, fusões e aquisições.",
  },
  {
    icon: Building,
    title: "Direito Imobiliário",
    description: "Compra e venda, locações, incorporações e regularização de imóveis.",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Defesa de empresas e trabalhadores em todas as instâncias.",
  },
  {
    icon: FileText,
    title: "Direito Tributário",
    description: "Planejamento fiscal, contencioso administrativo e judicial.",
  },
  {
    icon: Shield,
    title: "Direito do Consumidor",
    description: "Defesa de direitos em relações de consumo e casos complexos.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="section-padding bg-muted/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Áreas de Atuação
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Expertise em Diversas Áreas do Direito
          </h2>
          <p className="text-body">
            Nossa equipe multidisciplinar oferece soluções jurídicas completas, 
            atuando em diferentes segmentos com a mesma dedicação e excelência.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="group card-elegant p-8 hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <area.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{area.title}</h3>
              <p className="text-small mb-4">{area.description}</p>
              <a
                href="#contato"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-gold-light transition-colors"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
