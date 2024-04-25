import './PageFooter.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function PageFooter() {
    return (
                <div className='Footer-Container-Menu'>
                    <div>
                        <span>Javier Oscar Luna 2024</span>
                    </div>
                    <div>
                        <span><GitHubIcon /> GitHub</span>
                    </div>
                    <div>
                        <span><LinkedInIcon /> LinkedIn</span>
                    </div>
                </div>
    );
}

export default PageFooter;