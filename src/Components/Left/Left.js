import { Parallax, Background } from 'react-parallax';

import './Left.css';
import earth_img from '../../images/earth.jpg';
import github_svg from '../../images/icons/github-white.svg';
import linkedin_svg from '../../images/icons/linkedin-white.svg';

function Left() {
    return (
        <div className="left-container">
            <Parallax
                strength={300}
                className="parallax-container"
            >
                <Background>
                    <div className="image-parallax-stripes"></div>
                    <img className="image-parallax-main" src={earth_img}></img>
                </Background>
            </Parallax>
            <div className="about-container">
                <h1>Justian Meyer</h1>
                <h2>Frontend Engineer</h2>
                <p>Self-taught Frontend Engineer, Professional Backend Background.</p>
                <div className="social-container">
                    <a href="https://github.com/JGMEYER" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={github_svg} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/justianmeyer/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={linkedin_svg} alt="linkedin icon" />
                    </a>
                </div>
            </div>
            <div className="contact-wrapper">
                <button className="contact-button"><p>Contact</p></button>
            </div>
        </div>
    );
}

export default Left;