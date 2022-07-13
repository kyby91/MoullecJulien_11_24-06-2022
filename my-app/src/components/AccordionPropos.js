import vector from '../assets/Vector.png';

function AccordionPropos(){
    return (
    <section>
        <div className="accordion">
            <div className="contentPropos">
                <div className="question">
                    <h3>Fiabilité ?</h3>
                    <img src={vector} alt="vector"/> 
                </div>
                <div className="content">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default AccordionPropos;