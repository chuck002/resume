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
                        <li><Link to="/Experience">Experience</Link></li>
                        <li><Link to="/Education">Education</Link></li>
                        <li><Link to="/Skills">Skills</Link></li>
                        <li><Link to="/PersonalData">Contacto</Link></li>
                        <li><Link to="/PersonalData">B</Link></li>
                        <li><Link to="/PersonalData">T</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default PageNavBar;