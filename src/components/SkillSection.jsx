import { faHtml5, faCss3, faJs, faReact, faNode, faPython, faWordpress, faGit, faTailwindCss, faElementor, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

const BASE_SKILLS = [
  { name: "HTML 5", level: 95, icon: faHtml5, description: "Estruturação semântica e acessível" },
  { name: "JavaScript", level: 90, icon: faJs, description: "Interatividade e lógica" },
  { name: "React", level: 85, icon: faReact, description: "Componentes reutilizáveis" },
  { name: "CSS 3", level: 75, icon: faCss3, description: "Estilização e animações modernas" },
];

const OTHER_TECH = [
  { name: "Node.js", icon: faNode },
  { name: "Python", icon: faPython },
  { name: "PHP", icon: faMicrochip },
  { name: "Tailwind CSS", icon: faTailwindCss },
  { name: "Git", icon: faGit },
  { name: "WordPress", icon: faWordpress },
  { name: "Elementor", icon: faElementor },
  { name: "Figma", icon: faFigma },
  { name: "Arduino/ESP32", icon: faRobot },
];

// Componente para renderizar o progresso circular
function CircularProgress({ level }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
      
      {/* Background circle */}
      <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-700"/>
      
      {/* Progress circle */}
      <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="text-lime-400 transition-all duration-700"/>
    </svg>
  );
}

function SkillCard({ name, level, icon, description }) {
  return (
    <article className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-lime-400/20 hover:border-lime-400/50 hover:shadow-2xl hover:shadow-lime-500/20 transition-all duration-500 transform hover:-translate-y-2" aria-label={`${name} – ${level}%`}>

      {/* Icon */}
      <div className="mb-6">
        <FontAwesomeIcon icon={icon} className="w-10 h-10 text-lime-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true"/>
      </div>

      {/* Skill Name */}
      <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-lime-300 transition-colors duration-300">
        {name}
      </h3>

      {/* Circular Progress */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        <CircularProgress level={level} />
        <span className="absolute text-2xl font-semibold text-lime-400">
          {level}%
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>

      {/* Decorative Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-lime-400 rounded-full group-hover:w-4/5 transition-all duration-300" aria-hidden="true"/>
    </article>
  );
}

function TechCard({ name, icon }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 backdrop-blur-sm border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-lime-500/10 group transform cursor-default">
      {icon && (
        <div className="flex-shrink-0">
          <FontAwesomeIcon icon={icon} className="w-6 h-6 text-lime-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true"/>
        </div>
      )}
      <span className="text-base font-medium text-slate-300 group-hover:text-lime-300 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}


export default function SkillSection() {
  const skills = useMemo(() => BASE_SKILLS, []);
  const other = useMemo(() => OTHER_TECH, []);

  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="relative bg-gradient-to-tl from-slate-950 via-slate-900 to-lime-800 py-16 sm:py-20 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="text-4xl text-slate-200 md:text-5xl font-bold">
              Minhas<span className="text-lime-400"> Habilidades</span>
            </h2>
          </div>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-lime-400 rounded-full" aria-hidden="true" />
          </div>
          <p className="text-lg text-slate-400 mx-auto">
            Aqui estão algumas das minhas principais habilidades e tecnologias que domino, além de outras que tenho experiência e estou sempre aprendendo!
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Other Technologies Section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {other.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}