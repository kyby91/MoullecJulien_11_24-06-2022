import './App.css';

import Banner from './components/Banner' ;
import SmallPoster from './components/SmallPoster';
import Card from './components/Card';
import Footer from './components/Footer';
import BigPoster from './components/BigPoster';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <div className="App-holder">
        <Card/><Card/><Card/><Card/><Card/>
      </div>
      <BigPoster/>
      <Dropdown/>
      <Footer/>
    </div>
  );
}

export default App;


