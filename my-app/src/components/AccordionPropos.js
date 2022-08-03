import vector from '../assets/Vector.png';
import { useState } from 'react';

function AccordionPropos(props){

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = (e) =>{
        isOpen ? setIsOpen(false) : setIsOpen(true);
        console.log( isOpen )
    }

    return (
    <div className='apropos'>
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
    </div>
    );
}

export default AccordionPropos;