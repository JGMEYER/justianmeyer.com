import './PortfolioMain.css';
import IconBadge from './IconBadge.js';
import jsIcon from '../images/icons/js-white.svg';
import gitHubIcon from '../images/icons/github-white.svg';
import reactIcon from '../images/icons/react-white.svg';

function PortfolioMain() {
    return (
        <main id="portfolio-main">
            <div className="portfolio-item-container">
                <h2>JustianMeyer.com (repo)</h2>
                <p>A website for showcasing my portfolio.</p>
                <h3>Technologies used:</h3>
                <div className="technology-container">
                    <IconBadge
                        icon={reactIcon}
                        iconBgColor="hsl(200, 82%, 54%)"
                        name="React">
                    </IconBadge>
                    <IconBadge
                        icon={jsIcon}
                        iconBgColor="#ff9900"
                        name="JavaScript 6">
                    </IconBadge>
                    <IconBadge
                        icon={gitHubIcon}
                        iconBgColor="#24292e"
                        name="GitHub">
                    </IconBadge>
                </div>
            </div >
            <div className="portfolio-item-container">
                <h2>JavaScript Traffic Simulator (repo)</h2>
                <p>A traffic simulator for practicing advanced React concepts.</p>
                <h3>Technologies used:</h3>
                <div className="technology-container">
                    <IconBadge
                        icon={reactIcon}
                        iconBgColor="hsl(200, 82%, 54%)"
                        name="React">
                    </IconBadge>
                    <IconBadge
                        icon={jsIcon}
                        iconBgColor="#ff9900"
                        name="JavaScript 6">
                    </IconBadge>
                    <IconBadge
                        icon={gitHubIcon}
                        iconBgColor="#24292e"
                        name="GitHub">
                    </IconBadge>
                </div>
            </div >
        </main >
    )
}

export default PortfolioMain;
