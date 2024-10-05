// Importa o React StrictMode, que ajuda a identificar problemas potenciais na aplicação
import { StrictMode } from "react";

// Importa a função 'createRoot' para inicializar o React DOM na nova API do React 18
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação (App.jsx), que será renderizado na tela
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JavaScript do Bootstrap

// Importa o arquivo CSS personalizado da aplicação para os estilos globais
import "./index.css";

// Inicializa o ponto de entrada da aplicação no elemento com ID 'root' no HTML
createRoot(document.getElementById("root")).render(
  // O StrictMode verifica boas práticas de código e ajuda na detecção de erros
  <StrictMode>
    {/* Renderiza o componente App (que contém toda a estrutura da aplicação) */}
    <App />
  </StrictMode>
);

/**
 * StrictMode: Um componente especial do React que executa verificações adicionais e ativa avisos úteis em desenvolvimento, mas é ignorado em produção.
 * createRoot: É o ponto de partida da nova API do React 18 para manipular a renderização.
 * App: O componente raiz da aplicação, onde toda a lógica e os componentes do seu site estarão encapsulados.
 * bootstrap.min.css: Importa os estilos do Bootstrap para que você possa usar suas classes pré-definidas.
 * index.css: Um arquivo CSS personalizado onde você pode adicionar ou sobrescrever estilos específicos da sua aplicação.
 */
