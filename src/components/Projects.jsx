import { motion } from "framer-motion";

const projects = [
    { title: "Landing Page Moderna", desc: "Landing responsiva construída com Tailwind + React.", link: "https://github.com/PDJ-D2" },
    { title: "API com Node.js", desc: "API RESTful usando Express, JWT e PostgreSQL.", link: "https://github.com/PDJ-D2" },
    { title: "Dashboard Analítica", desc: "Dashboard com gráficos dinâmicos e dark mode.", link: "https://github.com/PDJ-D2" },
];

export default function Projects({ darkMode }) {
    return (
        <section
    id="projects"
    className="py-20 transition-colors duration-500"
>

            <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>Projetos</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((proj, idx) => (
                    <motion.a
                        key={idx}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                            className="rounded-xl shadow-md overflow-hidden transition-colors"

                    >
                        <div className="w-full h-48 md:h-40 lg:h-48 bg-gray-200">
                            {proj.img && <img src={proj.img} alt={proj.title} className="w-full h-full object-cover block" loading="lazy" />}
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
                            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{proj.desc}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
