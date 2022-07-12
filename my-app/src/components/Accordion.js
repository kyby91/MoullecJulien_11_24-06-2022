import vector from '../assets/Vector.png';

const accordion= document.querySelectorAll(".contentBox");
console.log(accordion);

accordion.forEach(elm => {
    elm.addEventListener("click", () =>{
        elm.classList.toggle("active");
    })
})

function Accordion(){
    return (
    <section>
        <div className="accordion">
            <div className="contentBox">
                <div className="question">
                    <h3>jdsfjdbsfhdfh ?</h3>
                    <img src={vector} alt="vector"/> 
                </div>
                <div className="content">
                    <p>Cette propriété n'affecte que le contenu qui dépasse de la boîte englobante dans le sens de la progression en ligne. Par exemple, on ne parle pas ici du texte qui dépasserait vers le bas d'une boîte.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Accordion;