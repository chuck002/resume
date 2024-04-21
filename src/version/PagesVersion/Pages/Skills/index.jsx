import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Skills.css'

function Education() {
  return (
    <>
      <PageNavBar />
      <div className="Container">
        <div className='Container-Card'>
          <div className='Container-Card-Title'>
            <h3>Conocimientos</h3>
          </div>
          <div className='Container-Card-Content'>
            <p>Lenguajes de programación.
Java, CSS (Framework Bootstrap), HTML5, c,
Javascript con Node y ReactJS y Python con Flask,
etc.
Herramientas de Desarrollo.
Manejo sistemas Linux y Windows, CLI bash, SQL,
AWS S3, ORM (Con Hibernate en SpringBoot,
SQLAlchemy en Flask y Sequelize en NodeJS).
Instalacion y Administracion Basica de Servidores
Apache
(phpMyAdmin) y MySQL, para pruebas en
localhost.
Conocimiento de sistemas de control de versiones
con Git y manejo de repositorios con Github.
Manejo basico de contenedores, con Docker.
Utilizo herramientas de metodologias Agiles tales
como monday, Jira y Trello.
Español Nativo. Ingles nivel Intermedio.</p>
          </div>

        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Education;