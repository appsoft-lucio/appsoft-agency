import heroImage from '../../img/Fundo-Inicio.jpg'
import ArrowIcon from './ArrowIcon'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="titulo-principal"
      style={{ '--hero-image': `url(${heroImage})` }}
    >
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">Estratégia · Design · Tecnologia</p>
        <h1 id="titulo-principal">
          Seu negócio merece uma presença digital que{' '}
          <span>gera resultados.</span>
        </h1>
        <p className="hero__lead">
          Criamos sites rápidos, bonitos e pensados para transformar a atenção
          do seu público em novas oportunidades.
        </p>
        <div className="hero__actions">
          <a className="button" href="#contato">
            Começar um projeto <ArrowIcon />
          </a>
          <a className="text-link" href="#servicos">
            Conheça nosso trabalho <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="container hero__footer" aria-hidden="true">
        <span>Experiências digitais sob medida</span>
        <span>Brasil · Atendimento online</span>
      </div>
    </section>
  )
}
