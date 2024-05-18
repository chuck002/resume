import PageNavBar from '../../../../components/PageNavBar';
import PageNavBarMovil from '../../../../components/PageNavBarMovil';
import PageFooter from '../../../../components/PageFooter';
import { Card, CardContent, Typography, Tooltip, Chip } from '@mui/material';
import EducationJson from '../../../../../src/assets/Data/Education.json';
import './Education.css'
import { useContext } from 'react';
import { LanguajeContext } from '../../../../context/LanguajeContext';

function Education() {
  const { languaje } = useContext(LanguajeContext);
  return (
    <>
      <div className='PageNavBarMovil'>
        <PageNavBarMovil />
      </div>
      <div className='PageNavBar'>
        <PageNavBar />
      </div>
      <div className='Container-Card-Education'>
        <Typography variant="h4" gutterBottom>
          {EducationJson.languaje[languaje].Education.title}
        </Typography>
        <div className='Container-Card-Content-Education'>

          <Typography variant="h6" gutterBottom>
            {EducationJson.languaje[languaje].Education.Formal.title}
          </Typography>
          <Card className='Container-Card-Index'>
            <CardContent >
              <div className='Lista-Experience-Title-Education'>
                <Chip
                  size="medium"
                  label={EducationJson.languaje[languaje].Education.Formal.data[0].Duration}
                  color={'success'}
                  className='Lista-Experience-Title-Education'
                />
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje[languaje].Education.Formal.data[0].Institution}</Typography>
              </div>
              <div className='Lista-Experience-Content-Education'>
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje[languaje].Education.Formal.data[0].Degree}</Typography>
                <Typography component="span" className='Experience-empresa-Education'>{EducationJson.languaje[languaje].Education.Formal.data[0].Details}</Typography>
              </div>
            </CardContent>
          </Card>

          <Typography variant="h6" gutterBottom>
            {EducationJson.languaje[languaje].Education.Cursos.title}
          </Typography>


          {EducationJson.languaje[languaje].Education.Cursos.data.map((item, index) => {


            return (<div key={index}>
              <Card className='Container-Card-Index'>
                <CardContent>
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

                </CardContent>
              </Card>
            </div>
            );
          }, [])}


        </div>
      </div>

      <PageFooter />
    </>
  );
}

export default Education;