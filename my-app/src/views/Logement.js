import '../App.css';

import { useParams} from 'react-router-dom';
import Accordion from '../components/Accordion';
import BigPoster from '../components/BigPoster';
import Tags from '../components/Tags';
import logement from '../data/logement.json';


const Logement = () => {

  function findId(element) {
    return element.id === logementId;
  }
  
  const {logementId} = useParams()
  const data = logement;
  const currentData = data.find(findId)
  const gallery = currentData.pictures
  let rate = currentData.rating
  console.log(rate);
  
  // const dataPciture = 

  for (let i = 0; i < 5; i++) {
    if (rate>0) {
      rate --
    } else {
      console.log('finit');

    }
    
  }
    
    

  return (
    <div className="App">
      <BigPoster src={gallery[0]}/>
      <div className="info">
        <h2>{currentData.title}</h2>
        <div className='info-name'>
          <p>{currentData.host.name}</p>
          <img src={currentData.host.picture} alt="Profile"></img>
        </div>
      </div>
      <div className='info-location'>{currentData.location}</div>
      <div>
        <div className='tags-holder'>{currentData.tags.map(elm => <Tags key={elm} tags={elm}/>)}</div>
        <div></div>
      </div>
      <div className="accordion-holder">
        <Accordion name={'Description'} description={currentData.description}/>
        <Accordion name={'Équipements'} description={currentData.equipments.map(elm => <li key={elm}>{elm}</li>)}/>
      </div>
    </div>
  );
}

export default Logement;
