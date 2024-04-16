import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Skills.css'

function Education() {
  return (
    <div>
      <>
        <PageNavBar />
            <div className="Container">
                <div className='Container-Title'>
                    <h1>Experiencia</h1>
                </div>
                <div className='Container-Card'>
                    <div className='Container-Card-Title'>
                        
                        <h3>Carta de Presentacion</h3>
                    </div>
                    <div className='Container-Card-Content'>
                        <p>Bienvenido y antes que nada, queria agradecerle por llegar hasta aqui a visualizar mi portfolio.</p>
                        <p>Soy un estudiante de la Tecnicatura de Informatica Aplicada. En el Instituto Nacional Superior del Profesorado Tecnico de la Universidad Tecnologica Nacional en Argentina.</p>
                        <p>Este porfolio fue creado para contar un poco acerca de mi y de mi camino profesional dentro de este apasionante mundo de la industria IT.</p>
                        <p>Mi nombre es Javier Oscar Luna y vivo en Tigre (Provincia de Buenos Aires en Argentina), tengo 37 años de edad y me desempeño como Software Developer desde hace mas de 2 años.</p>
                        <p>En este portfolio podras encontrar informacion acerca de mi experiencia laboral, educacion, habilidades y proyectos que he realizado.</p>
                        <p>Si estas interesado en contactarme, no dudes en hacerlo a traves de mis redes sociales o enviandome un email en la seccion de contacto...</p>
                        <p>Gracias por tu tiempo y espero que disfrutes tu recorrido por mi portfolio personal.</p>
                    </div>
                </div>

            </div>
            <PageFooter />
    </>
    </div>
  );
}

export default Education;