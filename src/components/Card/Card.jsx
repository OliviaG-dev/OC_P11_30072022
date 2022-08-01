import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({id, cover, title}) => (
    <Link to= {`/detail/${id}`}>
        <div></div>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
    </Link>
)

Card.propTypes = {
    id: propTypes.string.isRequired,
    titre: propTypes.string,
    cover: propTypes.string,
}

export default Card