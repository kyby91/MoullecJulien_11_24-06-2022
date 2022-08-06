import '../App.css';
import Accordion from '../components/Accordion';
import data from '../data/apropos.json';
import SmallPoster from '../components/SmallPoster';
import apropos from '../data/apropos.png'

function Apropos() {

  const faq = data
  const name = "SmallPoster2"

  return (
    <div className="App">
      <SmallPoster class={name} src={apropos}/>
      <div className='Apropos-holder'>{faq.map(elm => <Accordion key={elm.title} name={elm.title} type='apropos' description={elm.content}/>)}</div>
      
    </div>
  );
}

export default Apropos;
