import propTypes from "prop-types";
import "./StarsRating.css"
import Stars from "../../assets/Stars.svg";
import StarsActive from "../../assets/StarsActive.svg";

const StarsRating = ({rating}) => {
    const stars = [1,2,3,4,5]

    return (
        <aside className="rating">
            {
                stars.map((index) => {                 
                    return <img src={index <= rating ? StarsActive : Stars} 
                                key={index} 
                                className="rating__img" 
                                alt="Star rating">
                            </img>
                })
            }
        </aside>
    )
}

StarsRating.propTypes = {
    rating: propTypes.string.isRequired,
}

export default StarsRating
