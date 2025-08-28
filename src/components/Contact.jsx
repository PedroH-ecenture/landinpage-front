import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios"; // lembre-se de instalar axios: npm i axios

export default function Contact() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        cep: "",
        logradouro: "",
        complemento: "",
        unidade: "",
        bairro: "",
        localidade: "",
        uf: "",
        estado: "",
        regiao: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: "",
        mensagem: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "cpf" || name === "cep") {
            setFormData({ ...formData, [name]: value.replace(/\D/g, "") });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const formatCPF = (cpf) => {
        const nums = cpf.replace(/\D/g, "");
        if (nums.length <= 3) return nums;
        if (nums.length <= 6) return `${nums.slice(0, 3)}.${nums.slice(3)}`;
        if (nums.length <= 9) return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6)}`;
        return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6, 9)}-${nums.slice(9, 11)}`;
    };

    const formatCEP = (cep) => {
        const nums = cep.replace(/\D/g, "");
        if (nums.length <= 5) return nums;
        return `${nums.slice(0, 5)}-${nums.slice(5, 8)}`;
    };

    const handleCEPBlur = async () => {
        const cep = formData.cep.replace(/\D/g, "");
        if (cep.length !== 8) return;

        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (data.erro) {
                setErrors((prev) => ({ ...prev, cep: "CEP não encontrado" }));
                return;
            }
            setFormData((prev) => ({
                ...prev,
                logradouro: data.logradouro || "",
                complemento: data.complemento || "",
                unidade: data.unidade || "",
                bairro: data.bairro || "",
                localidade: data.localidade || "",
                uf: data.uf || "",
                ibge: data.ibge || "",
                gia: data.gia || "",
                ddd: data.ddd || "",
                siafi: data.siafi || "",
                estado: data.uf || "",
                regiao: "", // a API da ViaCEP não retorna região
            }));
            setErrors((prev) => ({ ...prev, cep: "" }));
        } catch (error) {
            setErrors((prev) => ({ ...prev, cep: "Erro ao buscar CEP" }));
        }
    };

    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>

            <form className="max-w-xl mx-auto bg-gray-100 dark:bg-blue-800 p-8 rounded-xl shadow-md space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-white dark:bg-blue-900 border border-gray-300 dark:border-blue-700 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-white dark:bg-blue-900 border border-gray-300 dark:border-blue-700 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={formatCPF(formData.cpf)}
                        onChange={handleChange}
                        maxLength={14}
                        className="w-full p-3 rounded-md bg-white dark:bg-blue-900 border border-gray-300 dark:border-blue-700 focus:ring focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        value={formatCEP(formData.cep)}
                        onChange={handleChange}
                        onBlur={handleCEPBlur}
                        maxLength={9}
                        className="w-full p-3 rounded-md bg-white dark:bg-blue-900 border border-gray-300 dark:border-blue-700 focus:ring focus:ring-blue-500"
                    />
                    {errors.cep && <p className="text-sm text-red-500 mt-1">{errors.cep}</p>}
                </div>

                {formData.logradouro && (
                    <div className="space-y-2 bg-gray-50 dark:bg-blue-900 p-3 rounded-md">
                        {[
                            "logradouro",
                            "complemento",
                            "unidade",
                            "bairro",
                            "localidade",
                            "uf",
                            "estado",
                            "regiao",
                            "ibge",
                            "gia",
                            "ddd",
                            "siafi",
                        ].map((field) => (
                            <input
                                key={field}
                                type="text"
                                name={field}
                                placeholder={field}
                                value={formData[field] || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-blue-900"
                            />
                        ))}
                    </div>
                )}

                <div>
                    <label className="block mb-1 font-semibold">Mensagem</label>
                    <textarea
                        rows="4"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-white dark:bg-blue-900 border border-gray-300 dark:border-blue-700 focus:ring focus:ring-blue-500"
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                    Enviar
                </motion.button>
            </form>

            <div className="flex justify-center gap-6 mt-10 text-2xl">
                <a href="https://github.com/PDJ-D2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pedro-henrique-ramos-rezende-828a012ba" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="mailto:pedrorezende0502@gmail.com" className="hover:text-blue-500"><FaEnvelope /></a>
            </div>
        </section>
    );
}
