import { Link } from 'react-router-dom';
import './PageNavBar.css';

function PageNavBar() {
    return (
        <>
        <div className="NavBar">
            <div className="NavBar-Container">
                <div className="NavBar-Container-Logo">
                    <h1>Logo</h1>
                </div>
                <div className="NavBar-Container-Menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Experience">Experiencia</Link></li>
                        <li><Link to="/Education">Educacion</Link></li>
                        <li><Link to="/Skills">Habilidades</Link></li>
                        <li><Link to="/Projects">Proyectos</Link></li>
                        <li><Link to="/PersonalData">Contacto</Link></li>
                        <li><Link to="/PersonalData">TIPO</Link></li>
                        <li><Link to="/PersonalData">LENGUA</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default PageNavBar;