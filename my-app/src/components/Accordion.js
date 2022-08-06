import { useState } from 'react';
import vector from '../assets/Vector.png';



function Accordion(props){


    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = (e) =>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }


    // console.log(isOpen, isOpenElt)

    //{propos.taille === light && "classLigth"}
    return (
    <section>
        <div className={props.type} >
            <div className="contentBox">
                <div className="question" onClick={ () => toggleAccordion()}>
                    <h3>{props.name}</h3>
                    {isOpen ?
                           <img className="reverse" src={vector} alt="vector" />:<img src={vector} alt="vector" />
                }
                    
                </div>
                {isOpen ?
                        <div className="content">
                            <p>{props.description}</p>
                        </div> : null
                }
                
            </div>
            
        </div>
    </section>
    );
}

export default Accordion;


