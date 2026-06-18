import logoImage from '../../img/logo-appsoft-orange.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <img
            src={logoImage}
            alt="AppSoft"
            width="720"
            height="320"
            loading="lazy"
            decoding="async"
          />
        </a>
        <p>© {new Date().getFullYear()} AppSoft. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
