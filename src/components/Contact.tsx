import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Av. Paulista, 1000 - 12º andar", "Bela Vista, São Paulo - SP", "CEP: 01310-100"],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(11) 3000-0000", "(11) 99999-9999"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["contato@martinsassociados.adv.br", "atendimento@martinsassociados.adv.br"],
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda a Sexta: 9h às 18h", "Sábado: 9h às 13h"],
  },
];

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Contato
            </p>
            <h2 className="heading-section text-primary-foreground mb-6">
              Entre em Contato Conosco
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              Estamos prontos para atendê-lo. Agende uma consulta ou tire suas dúvidas 
              diretamente com nossa equipe.
            </p>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground mb-1">{item.title}</p>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-primary-foreground/70">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background p-8 md:p-10 shadow-elegant">
            <h3 className="heading-card text-foreground mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    placeholder="Área de interesse"
                    className="bg-muted/50 border-border focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Descreva brevemente sua necessidade..."
                  rows={5}
                  className="bg-muted/50 border-border focus:border-accent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-navy-light text-primary-foreground"
              >
                Enviar Mensagem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
