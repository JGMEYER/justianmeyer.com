import { Link } from 'react-router-dom';

import './FrontMain.css';
import github_64 from '../../images/icons/github_64.png';
import linkedin_64 from '../../images/icons/linkedin_64.webp';

function FrontMain() {
    return (
        <main id="frontpage-main">
            <section id="frontpage-left">
                <div id="headshot"></div>
            </section>

            <section id="frontpage-right">
                <h1>Justian Meyer</h1>
                <h2>Frontend Engineer</h2>
                <nav>
                    <ul>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/certifications">Certifications</Link></li>
                    </ul>
                    <a href="https://github.com/JGMEYER" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={github_64} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/justianmeyer/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={linkedin_64} alt="linkedin icon" />
                    </a>
                </nav>
            </section>
        </main>
    );
}

export default FrontMain;
