import './PortfolioContent.css';
import IconBadge from '../IconBadge/IconBadge';
import iconAmplify from '../../images/icons/amplify-white.svg';
import iconGithub from '../../images/icons/github-white.svg';
import iconReact from '../../images/icons/react-white.svg';

function PortfolioContent() {
    return (
        <div>
            <div className="portfolio-content-container">
                <a className="portfolio-item-container" href="#">
                    <h4>Personal Website</h4>
                    <p>Website for hosting experience and portfolio items.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                        <IconBadge icon={iconAmplify} iconBgColor='#FF9100' name='AWS Amplify'></IconBadge>
                    </div>
                </a>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-traffic-sim/" target="_blank" rel="noopener noreferrer">
                    <h4>Traffic Simulation</h4>
                    <p>Fun road builder and traffic simulator.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                    </div>
                </a>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-chess/" target="_blank" rel="noopener noreferrer">
                    <h4>Chess Game</h4>
                    <p>Classic game of chess for the browser.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                    </div>
                </a>
            </div>
        </div >
    );
}

export default PortfolioContent;