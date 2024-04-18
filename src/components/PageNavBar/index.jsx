import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
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
                        <li><Link to="/PersonalData"><WebIcon /></Link></li>
                        <li><Link to="/PersonalData"><LanguageIcon /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default PageNavBar;