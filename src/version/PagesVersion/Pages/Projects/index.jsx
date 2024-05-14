import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Projects.css'
import ProjectsData from '../../../../assets/Data/Projects.json';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import Carousel from './CarrouselComponent';

function Projects() {
  return (
    <>
      <PageNavBar />
      <div className='Container-Projects'>
        <Typography variant="h4" gutterBottom>
          {ProjectsData.languaje.spanish.title}
        </Typography>

        <div style={{ width: '70vw', margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                <Carousel images={ProjectsData.languaje.spanish.Proyectos[0].Url_Images} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="body1" component="p">
                    Descripción de la tarjeta...
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div >
      <PageFooter />
    </>
  );
}

export default Projects;