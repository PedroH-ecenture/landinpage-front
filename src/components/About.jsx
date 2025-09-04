import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker, FaDatabase, FaPython, FaPhp, FaCogs } from "react-icons/fa";
import { SiDotnet, SiLaravel } from "react-icons/si";

export default function About({ darkMode }) {
  const skills = [];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? "bg-blue-800 text-gray-100" : "bg-blue-50 text-gray-900"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`text-3xl font-bold text-center mb-12 ${
          darkMode ? "text-blue-300" : "text-blue-600"
        }`}
      >
        Sobre Mim
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`text-center max-w-2xl mx-auto mb-10 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Olá! Sou o Pedro, desenvolvedor Full Stack com experiência em front-end e back-end, integração de APIs, automação de processos e deploy em ambientes AWS.
        <br />
        Trabalho com um leque de linguagens e frameworks como React, Node.js, JavaScript, PHP, Laravel, C#, .NET, Python, PostgreSQL, MySQL e Docker.
        <br />
        Além da parte técnica, prezo muito por boa comunicação, adaptabilidade e colaboração em equipe.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col items-center p-6 rounded-xl shadow-md transition-colors duration-500 ${
              darkMode ? "bg-blue-800 text-gray-100" : "bg-gray-100 text-gray-800"
            }`}
          >
            <span className={`${darkMode ? "text-blue-300" : "text-blue-600"} text-4xl mb-2`}>
              {skill.icon}
            </span>
            <p className="font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
