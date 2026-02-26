import { useMemo } from "react";
import { BoltIcon, ArrowDownOnSquareIcon  } from "@heroicons/react/24/outline";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "UX/UI",
];

function SkillTag({ children }) {
  return (
    <span className="px-4 py-2 bg-lime-700/50 backdrop-blur-sm border border-lime-400/30 text-lime-100 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}

export default function AboutSection() {
  const skills = useMemo(() => SKILLS, []);

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-lime-800 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        
        {/* About Me */}
        <div className="space-y-2 mb-4" id="sobre">
          <div className="inline-flex items-center gap-3">
            <div className="w-1 h-10 bg-lime-400 rounded-full" aria-hidden="true" />
            <h2 className="text-4xl md:text-4xl font-bold  text-slate-200 tracking-tight">
              Sobre Mim
            </h2>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl">
            Conheça um pouco mais sobre mim e da minha trajetória profissional!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-80 md:h-96 relative border-4 rounded-lg border-lime-500 overflow-hidden shadow-2xl shadow-lime-400/70 animate-fadeIn">
            <img 
              src="placeholder.jpg" 
              alt="Foto de perfil" 
              className="w-full h-full object-cover object-center filter grayscale opacity-90 transition-opacity duration-300 hover:opacity-100" 
              loading="lazy"
            />
          </div>

          {/* Content side */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2 text-base sm:text-base md:text-base leading-relaxed text-slate-300">
              <p>
                Olá! Sou a <strong className="text-lime-100 font-semibold">Juliana Jacinto</strong>,
                ou <em className="italic text-lime-200">Jukka</em> para os íntimos, uma desenvolvedora front‑end apaixonada
                por criar experiências digitais envolventes e funcionais.
              </p>

              <p>
                Atualmente, estou terminando minha graduação de <strong className="text-lime-100 font-semibold">Análise e Desenvolvimento de Sistemas </strong> 
                e sou bolsista no Instituto Nacional de Pesquisas Espaciais <strong className="text-lime-100 font-semibold">(INPE)</strong>, participando do 
                Projeto Educação em parceria com faculdades, universidades e instituições do estado de São Paulo.
              </p>

              <p>
                Trabalho com códigos limpos, projetos organizados, foco em <strong className="text-lime-100 font-semibold">UX/UI</strong>,
                estruturas funcionais e responsivas para garantir projetos visuais impactantes
                e de alta performance.
              </p>
            </div>

            {/* skills list */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="flex gap-3 flex-wrap">
              <a href="JulianaJacinto_currículo2026.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-12 md:px-14 py-2.5 md:py-3 bg-lime-500 text-slate-900 hover:bg-lime-400 hover:shadow-lime-400/20 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" aria-label="Download currículo em PDF">
                Baixar Currículo
                <ArrowDownOnSquareIcon  className="h-4 w-4" />
              </a>
              <a href="#projetos" className="inline-flex items-center gap-2 px-12 md:px-14 py-2.5 md:py-3 bg-slate-900 border hover:bg-lime-500/10 hover:border-lime-400 border-lime-500 text-lime-400 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Ver Projetos
                <BoltIcon className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}