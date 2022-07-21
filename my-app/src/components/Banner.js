import logo from '../assets/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Banner(){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <nav className="App-info">
                <Link to="/">Accueil</Link>
                <Link to="/Apropos">A propos</Link>
            </nav>        
        </header>
    );
}

export default Banner;