import './Right.css';

import AboutContent from '../AboutContent/AboutContent'
import CertificationsContent from '../CertificationsContent/CertificationsContent'
import PortfolioContent from '../PortfolioContent/PortfolioContent'

function Right() {
    return (
        <div className="right-container">
            <div className="right-content-wrapper">
                <h3 style={{ color: 'var(--color-g)' }}>About</h3>
                <AboutContent />
            </div>
            <div className="right-content-wrapper" style={{ backgroundColor: 'var(--color-g)' }}>
                <h3 style={{ color: 'black' }}>Portfolio</h3>
                <PortfolioContent />
            </div>
            <div className="right-content-wrapper">
                <h3 style={{ color: 'var(--color-g)' }}>Certifications</h3>
                <CertificationsContent />
            </div>

            <footer>
                <p>&copy; Justian Meyer, 2021</p>
            </footer>
        </div>
    );
}

export default Right;