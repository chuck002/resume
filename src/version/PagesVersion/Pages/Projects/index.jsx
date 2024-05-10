import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Projects.css'
import ProjectsData from '../../../../assets/Data/Projects.json';
import { Card, CardContent, Typography, Tooltip, Chip } from '@mui/material';

function Projects() {
  return (
    <>
        <PageNavBar />
        <div className='Container-Projects'>
        <Typography variant="h4" gutterBottom>
            <h3>Proyectos Personales</h3>
          </Typography>
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