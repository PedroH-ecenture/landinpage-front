import { FaMoon, FaSun } from "react-icons/fa";


export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`flex justify-between items-center py-6 px-6 md:px-12 shadow-md sticky top-0 z-50 transition-colors duration-500 ${darkMode ? 'bg-blue-950' : 'bg-blue-200'}`}>
      <h1 className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Portfólio — Pedro Henrique
      </h1>


      <div className="flex items-center gap-3">
        <nav className="hidden md:flex gap-6 mr-4 text-sm font-medium">
          <a href="#hero" className={`hover:underline ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Home</a>
          <a href="#about" className={`hover:underline ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Sobre</a>
          <a href="#projects" className={`hover:underline ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Projetos</a>
          <a href="#contact" className={`hover:underline ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Contato</a>
        </nav>


        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-transform hover:scale-105 ${darkMode ? 'bg-blue-800' : 'bg-white'}`}
          aria-label="Alternar modo escuro"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
        </button>
      </div>
    </header>
  );
}