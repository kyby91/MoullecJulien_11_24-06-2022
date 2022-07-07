import './App.css';

import Banner from './components/Banner' ;
import SmallPoster from './components/SmallPoster';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <div className="App-holder">
        <Card/><Card/><Card/>
      </div>
    </div>
  );
}

export default App;


