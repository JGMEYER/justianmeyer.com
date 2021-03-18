import './Left.css';
import github_64 from '../../images/icons/github_64.png';
import linkedin_64 from '../../images/icons/linkedin_64.png';

function Left() {
    return (
        <div className="left-container">
            <div className="about-container">
                <h1>Justian Meyer</h1>
                <h2>Frontend Engineer</h2>
                <p>Self-taught Frontend Engineer, Professional Backend Background.</p>
                <div className="social-container">
                    <a href="https://github.com/JGMEYER" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={github_64} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/justianmeyer/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={linkedin_64} alt="linkedin icon" />
                    </a>
                </div>
            </div>
            <div className="contact-wrapper">
                <button className="contact-button hvr-sweep-to-bottom">Contact</button>
            </div>
        </div>
    );
}

export default Left;