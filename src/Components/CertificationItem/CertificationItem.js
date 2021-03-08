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
            <div className="certification-wrapper">
                {props.certName} ({props.hours} Hours)
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