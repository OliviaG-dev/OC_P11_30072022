import PropTypes from 'prop-types';
import "./Header.css"


const Header = ({text, picture}) => {
    return (
    <header>
        <div>
            <img src={picture.src} alt={picture.alt}></img>
            <span>{text}</span>
        </div>
    </header>
    )
}

Header.propTypes = {
    text: PropTypes.string,
    picture: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }).isRequired,   
}

export default Header