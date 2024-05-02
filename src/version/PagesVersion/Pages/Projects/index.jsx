import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Projects.css'
import ProjectsData from '../../../../assets/Data/Projects.json';

function Projects() {
  return (
    <>
        <PageNavBar />
        <div className='Container-Projects'>
          <div className='Container-Card-Title-Projects'>
            <h3>Proyectos Personales</h3>
          </div>
          <div className='Container-Card-Content-Projects'>
            <div className='Container-Images-Projects'>
            imagen
            </div>
            <div className='Container-Readme-Projects'>
            README.md
            </div>
            
          </div>

        </div>
      <PageFooter />
    </>
  );
}

export default Projects;