import vector from '../assets/Vector.png';
import { useState } from 'react';

function AccordionPropos(props){

    const [isOpen, setIsOpen] = useState(true)

    const toggleAccordion = (e) =>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
        console.log( isOpen )
    }

    return (
    <section>
        <div className="accordionpropos">
            <div className="contentPropos">
                <div className="question" onClick={ () => toggleAccordion()}>
                    <h3>{props.title}</h3>
                    <img src={vector} alt="vector"/>
                </div>
                {isOpen ?
                    <div className="content">
                    <p>{props.content}</p>
                    </div> : null
                }
            </div>
        </div>
    </section>
    );
}

export default AccordionPropos;