import { useState } from "react"
import propTypes from "prop-types";
import ArrowDown from "../../assets/ArrowDown.svg"
import ArrowUp from "../../assets/ArrowUp.svg"
import "./Accordion.css"

const Accordion = ({children, title, i}) => {

const [selected, setSelected] = useState(null)
const toogle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }
    setSelected(i)

}

    return(
    <section className="accordion">
        <div className="accordion_header" onClick={() => toogle(i)}>
            <div className="accordion_header_title">{title}</div>
            <div>
                {selected === i ? <img src={ArrowUp} alt={ArrowUp} /> : <img src={ArrowDown} alt={ArrowDown} />}
            </div>
        </div>
        <div className= 
        { selected === i ? "accordion__content__show" :  "accordion__content"}>
            {children}
            </div>
    </section>
    )
}

Accordion.propTypes ={
    children: propTypes.node.isRequired,
    titre: propTypes.string 
}

export default Accordion