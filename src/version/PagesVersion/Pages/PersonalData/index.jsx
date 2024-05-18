import './PersonalData.css'
import PageNavBar from '../../../../components/PageNavBar';
import PageNavBarMovil from '../../../../components/PageNavBarMovil';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PageFooter from '../../../../components/PageFooter';
import { Typography, Card, CardContent } from '@mui/material';
import HomeJson from '../../../../assets/Data/Home.json'

import { LanguajeContext } from '../../../../context/LanguajeContext';
import { useContext } from 'react';

function PersonalData() {
  const { languaje } = useContext(LanguajeContext);

  return (
    <>
      <div className='PageNavBarMovil'>
        <PageNavBarMovil />
      </div>
      <div className='PageNavBar'>
        <PageNavBar />
      </div>
      <div className='Container-Title-Contact'>
        <Typography variant="h4" gutterBottom>
          {HomeJson[languaje].contact.title}
        </Typography>


        <div className='Container-Card-Contact'>
          <Card >
            <CardContent>

              <Avatar alt={HomeJson[languaje].image.alt} src={HomeJson[languaje].image.url} sx={{ width: 100, height: 100 }} />
              <Typography variant="h5">{HomeJson[languaje].contact.subtitle2}</Typography>
              <Typography><GitHubIcon titleAccess='/chuck002' /><Link to={HomeJson[languaje].contact.github}>{HomeJson[languaje].contact.github}</Link></Typography>
              <Typography><LinkedInIcon titleAccess='/javy-luna' /><Link to={HomeJson[languaje].contact.linkedin}>{HomeJson[languaje].contact.linkedin}</Link></Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5">{HomeJson[languaje].contact.subtitle1}</Typography>
              <Typography component="p">Name: {HomeJson[languaje].contact.name}</Typography>
              <Typography component="p">Email: {HomeJson[languaje].contact.email}</Typography>
              <Typography component="p">Phone: {HomeJson[languaje].contact.phone}</Typography>
              <Typography component="p">Linkedin: {HomeJson[languaje].contact.linkedin}</Typography>

            </CardContent>
          </Card>
        </div>
      </div>

      <PageFooter />

    </>
  );
}

export default PersonalData;