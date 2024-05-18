import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './PageNavBarMovil.css';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuViewLanguajes from '../MenuViewLanguages';

function PageNavBarMovil() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="NavBar-Container-Movil">
                <div className="NavBar-Container-Logo-Movil">
                    <div>
                        <Button
                            aria-controls="menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </Button>
                        <Menu
                            id="menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{ textAlign: 'right' }}
                        >
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/" className='Menu-Container-Movil'>Inicio <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/Experience" className='Menu-Container-Movil'>Experiencia <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/Education" className='Menu-Container-Movil'>Educacion <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/Skills" className='Menu-Container-Movil'>Habilidades <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/Projects" className='Menu-Container-Movil'>Proyectos <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography variant="h7"><Link to="/PersonalData" className='Menu-Container-Movil'>Contacto <KeyboardArrowRightIcon /></Link></Typography></MenuItem>
                            <MenuItem><MenuViewLanguajes /></MenuItem>
                        </Menu>
                    </div>

                </div>
            </div>
        </>


    );
}

export default PageNavBarMovil;
