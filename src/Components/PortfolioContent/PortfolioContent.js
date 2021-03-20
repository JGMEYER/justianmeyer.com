import './PortfolioContent.css';
import FadeInSection from '../FadeInSection/FadeInSection';
import IconBadge from '../IconBadge/IconBadge';
import iconAmplify from '../../images/icons/amplify-white.svg';
import iconReact from '../../images/icons/react-white.svg';

function PortfolioContent() {
    return (
        <div>
            <div className="portfolio-content-container">
                <a className="portfolio-item-container" href="#">
                    <FadeInSection>
                        <h4>Personal Website</h4>
                        <p>Website for hosting experience and portfolio items.</p>
                        <div className="technologies-container">
                            <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                            <IconBadge icon={iconAmplify} iconBgColor='#FF9100' name='AWS Amplify'></IconBadge>
                        </div>
                    </FadeInSection>
                </a>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-traffic-sim/" target="_blank" rel="noopener noreferrer">
                    <FadeInSection>
                        <h4>Traffic Simulation</h4>
                        <p>Fun road builder and traffic simulator.</p>
                        <div className="technologies-container">
                            <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                        </div>
                    </FadeInSection>
                </a>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-chess/" target="_blank" rel="noopener noreferrer">
                    <FadeInSection>
                        <h4>Chess Game</h4>
                        <p>Classic game of chess for the browser.</p>
                        <div className="technologies-container">
                            <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                        </div>
                    </FadeInSection>
                </a>
            </div>
        </div>
    );
}

export default PortfolioContent;