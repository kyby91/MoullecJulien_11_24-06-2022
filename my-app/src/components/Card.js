function Card(props){
    return(
        <div className="Card">
            <div></div>
            <img src={props.src} alt={props.title}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;