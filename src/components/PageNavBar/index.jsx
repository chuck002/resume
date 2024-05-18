import { Link } from 'react-router-dom';
import MenuView from '../MenuView';
import MenuViewLanguajes from '../MenuViewLanguages';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import './PageNavBar.css';
import Home from '../../assets/Data/Home.json'
import { LanguajeContext } from '../../context/LanguajeContext';
import { useContext } from 'react';

function PageNavBar() {
    const { languaje } = useContext(LanguajeContext);
    return (
        <>
            <div className="NavBar-Container">
                <div className="NavBar-Container-Logo">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        JL
                    </Avatar></Link>
                </div>
                <div className="NavBar-Container-Menu">
                    <ul>
                        {/*<li><Typography variant="h6"><Link to="/">Inicio</Link></Typography></li>*/}
                        <li><Typography variant="h6"><Link to="/Experience">{Home[languaje].titles[1]}</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Education">{Home[languaje].titles[2]}</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Skills">{Home[languaje].titles[3]}</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Projects">{Home[languaje].titles[4]}</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData">{Home[languaje].titles[5]}</Link></Typography></li>
                        <li><Typography variant="h6"><MenuView /></Typography></li>
                        <li><Typography variant="h6"><MenuViewLanguajes /></Typography></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PageNavBar;