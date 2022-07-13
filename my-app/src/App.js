import './App.css';

import Banner from './components/Banner' ;
import SmallPoster from './components/SmallPoster';
import Card from './components/Card';
import Footer from './components/Footer';
import BigPoster from './components/BigPoster';
import Accordion from './components/Accordion';
import AccordionPropos from './components/AccordionPropos';
import Tags from './components/Tags';

import logement from './data/logement.json';

function App() {

  const logi = logement[0].title
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <div className="App-holder">
        <Card src={logi} title={logi}> <h1>Test</h1></Card>
        {/* <Card src="toto" title="test"/> */}
        {/* <Card/><Card/><Card/><Card/> */}
      </div>
      <BigPoster/>
      <Tags/>
      <Accordion/>
      <AccordionPropos/>
      <Footer/>
    </div>
  );
}


export default App;


