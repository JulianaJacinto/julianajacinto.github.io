import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

const BASE_SKILLS = [
  { name: "HTML 5", level: 90, icon: faHtml5 },
  { name: "CSS 3", level: 85, icon: faCss3 },
  { name: "JavaScript", level: 75, icon: faJs },
  { name: "React", level: 85, icon: faReact },
];

const OTHER_TECH = ["PHP", "Python", "Node.js", "NPM", "WordPress"];

function SkillCard({ name, level, icon }) {
  return (
    <article className="relative flex flex-col items-center" aria-label={`${name} – ${level}%`}>
      <div className="text-lime-400 mb-2">
        <FontAwesomeIcon icon={icon} className="w-10 h-10" aria-hidden="true" />
      </div>
      <dt className="text-lg font-semibold text-slate-100">{name}</dt>
      <dd className="w-full mt-2">
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-lime-500 transition-all duration-500"
            style={{ width: `${level}%` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={level}
          />
        </div>
      </dd>
    </article>
  );
}

export default function SkillSection() {
  const skills = useMemo(() => BASE_SKILLS, []);
  const other = useMemo(() => OTHER_TECH, []);

  return (
    <section
      id="habilidades"
      aria-labelledby="habilidades-title"
      className="bg-gradient-to-t from-slate-950 via-slate-900 to-lime-800 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <h2
              id="habilidades-title"
              className="text-4xl font-bold text-slate-200 tracking-tight"
            >
              Minhas Habilidades
            </h2>
            <div className="w-10 h-1 bg-lime-400 rounded-full" aria-hidden="true" />
          </div>
          <p className="mt-2 text-lg text-slate-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino e utilizo no meu dia a dia como
            desenvolvedora front‑end.
          </p>
        </header>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </dl>

        <div className="mt-16 text-slate-300">
          <p className="font-semibold mb-2">
            Outras linguagens e frameworks que tenho experiência:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            {other.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
