import { services } from '../data/site'
import ArrowIcon from './ArrowIcon'
import ServiceIcon from './ServiceIcon'

export default function Services() {
  return (
    <section
      id="servicos"
      className="section services"
      aria-labelledby="titulo-servicos"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark">O que fazemos</p>
            <h2 id="titulo-servicos">
              Tudo o que seu negócio precisa para crescer no digital.
            </h2>
          </div>
          <p>
            Do primeiro acesso à evolução do projeto, criamos soluções
            estratégicas que unem boa experiência, tecnologia e objetivos
            reais de negócio.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <ServiceIcon name={service.icon} />
                <span className="service-card__number">{service.number}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services__footer">
          <div>
            <strong>Não encontrou exatamente o que procura?</strong>
            <p>
              Cada projeto tem necessidades próprias. Conte sua ideia e
              desenhamos a solução mais adequada para ela.
            </p>
          </div>
          <a className="text-link text-link--dark" href="#contato">
            Conversar sobre meu projeto <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
