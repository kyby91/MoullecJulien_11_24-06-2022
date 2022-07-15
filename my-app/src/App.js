import './App.css';

import SmallPoster from './components/SmallPoster';
import Card from './components/Card';
import BigPoster from './components/BigPoster';
import Accordion from './components/Accordion';
import AccordionPropos from './components/AccordionPropos';
import Tags from './components/Tags';
import Problem from './components/Problem';

import logement from './data/logement.json';

function App() {

  const data = logement
  return (
    <div className="App">
      <SmallPoster/>
      <div className="App-holder">
        {data.map(elm => <Card src={elm.cover} title={elm.title}/>)}
      </div>
      <BigPoster/>
      <Tags/>
      <Accordion isOpenElt={true}/>
      <AccordionPropos/>
      <Problem/>
    </div>
  );
}


export default App;


