import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Projects.css'
import ProjectsData from '../../../../assets/Data/Projects.json';
import { Card, CardContent, Typography, Grid, Chip } from '@mui/material';
import Carousel from './CarrouselComponent';

function Projects() {
  return (
    <>
      <PageNavBar />
      <div className='Container-Projects'>
        <Typography variant="h4" gutterBottom>
          {ProjectsData.languaje.spanish.title}
        </Typography>

        {ProjectsData.languaje.spanish.Proyectos.map((item, index) => {
         return( 
          <div style={{ width: '70vw', margin: '0 auto' }} key={index}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Carousel images={item.Url_Images} />
                </Grid>
                <Grid item xs={12} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space_between'}}>
                <div>
                  <Typography variant="h5">
                    {item.Title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {item.Description}
                  </Typography>
                  <Typography variant="body1">
                    Repositorio: <a href={item.Url_Repository}>
                    {item.Url_Repository}
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    Creacion: {item.Created_Date}
                  </Typography>
                  <Typography variant="body2">
                    Ultima Actualizacion: {item.Last_commit}
                  </Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                  {item.Tecnologies.map((tecnology, index) => {
                    return (
                      <Typography key={index} variant="body2" style={{marginTop: '8px', marginBottom: '8px', marginRight: '8px'}}>
                        <Chip
                              size="medium"
                              label={tecnology}
                              color={'success'}
                              className='Experience-Tags-Tags'
                            />
                      </Typography>
                    )
                  })
                  }
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        )
        })
        }
        
      </div>
      
      <PageFooter />
    </>
  );
}

export default Projects;