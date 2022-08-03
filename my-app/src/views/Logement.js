import '../App.css';
import StarRed from '../assets/StarRed.png';
import StarWhite from '../assets/StarWhite.png';

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
  console.log(gallery);
  

  let render = ()=> {
    const items = []
    for (let i = 0; i < 5; i++) {
      if (rate>0) {
        rate--
        items.push(<img src={StarRed} className="star" alt="logo" key={items}/>)
      } else {
        items.push(<img src={StarWhite} className="star" alt="logo" key={items}/>)
      }
      
    }
    return(
      <div className='star-holder'>{items}</div>
    )
  }
  
    
    

  return (
    <div className='logement'>
      <BigPoster src={gallery}/>
      <div className='info-holder'>
        <div className="info">
          <h2>{currentData.title}</h2>
          <div className='info-location'>{currentData.location}</div>
          <div className='tags-holder'>{currentData.tags.map(elm => <Tags key={elm} tags={elm}/>)}</div>        
        </div>
      
        <div className='info-short'>
          <div className='info-name'>
            <p>{currentData.host.name}</p>
            <img src={currentData.host.picture} alt="Profile"></img>
          </div>
          {render()} 
        </div>
      </div>
      
      <div className="accordion-holder">
        <Accordion name={'Description'} description={currentData.description}/>
        <Accordion name={'Équipements'} description={currentData.equipments.map(elm => <li key={elm}>{elm}</li>)}/>
      </div>
    </div>
  );
}

export default Logement;
