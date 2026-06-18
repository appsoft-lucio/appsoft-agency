import heroImage from '../../img/Fundo-Inicio.jpg'

const principles = [
  {
    number: '01',
    title: 'Entender antes de criar',
    description:
      'Cada decisão começa pelos objetivos, pelo público e pela realidade do seu negócio.',
  },
  {
    number: '02',
    title: 'Simplificar o processo',
    description:
      'Comunicação direta, etapas bem definidas e tecnologia explicada sem complicação.',
  },
  {
    number: '03',
    title: 'Construir para evoluir',
    description:
      'Soluções rápidas, responsivas e preparadas para acompanhar os próximos passos da empresa.',
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="section about"
      aria-labelledby="titulo-sobre"
    >
      <div className="container about__grid">
        <div
          className="about__visual"
          aria-hidden="true"
          style={{ '--hero-image': `url(${heroImage})` }}
        >
          <div className="about__shape">
            <span>APP</span>
            <span>SOFT</span>
          </div>
          <div className="about__visual-copy">
            <span>Nosso ponto de partida</span>
            <p>Design com propósito. Tecnologia sem complicação.</p>
          </div>
        </div>
        <div className="about__content">
          <p className="eyebrow">Como pensamos</p>
          <h2 id="titulo-sobre">
            Mais que entregar um site, queremos construir algo que faça sentido.
          </h2>
          <div className="about__intro">
            <p>
              A AppSoft cria experiências digitais que aproximam marcas e
              pessoas. Combinamos estratégia, design e desenvolvimento para
              transformar necessidades reais em soluções claras, úteis e bem
              construídas.
            </p>
            <p>
              Trabalhamos de forma próxima e transparente, porque bons
              resultados nascem quando tecnologia e objetivos de negócio seguem
              na mesma direção.
            </p>
          </div>

          <div className="about__principles">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
