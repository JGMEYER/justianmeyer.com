import './CertificationsContent.css';
import CertificationItem from '../CertificationItem/CertificationItem';
import FadeInSection from '../FadeInSection/FadeInSection';

function CertificationsContent() {
    return (
        <div className="certifications-content-container">
            <FadeInSection>
                <CertificationItem
                    certName="Front-End Engineer Career Path"
                    hours={350}
                    certLink="certifications/front-end-engineer-career-path.pdf"
                ></CertificationItem>
            </FadeInSection>
            <FadeInSection>
                <CertificationItem
                    certName="Learn HTML"
                    hours={9}
                    certLink="certifications/learn-html-course.pdf"
                ></CertificationItem>
            </FadeInSection>
            <FadeInSection>
                <CertificationItem
                    certName="Learn CSS"
                    hours={20}
                    certLink="certifications/learn-css-course.pdf"
                ></CertificationItem>
            </FadeInSection>
            <FadeInSection>
                <CertificationItem
                    certName="Learn Javascript"
                    hours={30}
                    certLink="certifications/learn-javascript-course.pdf"
                ></CertificationItem>
            </FadeInSection>
            <FadeInSection>
                <CertificationItem
                    certName="Building Interactive Javascript Websites"
                    hours={7}
                    certLink="certifications/building-interactive-javascript-websites-course.pdf"
                ></CertificationItem>
            </FadeInSection>
            <FadeInSection>
                <CertificationItem
                    certName="Learn React"
                    hours={20}
                    certLink="certifications/learn-react-course.pdf"
                ></CertificationItem>
            </FadeInSection>
        </div >
    )
}

export default CertificationsContent