import './App.css';

import Banner from './components/Banner' ;
import SmallPoster from './components/SmallPoster';
import Card from './components/Card';
import Footer from './components/Footer';
import BigPoster from './components/BigPoster';
import Dropdown from './components/Dropdown';

import logement from './data/logement.json';

function App() {

  console.log(logement)

  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <div className="App-holder">
        <Card src="test" title="Toto"> <h1>Test</h1>Mon chilldren</Card>
        {/* <Card src="toto" title="test"/> */}
        {/* <Card/><Card/><Card/><Card/> */}
      </div>
      <BigPoster/>
      <Dropdown/>
      <Footer/>
    </div>
  );
}

export default App;


