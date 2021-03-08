import './PortfolioContent.css';
import IconBadge from '../IconBadge/IconBadge';
import iconAmplify from '../../images/icons/amplify-white.svg';
import iconGithub from '../../images/icons/github-white.svg';
import iconReact from '../../images/icons/react-white.svg';

function PortfolioContent() {
    return (
        <div>
            <h3>Portfolio</h3>
            <div className="portfolio-content-container">
                <div className="portfolio-item-container">
                    <h4><a href="#">Personal Website</a></h4>
                    <p>Website for hosting experience and portfolio items.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                        <IconBadge icon={iconAmplify} iconBgColor='#FF9100' name='AWS Amplify'></IconBadge>
                    </div>
                </div>
                <div className="portfolio-item-container">
                    <h4><a href="https://jgmeyer.github.io/js-traffic-sim/" target="_blank" rel="noopener noreferrer">Traffic Simulation</a></h4>
                    <p>Fun road builder and traffic simulator.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                    </div>
                </div>
                <div className="portfolio-item-container">
                    <h4><a href="https://jgmeyer.github.io/js-chess/" target="_blank" rel="noopener noreferrer">Chess Game</a></h4>
                    <p>Classic game of chess for the browser.</p>
                    <div className="technologies-container">
                        <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                    </div>
                </div>
                <div className="portfolio-item-container empty"></div>
            </div>
        </div>
    );
}

export default PortfolioContent;