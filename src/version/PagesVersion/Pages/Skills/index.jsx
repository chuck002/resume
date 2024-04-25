import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Skills.css'

function Education() {
  return (
    <>
      <PageNavBar />
        <div className='Container-Card'>
          <div className='Container-Card-Title'>
            <h3>Conocimientos</h3>
          </div>
          <div className='Container-Card-Content'>
            <h1>Lenguajes de programación.</h1>
            <p><ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
            <h1>Frameworks y Librerias.</h1>
            <ul>
              <li>SpringBoot</li>
              <li>Hibernate</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
              <li>Sequelize</li>
              <li>Material UI</li>
              <li>Selenium</li>
              <li>Puppeteer</li>
            </ul>
            <h1>Base De Datos</h1>
            <ul>
            <li><h2>Relacionales</h2></li>
            <ul>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
            <li><h2>No Relacionales</h2></li>
            <ul>
              <li>MongoDB</li>
            </ul>
            </ul>
            <h1>Herramientas de Desarrollo</h1>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
              <li>Visual Studio Code</li>
              <li>Eclipse</li>
              <li>AWS S3</li>
              <li>Docker</li>
            </ul>
            <h1>Sistemas Operativos</h1>
            <ul>
              <li>Windows</li>
              <li>Linux</li>
            </ul>
            <h1>Herramientas de Gestion de Tickets</h1>
            <ul>
              <li>Monday</li>
              <li>Jira</li>
              <li>Trello</li>
            </ul></p>
          </div>

        </div>
      <PageFooter />
    </>
  );
}

export default Education;