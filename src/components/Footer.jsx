// Importa o React
import React from "react";

// Define e exporta o componente Footer
export default function Footer() {
  return (
    // Usa as classes do Bootstrap para criar um rodapé escuro com texto centralizado
    <footer className="bg-dark text-white p-3 mt-auto">
      <div className="container text-center">
        {/* Texto do rodapé */}
        <p className="m-0">
          &copy; 2024 AppSoft - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
