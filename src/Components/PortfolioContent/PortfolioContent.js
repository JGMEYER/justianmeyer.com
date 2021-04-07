import './PortfolioContent.css';
import FadeInSection from '../FadeInSection/FadeInSection';
// import IconBadge from '../IconBadge/IconBadge';
import iconAmplify from '../../images/icons/amplify-white.svg';
import iconReact from '../../images/icons/react-white.svg';

function PortfolioContent() {
    return (
        <div className="portfolio-content-container">
            <FadeInSection>
                <a className="portfolio-item-container" href="/">
                    <div className="portfolio-item-container-inner">
                        <h4>Personal Website</h4>
                        <div className="technologies-container">
                            {/* <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge>
                            <IconBadge icon={iconAmplify} iconBgColor='#FF9100' name='AWS Amplify'></IconBadge> */}
                            <img className="technology-icon" src={iconReact} title="ReactJS" alt="react j s icon"></img>
                            <img className="technology-icon" src={iconAmplify} title="AWS Amplify" alt="aws amplify icon"></img>
                        </div>
                    </div>
                </a>
            </FadeInSection>
            <FadeInSection>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-traffic-sim/" target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-item-container-inner">
                        <h4>Traffic Simulation</h4>
                        <div className="technologies-container">
                            <img className="technology-icon" src={iconReact} title="ReactJS" alt="react j s icon"></img>
                            {/* <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge> */}
                        </div>
                    </div>
                </a>
            </FadeInSection>
            <FadeInSection>
                <a className="portfolio-item-container" href="https://jgmeyer.github.io/js-chess/" target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-item-container-inner">
                        <h4>Chess Game</h4>
                        <div className="technologies-container">
                            <img className="technology-icon" src={iconReact} title="ReactJS" alt="react j s icon"></img>
                            {/* <IconBadge icon={iconReact} iconBgColor='#6AD1FB' name='React'></IconBadge> */}
                        </div>
                    </div>
                </a>
            </FadeInSection>
        </div>
    );
}

export default PortfolioContent;