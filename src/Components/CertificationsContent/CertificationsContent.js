import './CertificationsContent.css';
import CertificationItem from '../CertificationItem/CertificationItem';

function CertificationsContent() {
    return (
        <div>
            <h3>Certifications</h3>
            <CertificationItem
                certName="Front-End Engineer Career Path"
                hours="350"
                certLink="certifications/front-end-engineer-career-path.pdf"
            ></CertificationItem>
            <CertificationItem
                certName="Learn HTML"
                hours="9"
                certLink="certifications/learn-html-course.pdf"
            ></CertificationItem>
            <CertificationItem
                certName="Learn CSS"
                hours="20"
                certLink="certifications/learn-css-course.pdf"
            ></CertificationItem>
            <CertificationItem
                certName="Learn Javascript"
                hours="30"
                certLink="certifications/learn-javascript-course.pdf"
            ></CertificationItem>
            <CertificationItem
                certName="Building Interactive Javascript Websites"
                hours="7"
                certLink="certifications/building-interactive-javascript-websites-course.pdf"
            ></CertificationItem>
            <CertificationItem
                certName="Learn React"
                hours="20"
                certLink="certifications/learn-react-course.pdf"
            ></CertificationItem>
        </div>
    )
}

export default CertificationsContent