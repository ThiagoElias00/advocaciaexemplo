import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-xl font-semibold text-background tracking-tight block mb-4">
              Martins & <span className="text-accent">Associados</span>
            </span>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Advocacia de excelência com mais de 25 anos de tradição, 
              comprometida com resultados e satisfação dos clientes.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Áreas de Atuação", "Sobre", "Equipe", "Depoimentos", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-").replace(/á/g, "a").replace(/ç/g, "c")}`}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold text-background mb-4">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {["Direito Civil", "Direito Empresarial", "Direito Trabalhista", "Direito Tributário", "Direito Imobiliário", "Direito do Consumidor"].map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-sm text-background/70 hover:text-accent transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Av. Paulista, 1000 - 12º andar</li>
              <li>Bela Vista, São Paulo - SP</li>
              <li>CEP: 01310-100</li>
              <li className="pt-2">
                <a href="tel:+551130000000" className="hover:text-accent transition-colors">
                  (11) 3000-0000
                </a>
              </li>
              <li>
                <a href="mailto:contato@martinsassociados.adv.br" className="hover:text-accent transition-colors">
                  contato@martinsassociados.adv.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Martins & Associados Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
