import "./Slider.css"
import ArrowLeft from "../../assets/ArrowLeft.svg"
import ArrowRight from "../../assets/ArrowRight.svg"

const BtnSlider= ({direction, moveSlide}) => {
    return (
        <button className= {direction === "next" ? "slide__btn__next" : "slide__btn__prev"} onClick={moveSlide}>
            <img src={direction === "next" ? ArrowRight : ArrowLeft} alt={direction === "next" ? "Suivant" : "precedent"}></img>
        </button>
    )
}

export default BtnSlider