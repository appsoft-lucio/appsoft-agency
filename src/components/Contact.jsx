import { whatsappUrl } from '../data/site'
import ArrowIcon from './ArrowIcon'

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.3 2.7 1.8 4.2 4.5 4.5" />
      <path d="M9.2 8.3 8.5 9.7c.7 2.5 2.6 4.4 5.1 5.1l1.4-.7" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="contact"
      aria-labelledby="titulo-contato"
    >
      <div className="container contact__inner">
        <div className="contact__content">
          <p className="eyebrow">Seu próximo projeto começa aqui</p>
          <h2 id="titulo-contato">
            Vamos transformar sua ideia em uma experiência digital de verdade.
          </h2>
          <p>
            Conte o que você precisa, em que momento seu negócio está e aonde
            quer chegar. A primeira conversa é simples, direta e sem
            compromisso.
          </p>

          <ul className="contact__benefits" aria-label="Como funciona o contato">
            <li>
              <span aria-hidden="true">✓</span>
              Entendimento inicial do projeto
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Orientação sobre a melhor solução
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Próximos passos claros e transparentes
            </li>
          </ul>
        </div>

        <div className="contact__card">
          <span className="contact__status">
            <span aria-hidden="true" />
            Atendimento online
          </span>
          <div className="contact__icon">
            <WhatsAppIcon />
          </div>
          <h3>Fale diretamente com a AppSoft</h3>
          <p>
            Envie uma mensagem pelo WhatsApp e conte um pouco sobre seu projeto.
          </p>
          <a
            className="button button--light"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar conversa <ArrowIcon />
          </a>
          <small>Respondemos assim que possível em horário comercial.</small>
        </div>
      </div>
    </section>
  )
}
