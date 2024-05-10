import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import { Card, CardContent, Typography, Tooltip, Chip } from '@mui/material';
import EducationJson from '../../../../../src/assets/Data/Education.json';
import './Education.css'

function Education() {
  return (
    <>
      <PageNavBar />
      <div className='Container-Card-Education'>
        <Typography variant="h4" gutterBottom>
          Educacion
        </Typography>
        <div className='Container-Card-Content-Education'>
          <Card className='Container-Card-Index'>
            <CardContent className='Container-Card-Content-Index'>
              <Typography variant="h6" gutterBottom>
                {EducationJson.languaje.spanish.Education.Formal.title}
              </Typography>
              <div className='Lista-Experience-Title-Education'>
                <Chip
                  size="medium"
                  label={EducationJson.languaje.spanish.Education.Formal.data[0].Duration}
                  color={'success'}
                  className='Lista-Experience-Title-Education'
                />
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje.spanish.Education.Formal.data[0].Institution}</Typography>
              </div>
              <div className='Lista-Experience-Content-Education'>
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje.spanish.Education.Formal.data[0].Degree}</Typography>
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje.spanish.Education.Formal.data[0].Details}</Typography>
              </div>

              <Typography variant="h6" gutterBottom>
                {EducationJson.languaje.spanish.Education.Cursos.title}
              </Typography>

              {EducationJson.languaje.spanish.Education.Cursos.data.map((item, index) => {

                <span>{item.Duration}</span>
                { console.log(item.Duration) }
                return (<div key={index}>

                      <div className='Lista-Experience-Title-Education' >
                        <Chip
                          size="medium"
                          label={item.Duration}
                          color={'success'}
                          className='Lista-Experience-Title-Education'
                        />
                        <Typography component="span" className='Experience-empresa-Education'>{item.Institution}</Typography>
                      </div>
                      <div className='Lista-Experience-Content-Education'>
                        <Typography component="span" >{item.Course}</Typography>
                        <Typography component="span" >{item.Certification}</Typography>
                      </div>

                </div>
                );
              }, [])}

            </CardContent>
          </Card>
        </div>
      </div>

      <PageFooter />
    </>
  );
}

export default Education;