function Card(props){
    return(
        <div className="Card">
            <img src={props.src} alt={props.title}></img>
            <p>{props.title}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Card;