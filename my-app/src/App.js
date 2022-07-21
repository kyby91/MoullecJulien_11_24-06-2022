import './App.css';

import SmallPoster from './components/SmallPoster';
import Card from './components/Card';
import BigPoster from './components/BigPoster';
import Accordion from './components/Accordion';
import AccordionPropos from './components/AccordionPropos';
import Tags from './components/Tags';
import Problem from './components/Problem';

import logement from './data/logement.json';
import apropos from './data/apropos.json';

function App() {

  const data = logement
  const faq = apropos
  return (
    <div className="App">
      <SmallPoster/>
      <div className="App-holder">
        {data.map(elm => <Card src={elm.cover} title={elm.title}/>)}
      </div>
      <BigPoster/>
      <Tags/>
      {faq.map(elm => <AccordionPropos title={elm.title} content={elm.content}/>)}
      <Accordion isOpenElt={true}/>
      <Problem/>
    </div>
  );
}


export default App;


