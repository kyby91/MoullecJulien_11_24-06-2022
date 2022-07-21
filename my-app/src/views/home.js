import '../App.css';

import SmallPoster from '../components/SmallPoster';
import Card from '../components/Card';
import logement from '../data/logement.json';
import { Link } from 'react-router-dom';

function Home() {

  const data = logement;
  const name = "SmallPoster1"
  const text = "Chez vous, partout et ailleurs"

  return (
    
    <div className="App">
      <SmallPoster class={name} content={text}/>
      <div className="App-holder">
        {data.map(elm => <Link key={elm.id} to={`/logement/${elm.id}`}><Card src={elm.cover} title={elm.title}/></Link>)}
      </div>
    </div>
  );
}

export default Home;


