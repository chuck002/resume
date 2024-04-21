import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import {useHover} from '../../../../Hooks/useHover.jsx';
import './Education.css'

function Education() {

  const { hover, onMouseEnter, onMouseLeave } = useHover();


  return (
    <>
      <PageNavBar />
      <div className="Container">
        <div className='Container-Card'>
          <div className='Container-Card-Title'>
            <h3>Educacion Formal y Cursos</h3>
          </div>
          <div className='Container-Card-Content'>
            <ul>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>2019 - Actualidad</span>
                  <span className='Experience-empresa'>Instituto Nacional Superior del Profesorado Tecnico (UTN - Argentina) Tecnico Superior en Informatica Aplicada</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Actualmente cursando las ultimas materias de la carrera con finalizacion aproximada para el año 2025.</p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>01/2021 - 11/2021</span>
                  <span className='Experience-empresa'>CIAO - ESPACIO DE IDIOMAS (Argentina)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Nivel de Ingles B1.2. Curso Certificado en Noviembre de 2021.</p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>26/01/2023</span>
                  <span className='Experience-empresa'>Curso Profesional de Git y Github (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/1557-git-github/diploma/detalle/" 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    target="_blank" rel="noopener noreferrer">Aqui</a><span hidden={hover}>DATOOOOOO!!!! 11111</span></p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>13/02/2023</span>
                  <span className='Experience-empresa'>Introduccion a la Terminal y Linea de Comandos (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/2292-terminal/diploma/detalle/" target="_blank" rel="noopener noreferrer">Aqui</a><span hidden={hover}>DATOOOOOO!!!! 222222</span></p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>12/07/2023</span>
                  <span className='Experience-empresa'>Curso Práctico de Frontend Developer (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/2477-frontend-developer-practico/diploma/detalle/" target="_blank" rel="noopener noreferrer">Aqui</a></p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>14/02/2023</span>
                  <span className='Experience-empresa'>Curso de Prework: Configuración de Entorno de Desarrollo en Linux (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/2383-prework-linux/diploma/detalle/" target="_blank" rel="noopener noreferrer">Aqui</a></p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>12/01/2023</span>
                  <span className='Experience-empresa'>Curso de FrontEnd Developer (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/2467-frontend-developer/diploma/detalle/" target="_blank" rel="noopener noreferrer">Aqui</a></p>
                </div>
              </li>
              <li>
                <div className='Lista-Experience-Title'>
                  <span className='Experience-fecha'>13/01/2023</span>
                  <span className='Experience-empresa'>Curso Basico de Javascript (Platzi)</span>
                </div>
                <div className='Lista-Experience-Content'>
                  <p>Certificacion: <a href="https://platzi.com/p/ljavy86/curso/1814-basico-javascript/diploma/detalle/" target="_blank" rel="noopener noreferrer">Aqui</a></p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
      <PageFooter />
    </>
  );
}

export default Education;