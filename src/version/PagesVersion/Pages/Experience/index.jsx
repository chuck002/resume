import PageNavBar from '../../../../components/PageNavBar';
import PageFooter from '../../../../components/PageFooter';
import ExperienceJson from '../../../../../src/assets/Data/Experience.json';
import './Experience.css'

function Experience() {
  console.log(ExperienceJson);
  return (
    <>
      <PageNavBar />
      <div className="Container">
        <div className='Container-Card'>
          <div className='Container-Card-Title'>
            <h3>Experiencia Laboral</h3>
          </div>
          <div className='Container-Card-Content'>
            <ul>
                {ExperienceJson.languaje.spanish.Experience.map((item, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <div><span className='Experience-empresa'>{item.Company}</span></div>
                        <div className='Lista-Experience-Title'>
                          <span className='Experience-fecha'>{item.Duration}</span>
                        </div>
                        <div className='Lista-Experience-Content'>
                          <p>{item.Description}</p>
                        </div>
                      </div>
                    </li>
                  );

                }, [])}
            </ul>
          </div>

        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Experience;