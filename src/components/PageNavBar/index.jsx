import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import './PageNavBar.css';
import { AccessAlarm } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PageNavBar() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton 
                    size='medium' 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    sx = {{ mr: 2 }}
                    >
                    <AccessAlarm />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" >Home</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/Experience">Experience</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/Education">Education</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/Skills">Skills</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/Languages">Languages</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/PersonalData">Contacto</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default PageNavBar;