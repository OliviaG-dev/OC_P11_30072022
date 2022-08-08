import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({id, cover, title}) => (
    <Link className="container__card" to= {`/detail/${id}`}>
        <div className='card'> 
            <img src={cover} alt={title} />
            <div className='overlay'></div>
            <h2>{title}</h2>
        </div>
    </Link>
)

Card.propTypes = {
    id: propTypes.string.isRequired,
    titre: propTypes.string,
    cover: propTypes.string,
}

export default Card