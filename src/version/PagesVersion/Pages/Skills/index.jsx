import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import './Skills.css'
import SkillsSection from './SkillSections';


function Education() {
  return (
    <>
      <PageNavBar />
        <div className='Container-Card-Skills'>
          <SkillsSection />

        </div>
      <PageFooter />
    </>
  );
}

export default Education;