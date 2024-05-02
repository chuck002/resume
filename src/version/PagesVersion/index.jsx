import PageNavBar from '../../components/PageNavBar';
import './PagesVersion.css';
import Avatar from '@mui/material/Avatar';
import img from '../../../src/assets/perfil_blog.jpg';
import PageFooter from '../../components/PageFooter';

function PageVersion() {

    return (
        <>
            <PageNavBar />
                <div className='Container-Title-Index'>
                    <h1>Portfolio Personal</h1>
                </div>
                <div className='Container-Card-Index'>
                    <div className='Container-Card-Title-Index'>
                        <Avatar alt="Javy Luna" src={img} sx={{ width: 300, height: 300 }} />
                        <h3>Carta de Presentacion</h3>
                    </div>
                    <div className='Container-Card-Content-Index'>
                        <p>Bienvenido y antes que nada, queria agradecerle por llegar hasta aqui a visualizar mi portfolio.</p>
                        <p>Soy un estudiante de la Tecnicatura de Informatica Aplicada. En el Instituto Nacional Superior del Profesorado Tecnico de la Universidad Tecnologica Nacional en Argentina.</p>
                        <p>Este porfolio fue creado para contar un poco acerca de mi y de mi camino profesional dentro de este apasionante mundo de la industria IT.</p>
                        <p>Mi nombre es Javier Oscar Luna y vivo en Tigre (Provincia de Buenos Aires en Argentina), tengo 37 años de edad y me desempeño como Software Developer desde hace mas de 2 años.</p>
                        <p>En este portfolio podras encontrar informacion acerca de mi experiencia laboral, educacion, habilidades y proyectos que he realizado.</p>
                        <p>Si estas interesado en contactarme, no dudes en hacerlo a traves de mis redes sociales o enviandome un email en la seccion de contacto...</p>
                        <p>Gracias por tu tiempo y espero que disfrutes tu recorrido por mi portfolio personal.</p>
                    </div>
                </div>
            <PageFooter />
        </>
    );
}

export default PageVersion;