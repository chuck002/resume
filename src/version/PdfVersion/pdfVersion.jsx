import Home from '../../assets/Data/Home.json';
import Experience from '../../assets/Data/Experience.json'
import Skills from '../../assets/Data/Skills.json'
import Education from '../../assets/Data/Education.json'
import Projects from '../../assets/Data/Projects.json'


export const htmlVersion = `<style>
.NavBar-Container{
    display: flex;
    justify-content: space-between;
    top: 0;
    position: fixed;
    height: 80px;
    background-color: rgba(100, 170, 255);
    color: rgb(0, 0, 0);
    width: 100%;
    border-radius: 4px;
    z-index : 100;
}
.NavBar-Container-Logo{
    display: flex;
    align-items: center;
    margin-left: 24px;
}
.NavBar-Container-Menu{
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 24px;
}

.NavBar-Container-Menu li{
    display: inline-block;
    padding: 0px 20px;
 }

 .NavBar-Container-Menu li:hover{
    transform: scale(1.1);
 }

 .NavBar-Container-Menu li a{
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: 700;
 }
 .NavBar-Logo{
    width: 50px;
    height: 50px;
    margin: 8px;
    padding: 8px;
    text-align: center;
    border-radius: 50%;
    border-color: white;
    border: 2px solid white;
    background-color: rgb(25, 25, 164);
    color: white;

 }

</style>
<div class="NavBar-Container">
                <div class="NavBar-Container-Logo">
                    <Link to="/"><Avatar aria-label="recipe">
                        JL
                    </Avatar></Link>
                </div>
                <div class="NavBar-Container-Menu">
                    <ul>
                        <li style="color: blue"><Typography variant="h6"><Link to="/">Inicio</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Experience">Experiencia</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Education">Educacion</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Skills">Habilidades</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/Projects">Proyectos</Link></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData">Contacto</Link></Typography></li>
                        <li><Typography variant="h6"><MenuView /></Typography></li>
                        <li><Typography variant="h6"><Link to="/PersonalData"><MenuViewLanguajes /></Link></Typography></li>
                    </ul>
                </div>
            </div>`
