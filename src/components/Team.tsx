import { Linkedin } from "lucide-react";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const team = [
  {
    name: "Dr. Ricardo Martins",
    role: "Sócio Fundador",
    specialty: "Direito Civil e Empresarial",
    image: lawyer1,
    oab: "OAB/SP 123.456",
  },
  {
    name: "Dra. Carolina Santos",
    role: "Sócia",
    specialty: "Direito Trabalhista",
    image: lawyer2,
    oab: "OAB/SP 234.567",
  },
  {
    name: "Dr. Felipe Almeida",
    role: "Associado Sênior",
    specialty: "Direito Tributário",
    image: lawyer3,
    oab: "OAB/SP 345.678",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding bg-muted/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Nossa Equipe
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Profissionais Qualificados e Dedicados
          </h2>
          <p className="text-body">
            Contamos com advogados altamente capacitados, com formação nas 
            melhores instituições e experiência comprovada em suas áreas de atuação.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <a
                  href="#"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-accent hover:text-accent-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <h3 className="heading-card text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-accent mb-1">{member.role}</p>
              <p className="text-small">{member.specialty}</p>
              <p className="text-xs text-muted-foreground mt-2">{member.oab}</p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-gold-light transition-colors"
          >
            Ver toda a equipe →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
