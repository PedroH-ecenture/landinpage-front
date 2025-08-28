import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker, FaDatabase, FaPython, FaPhp, FaCogs } from "react-icons/fa";
import { SiDotnet, SiLaravel } from "react-icons/si";

export default function About() {
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

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-blue-950 transition-colors duration-500">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-300"
            >
                Sobre Mim
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10"
            >
                Desenvolvedor Full Stack com experiência em front-end e back-end, integração de APIs, automação de processos e deploy em ambientes AWS. Tenho conhecimento em React, Node.js, PHP, Laravel, C#, .NET, Python, PostgreSQL, MySQL e Docker, além de soft skills como comunicação, adaptabilidade e trabalho em equipe.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center p-6 bg-gray-100 dark:bg-blue-800 rounded-xl shadow-md"
                    >
                        <span className="text-4xl mb-2 text-blue-600 dark:text-blue-300">{skill.icon}</span>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
