import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import ExperienceJson from '../../../../../src/assets/Data/Experience.json';
import './Experience.css'

function Experience() {
  console.log(ExperienceJson);
  return (
    <>
      <PageNavBar />
        <div className='Container-Card-Experience'>
          <div className='Container-Card-Title-Experience'>
            <h3>Experiencia Laboral</h3>
          </div>
          <div className='Container-Card-Content-Experience'>
            <ul>
                {
                  ExperienceJson.languaje.spanish.Experience.reverse().map((item, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <div><span className='Experience-empresa-Experience'>{item.Company}</span></div>
                        <div className='Lista-Experience-Title-Experience'>
                          <span className='Experience-fecha-Experience'>{item.Duration}</span>
                        </div>
                        <div className='Lista-Experience-Content-Experience'>
                          <p>{item.Description}</p>
                        </div>
                        <div className='Experience-Tags-Experience'>
                          <p>{
                            item.tecnologies.map((item, index) => {
                            return (
                              <span key={index} className='Experience-Tags-Item-Experience'>👉🏼{item}</span>
                            );
                          },[])}</p>
                        </div>
                      </div>
                    </li>
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