import { useState } from 'react';
import vector from '../assets/Vector.png';



function Accordion({isOpenElt}){

    // const accordion= document.querySelectorAll(".contentBox");
    // console.log(accordion);

    // accordion.forEach(elm => {
    //     elm.addEventListener("click", () =>{
    //         elm.classList.toggle("active");
    //     })
    // })

    const [isOpen, setIsOpen] = useState(isOpenElt)

    const toggleAccordion = (e) =>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
        console.log( isOpen )
    }


    // console.log(isOpen, isOpenElt)


    return (
    <section>
        <div className="accordion">
            <div className="contentBox">
                <div className="question">
                    <h3>Description</h3>
                    <img src={vector} alt="vector" onClick={ () => toggleAccordion()}/> 
                </div>
                {isOpen ?
                        <div className="content">
                            <p>Cette propriété n'affecte que le contenu qui dépasse de la boîte englobante dans le sens de la progression en ligne. Par exemple, on ne parle pas ici du texte qui dépasserait vers le bas d'une boîte.</p>
                        </div> : null
                }
                
            </div>
        </div>
    </section>
    );
}

export default Accordion;


