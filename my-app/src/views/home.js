import '../App.css';

import Banner from '../components/Banner' ;
import SmallPoster from '../components/SmallPoster';
import Card from '../components/Card';
import Footer from '../components/Footer';
import BigPoster from '../components/BigPoster';
import Accordion from '../components/Accordion';

function Home() {
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <div className="App-holder">
        <Card/><Card/><Card/><Card/><Card/>
      </div>
      <BigPoster/>
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default Home;


