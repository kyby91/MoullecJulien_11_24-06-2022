import vector from '../assets/Vector.png';

function BigPoster(props){
    return (
        <div className="App-BigPoster">
            <img className="lightbox"src={props.src} alt={props.src}></img>
            <img className="arrowLeft" src={vector} alt="vector" />
            <img className="arrowRight" src={vector} alt="vector" />
        </div>
    );
}

export default BigPoster;