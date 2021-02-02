import './PortfolioMain.css';
import IconBadge from './IconBadge.js';
import amplifyIcon from '../images/icons/amplify-white.svg';
import css3Icon from '../images/icons/css3-white.svg';
import html5Icon from '../images/icons/html5-white.svg';
import jsIcon from '../images/icons/js-white.svg';
import gitHubIcon from '../images/icons/github-white.svg';
import reactIcon from '../images/icons/react-white.svg';

function PortfolioMain() {
    return (
        <main id="portfolio-main">
            <div className="portfolio-item-container">
                <h2>JustianMeyer.com (repo)</h2>
                <p>A website for showcasing my portfolio.<br /><br /></p>
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
                        icon={html5Icon}
                        iconBgColor="rgb(239, 96, 38)"
                        name="HTML 5">
                    </IconBadge>
                    <IconBadge
                        icon={css3Icon}
                        iconBgColor="rgb(37, 161, 225)"
                        name="CSS 3">
                    </IconBadge>
                    <IconBadge
                        icon={gitHubIcon}
                        iconBgColor="#24292e"
                        name="GitHub">
                    </IconBadge>
                    <IconBadge
                        icon={amplifyIcon}
                        iconBgColor="#ffac31"
                        name="AWS Amplify">
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
                        icon={html5Icon}
                        iconBgColor="rgb(239, 96, 38)"
                        name="HTML 5">
                    </IconBadge>
                    <IconBadge
                        icon={css3Icon}
                        iconBgColor="rgb(37, 161, 225)"
                        name="CSS 3">
                    </IconBadge>
                    <IconBadge
                        icon={gitHubIcon}
                        iconBgColor="#24292e"
                        name="GitHub">
                    </IconBadge>
                </div>
            </div>
        </main >
    )
}

export default PortfolioMain;
