import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import ExperienceJson from '../../../../../src/assets/Data/Experience.json';
import { Card, CardContent, Typography, Tooltip } from '@mui/material';
import './Experience.css'

function Experience() {
  console.log(ExperienceJson);
  return (
    <>
      <PageNavBar />
      <div className='Container-Card-Experience'>
        <Typography variant="h4" gutterBottom>
          Experiencia
        </Typography>
        <div className='Container-Card-Content-Experience'>
          <ul>
            {
              ExperienceJson.languaje.spanish.Experience.reverse().map((item, index) => {
                return (
                  <Card key={index} className='Experience-empresa-Experience'>
                    <CardContent>
                      <Typography variant="h6">{item.Company}</Typography>
                      <Typography component="span">{item.Duration} <br /></Typography>

                      <Typography component="span">{item.Description} <br /></Typography>
                      <Typography component="span" className='Experience-Tags-Experience'>
                        {item.tecnologies.map((item, index) => {
                          return (
                            <Tooltip key={index} title={item.description} arrow>
                              <Typography component="span" className='Experience-Tags-Item-Experience'>{item} </Typography>
                            </Tooltip>
                          );
                        }, [])}
                      </Typography>
                    </CardContent>
                  </Card>
                );

              }, [])}
          </ul>
        </div>

      </div>
      <PageFooter />
    </>
  );
}

export default Experience;