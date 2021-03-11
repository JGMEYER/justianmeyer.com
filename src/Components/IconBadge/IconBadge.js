import PropTypes from 'prop-types';

import './IconBadge.css';

function IconBadge(props) {
    return (
        <div className="icon-badge">
            <div className="icon-badge-icon-container" style={{ backgroundColor: props.iconBgColor }}>
                <img className="icon-badge-icon" src={props.icon} alt={`${props.name}-icon`}></img>
            </div>
            <div className="icon-badge-name-container">
                <span>{props.name}</span>
            </div>
        </div>
    );
}

IconBadge.propTypes = {
    icon: PropTypes.string.isRequired,
    iconBgColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default IconBadge;
