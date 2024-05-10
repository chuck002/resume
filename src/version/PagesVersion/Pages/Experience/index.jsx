import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import ExperienceJson from '../../../../../src/assets/Data/Experience.json';
import { Card, CardContent, Typography, Tooltip, Chip } from '@mui/material';
import './Experience.css'

function Experience() {
  const reverseExperience = ExperienceJson.languaje.spanish.Experience.map((element, index, arr) => {
    const reverseIndex = arr.length - index - 1;
    return arr[reverseIndex];
  });
  return (
    <>
      <PageNavBar />
      <div className='Container-Card-Experience'>
        <Typography variant="h4" gutterBottom>
          {ExperienceJson.languaje.spanish.title}
        </Typography>
        <div className='Container-Card-Content-Experience'>

          {

            reverseExperience.map((item, index) => {
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
                            <Chip
                              size="medium"
                              label={item}
                              color={'success'}
                              className='Experience-Tags-Tags'
                            />
                          </Tooltip>
                        );
                      }, [])}
                    </Typography>
                  </CardContent>
                </Card>
              );

            }, [])}
        </div>

      </div>
      <PageFooter />
    </>
  );
}

export default Experience;