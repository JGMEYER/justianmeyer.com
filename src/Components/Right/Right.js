import './Right.css';

import CertificationsContent from '../CertificationsContent/CertificationsContent'

function Right() {
    return (
        <div className="right-container">
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-a)' }}>
                <CertificationsContent />
            </div>
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-b)' }}>
            </div>
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-c)' }}>
            </div>
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-d)' }}>
            </div>
        </div>
    );
}

export default Right;