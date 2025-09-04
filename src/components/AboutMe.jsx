import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker, FaDatabase, FaPython, FaPhp, FaCogs, FaJs, FaGitAlt ,FaGithub, FaAws} from "react-icons/fa";
import { SiDotnet, SiLaravel } from "react-icons/si";

export default function AboutMe({ darkMode }) {
    const skills = [
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiLaravel />, name: "Laravel" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiDotnet />, name: "C# / .NET" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaDatabase />, name: "PostgreSQL / MySQL" },
        { icon: <FaAws />, name: "DevOps / AWS" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
    ];

    const experiences = [
        {
            title: "ECENTURE — Estágio Full Stack",
            period: "Julho 2025 – Atualmente",
            desc: [
                "Desenvolvimento front-end com React (Vite + TypeScript), Tailwind e shadcn.",
                "Criação de CRUDs e APIs usando PHP e Laravel, incluindo autenticação e permissões.",
                "Desenvolvimento back-end com C# / .NET para aplicações internas.",
                "Modelagem de bancos PostgreSQL e MySQL, integração de dados.",
                "Dockerização de aplicações e deploy em AWS EC2, prática em DevOps.",
            ],
        },
    ];

    const education = [
        {
            title: "Cruzeiro do Sul Virtual — Análise e Desenvolvimento de Sistemas",
            period: "2º semestre | Conclusão prevista: 1º semestre de 2027",
        },
        { title: "Senac Franca — Técnico em Informática", period: "Concluído em 2025" },
        { title: "Ensino Médio — E. E. David Carneiro Ewbank", period: "Concluído em 2024" },
    ];

    const additionalInfo = [
        "Comunicação efetiva, adaptabilidade e resiliência em projetos complexos.",
        "Trabalho em equipe e liderança em pequenos grupos.",
        "Experiência prática em automação, DevOps e integração de APIs.",
        "Aprendizado contínuo em novas linguagens e frameworks como C#, .NET, Laravel, Python e React.",
    ];

    return (
        <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-blue-800 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                {/* Objetivo */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className={`text-4xl font-extrabold mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Objetivo</h2>
                    <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Desenvolvedor Full Stack focado em criar soluções modernas e eficientes. Experiência prática em React, Node.js, PHP, Laravel, C#, .NET, Python, PostgreSQL, MySQL e Docker, além de DevOps e deploy em AWS.
                    </p>
                </motion.div>

                {/* Experiência */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className={`text-4xl font-extrabold mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Experiência</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow ${darkMode ? 'bg-blue-900 text-gray-100' : 'bg-blue-50 text-gray-800'}`}>
                                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</span>
                                <ul className={`mt-4 list-disc list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {exp.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Educação */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className={`text-4xl font-extrabold mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Educação</h2>
                    <div className="space-y-4">
                        {education.map((edu, idx) => (
                            <div key={idx} className={`p-4 rounded-lg shadow hover:shadow-lg transition-shadow ${darkMode ? 'bg-blue-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
                                <h3 className="font-semibold">{edu.title}</h3>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-500'}>{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Habilidades / Soft Skills */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className={`text-4xl font-extrabold mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Habilidades & Aprendizados</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, idx) => (
                            <div key={idx} className={`flex flex-col items-center p-6 rounded-xl shadow-md hover:scale-105 transition-transform ${darkMode ? 'bg-blue-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
                                <span className={`text-4xl mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{skill.icon}</span>
                                <p className="font-semibold">{skill.name}</p>
                            </div>
                        ))}
                    </div>

                    <ul className={`mt-6 list-disc list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {additionalInfo.map((info, idx) => (
                            <li key={idx}>{info}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
