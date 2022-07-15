import './App.css';

import Banner from '../components/Banner' ;
import SmallPoster from '../components/SmallPoster';
import Footer from '../components/Footer';

function Apropos() {
  return (
    <div className="App">
      <Banner />
      <SmallPoster/>
      <Footer/>
    </div>
  );
}

export default Apropos;
