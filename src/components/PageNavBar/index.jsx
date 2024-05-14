import { Link } from 'react-router-dom';
import MenuView from '../MenuView';
import MenuViewLanguajes from '../MenuViewLanguages';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import './PageNavBar.css';

function PageNavBar() {
    return (
        <>
            <div className="NavBar-Container">
                <div className="NavBar-Container-Logo">
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}><Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            JL
          </Avatar></Link>
            
                </div>
                <div className="NavBar-Container-Menu">
                    <ul>
                        {/*<li><Typography variant="h6"><Link to="/">Inicio</Link></Typography></li>*/}
                        <li><Typography variant="h6"><Link to="/Experience">Experiencia</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Education">Educacion</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Skills">Habilidades</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Projects">Proyectos</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData">Contacto</Link></Typography></li>
                        {/*<li><Typography variant="h6"><Link to="/PersonalData"><MenuView /></Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData"><MenuViewLanguajes /></Link></Typography></li>*/}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PageNavBar;