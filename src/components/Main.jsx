// Importa o React
import React from "react";

import "./main.css";

// Define e exporta o componente Main
export default function Main() {
  return (
    // Usa a classe container do Bootstrap para centralizar o conteúdo
    <main className="container my-5">
      <section id="home">
        {/* Título da seção */}
        <h2>Bem-vindo à AppSoft</h2>
        {/* Texto descritivo */}
        <p>
          Nós desenvolvemos sites incríveis com Vite e Bootstrap para
          impulsionar sua presença online.
        </p>
      </section>
    </main>
  );
}
