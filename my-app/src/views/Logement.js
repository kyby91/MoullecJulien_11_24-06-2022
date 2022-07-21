import '../App.css';

import { useParams} from 'react-router-dom';
import Accordion from '../components/Accordion';


const Logement = () => {

    const {logementId} = useParams()
    
    

  return (
    <div className="App">
        <div>

        </div>
      <p>OK {logementId}</p>
      <div>
        <Accordion name={'Description'}/>
        <Accordion name={'Équipements'}/>
      </div>
    </div>
  );
}

export default Logement;
