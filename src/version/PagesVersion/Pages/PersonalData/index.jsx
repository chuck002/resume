import './PersonalData.css'
import PageNavBar from '../../../../components/PageNavBar';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PageFooter from '../../../../components/PageFooter';

import img from '../../../../assets/perfil_blog.jpg';

function PersonalData() {
  return (
    <>
      <PageNavBar />
        <div className='Container-Title'>
          <h1>Contact Info</h1>
        </div>

        <div className='Container-Card'>
          <div className='Container-Card-Left'>
          <Avatar alt="Remy Sharp" src={img} sx={{ width: 100, height: 100 }} />
            <h2>Social Networks</h2>
            <GitHubIcon titleAccess='/chuck002'/><Link to='https://www.github.com/chuck002'>https://www.github.com/chuck002</Link>
            <LinkedInIcon titleAccess='/javy-luna'/><Link to='https://www.linkedin.com/in/javy-luna'>https://www.linkedin.com/in/javy-luna</Link>
            <AlternateEmailIcon titleAccess='Email'/>
            <p>Phone: +54 011 15 6264 5087</p>
            <p>Linkedin: /javy-luna</p>
          </div>
          <div className='Container-Card-Rigth'>
          <h2>Personal Information</h2>
            <p>Name: Javier Luna</p>
            <p>Email: javylunadev@gmail.com</p>
            <p>Phone: +54 011 15 6264 5087</p>
            <p>Linkedin: /javy-luna</p>
            <h2>Address</h2>
          </div>
        </div>

      <PageFooter />

    </>
  );
}

export default PersonalData;