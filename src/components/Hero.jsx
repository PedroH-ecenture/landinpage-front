import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ darkMode }) {
    return (
        <section
    id="hero"
    className="flex flex-col items-center justify-center text-center py-20 space-y-6 transition-colors duration-500"
>

            <motion.h1
                className={`text-4xl sm:text-6xl font-bold ${darkMode ? "text-blue-300" : "text-blue-700"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Pedro Henrique Ramos Rezende
            </motion.h1>

            <motion.p
                className={`text-lg sm:text-xl max-w-2xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                Desenvolvedor Fullstack — PHP e Laravel, React, C# e .NET, Docker, MySQL e PostgreSQL. Desenvolvedor com experiência prática em projetos reais e foco em boas práticas.
            </motion.p>

            <motion.div
                className="flex space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
            >
                <a href="https://github.com/PDJ-D2" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        className={`flex items-center gap-2 hover:scale-105 transition ${
                            darkMode ? "border-blue-300 text-blue-300" : "border-blue-700 text-blue-700"
                        }`}
                    >
                        <Github size={18} /> GitHub
                    </Button>
                </a>

                <a href="https://www.linkedin.com/in/pedro-henrique-ramos-rezende-828a012ba" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        className={`flex items-center gap-2 hover:scale-105 transition ${
                            darkMode ? "border-blue-300 text-blue-300" : "border-blue-700 text-blue-700"
                        }`}
                    >
                        <Linkedin size={18} /> LinkedIn
                    </Button>
                </a>

                <a href="mailto:pedrorezende0502@gmail.com">
                    <Button
                        variant="outline"
                        className={`flex items-center gap-2 hover:scale-105 transition ${
                            darkMode ? "border-blue-300 text-blue-300" : "border-blue-700 text-blue-700"
                        }`}
                    >
                        <Mail size={18} /> E-mail
                    </Button>
                </a>
            </motion.div>
        </section>
    );
}
