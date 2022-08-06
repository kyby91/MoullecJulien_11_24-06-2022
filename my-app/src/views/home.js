import '../App.css';

import SmallPoster from '../components/SmallPoster';
import Card from '../components/Card';
import logement from '../data/logement.json';
import { Link } from 'react-router-dom';
import home from '../data/home.png'

function Home() {

  const data = logement;
  const name = "SmallPoster1"

  const text = <p>Chez vous, <br/> partout et ailleurs</p>

  return (
    
    <div className="App">
      <SmallPoster class={name} content={text} src={home}/>
      <div className='App-container'>
        <div className="App-holder">
          {data.map(elm => <Link key={elm.id} to={`/logement/${elm.id}`}><Card src={elm.cover} title={elm.title}/></Link>)}
        </div>
      </div>
      
    </div>
  );
}

export default Home;


