import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Projects.css'

function Projects() {
  return (
    <>
        <PageNavBar />
        <div className='Container-Card'>
          <div className='Container-Card-Title'>
            <h3>Conocimientos</h3>
          </div>
          <div className='Container-Card-Content'>
            <ul>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>02/2022- Actualidad</span>
                  <span className='Experience-empresa'>Lenguajes de programación.</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Java, CSS (Framework Bootstrap), HTML5, c,
                    Javascript con Node y ReactJS y Python con Flask,
                    etc.</p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>01/2022- Actualidad</span>
                  <span className='Experience-empresa'>Pulpou SA (Argentina)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Trabajo Actualmente de manera remota en la
                    plataforma de scrapping para Brand Protection,
                    generando nuevas features y resolviendo issues en la
                    nueva libreria con JS en Node.</p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>07/2021 - 01/2022</span>
                  <span className='Experience-empresa'>Pulpou SA (Argentina)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Trabaje en el desarrollo de nuevas features y resolucion
                    de issues en su plataforma REST de Brand Protection,
                    que se encontraba compuesta de un frontEnd en
                    ReactJS y con un Backend diseñada en Python con Flask
                    y SQLAlchemy.</p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>2010 - 2019</span>
                  <span className='Experience-empresa'>Ford Argentina SA</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Me desempeñe durante 10 años como
                    operario en planta, trabajando en grupo
                    primero en la linea de producción.
                    Y luego desarrollando tareas varias, como
                    Data Entry de piezas fallidas y materiales.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      <PageFooter />
    </>
  );
}

export default Projects;