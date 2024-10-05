import React from "react";
import "./WhatsAppButton.css"; // Importar o CSS do botão

const WhatsAppButton = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${5531988047534}`} // Usar a propriedade phoneNumber para o link
      className="btn-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contato
    </a>
  );
};

export default WhatsAppButton;
