import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const testimonials = [
  {
    quote: "O escritório Martins & Associados demonstrou excepcional competência e dedicação no meu caso. A equipe foi transparente em cada etapa do processo e o resultado superou minhas expectativas.",
    author: "Carlos Eduardo Silva",
    role: "CEO, Tech Solutions",
    image: lawyer1,
  },
  {
    quote: "Profissionalismo impecável e atenção aos detalhes. Senti-me acolhida desde o primeiro contato. Recomendo fortemente para qualquer questão jurídica empresarial.",
    author: "Maria Helena Costa",
    role: "Diretora, Grupo Horizonte",
    image: lawyer2,
  },
  {
    quote: "Trabalhamos com o escritório há mais de 10 anos em diversas questões tributárias. A expertise e o comprometimento da equipe são diferenciados no mercado.",
    author: "Roberto Mendes",
    role: "CFO, Industrial Brasil",
    image: lawyer3,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-section">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Depoimentos
            </p>
            <h2 className="heading-section text-foreground">
              O Que Nossos Clientes Dizem
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver todos
          </a>
        </div>

        {/* Main Testimonial */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-2">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].author}
              className="w-full max-w-sm mx-auto aspect-[3/4] object-cover grayscale"
            />
          </div>
          <div className="lg:col-span-3">
            <Quote className="w-12 h-12 text-accent/30 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="mb-8">
              <p className="font-semibold text-foreground">{testimonials[current].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center px-6 py-3 border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-border pt-8">
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-foreground" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
          {testimonials.map((t, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer p-6 transition-all duration-300 ${
                index === current
                  ? "bg-muted/50 border-l-2 border-accent"
                  : "hover:bg-muted/30"
              }`}
            >
              <p className="text-small italic mb-4 line-clamp-3">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
