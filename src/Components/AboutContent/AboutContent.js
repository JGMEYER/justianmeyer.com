import FadeInSection from "../FadeInSection/FadeInSection";

import './AboutContent.css';

function AboutContent() {
    return (
        <div className="about-content-wrapper">
            <FadeInSection>
                <p>Hi, I'm <em>Justian</em>, a software engineer with backend experience at top <em>Silicon Valley</em> companies.</p>
                <p>In an effort to continue growing and expanding my skills, I've been teaching myself <em>frontend</em> development, primarily <em>Reactjs</em>, and am open to employment opportunities.</p>
            </FadeInSection >
        </div>
    );
}

export default AboutContent;