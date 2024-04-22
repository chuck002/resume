import { Link } from 'react-router-dom';
import MenuView from '../MenuView';
import MenuViewLanguajes from '../MenuViewLanguages';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Experience">Experiencia</Link></li>
                        <li><Link to="/Education">Educacion</Link></li>
                        <li><Link to="/Skills">Habilidades</Link></li>
                        <li><Link to="/Projects">Proyectos</Link></li>
                        <li><Link to="/PersonalData">Contacto</Link></li>
                        <li><Link to="/PersonalData"><MenuView /></Link></li>
                        <li><Link to="/PersonalData"><MenuViewLanguajes /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PageNavBar;