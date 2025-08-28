// src/pages/UsuarioCreated.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import "swiper/css";
import { buscarCEP } from "./api";
import { Routes, Route, useNavigate } from "react-router-dom";
import { criarUsuario } from "./apilaravel.jsx";
import Institutional from "./institutional";
import Delete from "./deleteuser.jsx";
import "./App.css";
import "swiper/css";

const UsuarioCreated = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Usuário Criado com Sucesso!
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Agora você pode continuar utilizando o sistema ou cadastrar outro usuário.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Voltar à Home
                </Link>
            </div>
        </div>
    );
};

export default UsuarioCreated;
