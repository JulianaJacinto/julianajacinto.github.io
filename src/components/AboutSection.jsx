import { useMemo } from "react";
import { BoltIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "UX/UI",
  "WordPress",
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
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-lime-800 py-16 sm:py-20 overflow-hidden" id="sobre" aria-labelledby="sobre-title">
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        
        {/* About Me */}
        <div className="space-y-2 mb-4">
          <div className="inline-flex items-center gap-3">
            <div className="w-1 h-20 bg-lime-400 rounded-full" aria-hidden="true" />
            <h2 className="text-4xl text-slate-200 md:text-5xl font-bold">
              Sobre <span className="text-lime-400">Mim</span>
            </h2>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl">
            Conheça um pouco mais sobre mim e da minha trajetória profissional!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

          {/* Image side */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-lime-500/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:blur-xl" aria-hidden="true"/>
            <div className="relative h-full rounded-2xl overflow-hidden border-4 border-lime-400/20 group-hover:border-lime-400/50 transition-all duration-300">
              <img
                src="placeholder.jpg"
                alt="Foto de perfil de Juliana Jacinto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

            {/* Content side */}
            <div className="flex flex-col justify-center space-y-5">
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <p>
                  Olá! Sou a <strong className="text-lime-200 font-semibold">Juliana Jacinto</strong> —
                  ou <em className="text-lime-300">Jukka</em> para os íntimos — uma desenvolvedora Front-End 
                  focada em criar experiências digitais envolventes, funcionais e bem estruturadas.
                </p>
                <p>
                  Atualmente curso <strong className="text-lime-200 font-semibold">Análise e Desenvolvimento de Sistemas</strong> na
                  FATEC de Cruzeiro‑SP e atuo como <strong className="text-lime-200 font-semibold">bolsista no INPE</strong> (Instituto Nacional de Pesquisas Espaciais),
                  integrando o Projeto Educação em parceria com universidades e instituições.
                </p>
                <p>
                  Minha jornada com programação começou há mais de 8 anos, explorando desde <strong className="text-lime-200 font-semibold">Python</strong> e projetos com 
                  <strong className="text-lime-200 font-semibold"> IoT</strong> (Arduino e ESP32) até o desenvolvimento web moderno. Hoje concentro meu trabalho em 
                  <strong className="text-lime-200 font-semibold"> HTML, CSS e JavaScript</strong>, aprofundando-me em frameworks 
                  como <strong className="text-lime-200 font-semibold">React</strong> e <strong className="text-lime-200 font-semibold">Next.js</strong>.
                </p>
                <p>
                  Valorizo <strong className="text-lime-200 font-semibold">códigos limpos</strong>, projetos organizados e foco em
                  <strong className="text-lime-200 font-semibold"> UX/UI</strong>, unindo lógica, estética e eficiência para criar soluções digitais que realmente fazem sentido.
                </p>
              </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#habilidades" className="inline-flex items-center gap-2 px-10 py-3 bg-lime-500 text-slate-900 hover:bg-lime-400 hover:shadow-lime-400/20 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Ver Habilidades
                <BoltIcon className="h-4 w-4" />
              </a>
              <a href="#projetos" className="inline-flex items-center gap-2 px-10 py-3 bg-slate-900 border hover:bg-lime-500/10 hover:border-lime-400 border-lime-500 text-lime-400 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Ver Projetos
                <PuzzlePieceIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}