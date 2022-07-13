import logement from '../data/logement.json';

console.log(logement);
const logi = logement
console.log(logi);

function Card(props){
    logi[0].title = props.title;
    return(
        <div className="Card">
            <img src={props.src} alt={props.title}></img>
            <p>{props.title}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Card;