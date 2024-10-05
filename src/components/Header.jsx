// Importa o React
import React from "react";

// Importando o WhatsAppButton
import WhatsAppButton from "./WhatsAppButton";

// Define e exporta o componente Header
export default function Header() {
  return (
    // Envolvendo a barra de navegação em uma tag <header> para semântica
    <header>
      {/* Navbar do Bootstrap: fixada no topo (fixed-top), com expansibilidade em telas grandes */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <div className="container">
          {/* Logo ou nome da marca, alinhada à esquerda */}
          <a className="navbar-brand" href="#">
            AppSoft
          </a>

          {/* Botão que aparece em dispositivos móveis para expandir/colapsar o menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Ícone do botão que aparece como três barras (conhecido como "hamburger icon") */}
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Conteúdo do menu que será colapsado em telas pequenas */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            {/* Lista de navegação centralizada */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre Nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Botão do WhatsApp alinhado à direita */}
          <div className="d-none d-lg-block">
            {" "}
            {/* Mostra apenas em telas grandes */}
            <WhatsAppButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
