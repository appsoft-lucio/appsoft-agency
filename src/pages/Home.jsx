// Importa o React, que é necessário para criar componentes funcionais
import React from "react";

// Importa os componentes Header, Main e Footer
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

// Define e exporta o componente funcional "Home"
export default function Home() {
  return (
    <>
      {/* Componente Header (Cabeçalho) */}
      <Header />

      {/* Componente Main (Conteúdo principal) */}
      <Main />

      {/* Componente Footer (Rodapé) */}
      <Footer />
    </>
  );
}
