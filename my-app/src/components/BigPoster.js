import { useState } from 'react';
import vector from '../assets/Vector.png';

function BigPoster(slides){
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides.src[currentIndex]})`
    };

    const Previous = (e) =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.src.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const Next = () => {
        const isLastSlide = currentIndex === slides.src.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
   
    

    return (
        <div className="App-BigPoster">
            <div style={slideStyles}>
                {slides.src.length > 1 &&
                    <><img className="arrowLeft" src={vector} alt="vector" onClick={() => Previous()} /><img className="arrowRight" src={vector} alt="vector" onClick={() => Next()} /></>
                }
            </div>
            <div className='position'>{currentIndex + 1}/{slides.src.length}</div>
        </div>
    );
}

export default BigPoster;
