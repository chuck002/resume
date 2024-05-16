import PageNavBar from '../../../../components/PageNavBar';
import PageNavBarMovil from '../../../../components/PageNavBarMovil';
import PageFooter from '../../../../components/PageFooter';
import './Skills.css'
import SkillsSection from './SkillSections';
import Skills from '../../../../assets/Data/Skills.json'
import { Typography } from '@mui/material';


function Education() {
  return (
    <>
      <div className='PageNavBarMovil'>
        <PageNavBarMovil />
      </div>
      <div className='PageNavBar'>
        <PageNavBar />
      </div>
      <div className='Container-Card-Skills'>
        <Typography variant="h4" gutterBottom>
          {Skills.languaje.spanish.title}
        </Typography>
        <SkillsSection />

      </div>
      <PageFooter />
    </>
  );
}

export default Education;