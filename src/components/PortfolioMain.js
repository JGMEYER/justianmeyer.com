import './PortfolioMain.css';
import IconBadge from './IconBadge.js';
import jsIcon from '../images/icons/js-white.svg';
import gitHubIcon from '../images/icons/github-white.svg';
import reactIcon from '../images/icons/react-white.svg';

function PortfolioMain() {
    return (
        <main id="portfolio-main">
            <IconBadge
                icon={reactIcon}
                iconBgColor="hsl(200, 82%, 54%)"
                name="React">
            </IconBadge>
            <IconBadge
                icon={gitHubIcon}
                iconBgColor="#24292e"
                name="GitHub">
            </IconBadge>
            <IconBadge
                icon={jsIcon}
                iconBgColor="#ff9900"
                name="JavaScript 6">
            </IconBadge>
        </main>
    )
}

export default PortfolioMain;
