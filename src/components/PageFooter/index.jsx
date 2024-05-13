import './PageFooter.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import HomeJson from '../../assets/Data/Home.json';

function PageFooter() {
    return (
                <div className='Footer-Container-Menu'>
                    <div>
                    <Typography component="span">Javier Oscar Luna 2024</Typography>
                    </div>
                    <div>
                    <a href={HomeJson.spanish.contact.github}><Typography component="span"><GitHubIcon /> GitHub</Typography></a>
                    </div>
                    <div>
                    <a href={HomeJson.spanish.contact.linkedin}><Typography component="span"><LinkedInIcon /> LinkedIn</Typography></a>
                    </div>
                </div>
    );
}

export default PageFooter;