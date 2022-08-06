

function SmallPoster(props){
    return (
        <div className="App-SmallPoster">
        <div className={props.class}>
            <img src={props.src} alt=''></img>
            {props.content}
        </div>
        </div>
    );
}

export default SmallPoster;