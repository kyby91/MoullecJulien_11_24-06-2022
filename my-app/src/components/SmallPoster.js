import data from '../data/home.png'

function SmallPoster(props){
    return (
        <div className="App-SmallPoster">
        <div className={props.class}>
            <img src={data} alt=''></img>
            <p>{props.content}</p>
        </div>
        </div>
    );
}

export default SmallPoster;