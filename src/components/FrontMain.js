import './FrontMain.css';

import github_64 from '../images/icons/github_64.png';
import linkedin_64 from '../images/icons/linkedin_64.webp';

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
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Certifications</a></li>
                    </ul>
                    <a href="https://github.com/JGMEYER" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src={github_64} />
                    </a>
                    <a href="https://www.linkedin.com/in/justianmeyer/" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src={linkedin_64} />
                    </a>
                </nav>
            </section>
        </main>
    );
}

export default FrontMain;
