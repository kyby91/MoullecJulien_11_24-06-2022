function SmallPoster(props){
    return (
        <div className="App-SmallPoster">
        <div className={props.class}>
            <p>{props.content}</p>
        </div>
        </div>
    );
}

export default SmallPoster;