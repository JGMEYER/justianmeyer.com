import PropTypes from 'prop-types';

import './CertificationItem.css';

function CertificationItem(props) {
    return (
        <a
            className="certification-link"
            href={props.certLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="certification-container">
                <p className="certification-name">{props.certName}</p>
                <p className="certification-hours">{props.hours} Hours</p>
            </div>
        </a>
    );
}

CertificationItem.propTypes = {
    certName: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    certLink: PropTypes.string.isRequired,
}

export default CertificationItem;