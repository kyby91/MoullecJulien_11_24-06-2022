import '../App.css';
import AccordionPropos from '../components/AccordionPropos';
import apropos from '../data/apropos.json';
import SmallPoster from '../components/SmallPoster';

function Apropos() {

  const faq = apropos
  const name = "SmallPoster2"

  return (
    <div className="App">
      <SmallPoster class={name}/>
      {faq.map(elm => <AccordionPropos title={elm.title} content={elm.content}/>)}
    </div>
  );
}

export default Apropos;
