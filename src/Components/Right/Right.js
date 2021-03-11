import './Right.css';

import CertificationsContent from '../CertificationsContent/CertificationsContent'
import PortfolioContent from '../PortfolioContent/PortfolioContent'

function Right() {
    return (
        <div className="right-container">
            <div className="right-content-wrapper">
                <h3>About</h3>
                <p>Hi, I'm Justian, a frontend engineer</p>
            </div>
            <div className="right-content-wrapper">
                <h3>Certifications</h3>
                <CertificationsContent />
            </div>
            <div className="right-content-wrapper">
                <h3>Portfolio</h3>
                <PortfolioContent />
            </div>

            <footer>
                <p>&copy; Justian Meyer, 2021</p>
            </footer>
        </div>
    );
}

export default Right;