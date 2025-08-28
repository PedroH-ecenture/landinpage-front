import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker, FaDatabase, FaPython, FaPhp, FaCogs } from "react-icons/fa";
import { SiDotnet, SiLaravel } from "react-icons/si";

export default function AboutMe() {
    const skills = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNode />, name: "Node.js" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaDatabase />, name: "PostgreSQL / MySQL" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiLaravel />, name: "Laravel" },
        { icon: <SiDotnet />, name: "C# / .NET" },
        { icon: <FaCogs />, name: "DevOps / AWS" },
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
        <section id="about" className="py-20 bg-gray-50 dark:bg-blue-950 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                {/* Objetivo */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">Objetivo</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Desenvolvedor Full Stack focado em criar soluções modernas e eficientes. Experiência prática em React, Node.js, PHP, Laravel, C#, .NET, Python, PostgreSQL, MySQL e Docker, além de DevOps e deploy em AWS.
                    </p>
                </motion.div>

                {/* Experiência */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">Experiência</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="p-6 bg-white dark:bg-blue-900 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                                <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
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
                    <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">Educação</h2>
                    <div className="space-y-4">
                        {education.map((edu, idx) => (
                            <div key={idx} className="p-4 bg-gray-100 dark:bg-blue-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-100">{edu.title}</h3>
                                <p className="text-gray-500 dark:text-gray-300">{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Habilidades / Soft Skills */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">Habilidades & Aprendizados</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-blue-900 rounded-xl shadow-md hover:scale-105 transition-transform">
                                <span className="text-4xl mb-2 text-blue-600 dark:text-blue-300">{skill.icon}</span>
                                <p className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</p>
                            </div>
                        ))}
                    </div>

                    <ul className="mt-6 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {additionalInfo.map((info, idx) => (
                            <li key={idx}>{info}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
