import { useState } from 'react';
import vector from '../assets/Vector.png';



function Accordion(props){

    // const accordion= document.querySelectorAll(".contentBox");
    // console.log(accordion);

    // accordion.forEach(elm => {
    //     elm.addEventListener("click", () =>{
    //         elm.classList.toggle("active");
    //     })
    // })

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = (e) =>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
        console.log( isOpen )
    }


    // console.log(isOpen, isOpenElt)

    //{propos.taille === light && "classLigth"}
    return (
    <section>
        <div className="accordion">
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


