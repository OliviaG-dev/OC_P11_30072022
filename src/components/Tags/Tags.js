import PropTypes from 'prop-types'
import "./Tags.css"

const Tags = ({name}) => (
    <div className='tags'>{name}</div>
)

Tags.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Tags;