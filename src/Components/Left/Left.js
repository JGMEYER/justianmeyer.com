import './Left.css';
import github_64 from '../../images/icons/github_64.png';
import linkedin_64 from '../../images/icons/linkedin_64.webp';

function Left() {
    return (
        <div className="left-container">
            <div className="about-container">
                <h1>Justian Meyer</h1>
                <h2>Frontend Engineer</h2>
                <p>Self-taught Frontend Engineer with a Backend Engineering background. Looking for new employment.</p>
                <div className="links-container">
                    <a href="https://github.com/JGMEYER" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={github_64} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/justianmeyer/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={linkedin_64} alt="linkedin icon" />
                    </a>
                </div>
                <button class="button-primary">Contact</button>
            </div>

            <footer>
                <p>&copy; Justian Meyer, 2021</p>
            </footer>
        </div>
    );
}

export default Left;