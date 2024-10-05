// Importa o React, necessário para criar e usar componentes no React
import React from "react";

// Importa o Router, Routes e Route do 'react-router-dom' para gerenciamento de rotas na aplicação
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa o componente Home, que será uma das rotas disponíveis no app
import Home from "./pages/Home";

// Define e exporta o componente funcional "App", que é o ponto central da aplicação
export default function App() {
  return (
    // O Router envolve toda a aplicação para habilitar o uso de rotas
    <Router>
      {/* Define o conjunto de rotas da aplicação */}
      <Routes>
        {/* Define a rota principal ('/') e o componente que será renderizado nessa rota (Home) */}
        <Route path="/" element={<Home />} />

        {/* Você pode adicionar mais rotas aqui no futuro, se necessário */}
        {/* Exemplo:
        <Route path="/sobre" element={<About />} />
        */}
      </Routes>
    </Router>
  );
}
