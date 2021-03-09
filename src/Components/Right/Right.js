import './Right.css';

import CertificationsContent from '../CertificationsContent/CertificationsContent'
import PortfolioContent from '../PortfolioContent/PortfolioContent'

function Right() {
    return (
        <div className="right-container">
            {/* <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-b)' }}>
            </div> */}
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-a)' }}>
                <h3>Certifications</h3>
                <CertificationsContent />
            </div>
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-b)' }}>
                <h3>Portfolio</h3>
                <PortfolioContent />
            </div>
            {/* <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-c)' }}>
            </div> */}
            {/* <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-d)' }}>
            </div> */}

            <footer>
                <p>&copy; Justian Meyer, 2021</p>
            </footer>
        </div>
    );
}

export default Right;