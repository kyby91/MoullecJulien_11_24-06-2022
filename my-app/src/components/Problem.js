import { Link } from 'react-router-dom';

function Problem(){
    return(
        <div className="error-container">
            <div className="error-404">404</div>
            <div className="error-content">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/"><div className="error-home">Retourner sur la page d’accueil</div></Link>
            
        </div>
    )
}

export default Problem;