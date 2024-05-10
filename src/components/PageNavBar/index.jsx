import { Link } from 'react-router-dom';
import MenuView from '../MenuView';
import MenuViewLanguajes from '../MenuViewLanguages';
import { Typography } from '@mui/material';
import './PageNavBar.css';

function PageNavBar() {
    return (
        <>
            <div className="NavBar-Container">
                <div className="NavBar-Container-Logo">
                    <h1 className='NavBar-Logo'>JL</h1>
                </div>
                <div className="NavBar-Container-Menu">
                    <ul>
                        <li><Typography variant="h6"><Link to="/">Inicio</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Experience">Experiencia</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Education">Educacion</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Skills">Habilidades</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Projects">Proyectos</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData">Contacto</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData"><MenuView /></Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData"><MenuViewLanguajes /></Link></Typography></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PageNavBar;