import { BottomNavigation } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function PageFooter() {
    return (
        <BottomNavigation style={{
            color: 'darkgray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
        }}>
            <div>
                <span>Javier Oscar Luna 2024</span>
            </div>
            <div>
                <span><GitHubIcon /> GitHub</span>
            </div>
            <div>
                <span><LinkedInIcon /> LinkedIn</span>
            </div>
        </BottomNavigation>
    );
}

export default PageFooter;