import './PageFooter.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';

function PageFooter() {
    return (
                <div className='Footer-Container-Menu'>
                    <div>
                    <Typography component="span">Javier Oscar Luna 2024</Typography>
                    </div>
                    <div>
                    <Typography component="span"><GitHubIcon /> GitHub</Typography>
                    </div>
                    <div>
                    <Typography component="span"><LinkedInIcon /> LinkedIn</Typography>
                    </div>
                </div>
    );
}

export default PageFooter;