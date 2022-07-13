import './App.css';

import Banner from './components/Banner' ;
import SmallPoster from './components/SmallPoster';
import Footer from './components/Footer';
import Accordion from './components/Accordion';

function Error() {
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default Error;


