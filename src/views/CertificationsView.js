import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/CertificationsView.css';

export default function CertificationsView() {
    const certs = [
        {
            name: "Programming-Certification",
            image: "programming-certification"
        },
        {
            name: "HTML-CSS-Certification",
            image: "html-css-certification"
        },
        {
            name: "JavaScript-Certification",
            image: "javascript-certification"
        },
        {
            name: "React-Certification",
            image: "react-certification"
        },
    ];

    useEffect(() => {
        document.title = `Chase Leoncini's Certifications`;
      }, []);

    return (
        <div className='certifications-view'>
            <section aria-label='Certifications Section'>
                <div className='certifications-container'>
                    {certs.map(cert => (
                        <div key={cert.name} className={`certification-image ${cert.image}`}></div>
                    ))}
                </div>
            </section>
            <ContactSection background='certifications'>
            <h2>Let's Work Together</h2>
            <Button variant='dark'>Contact Me</Button>
            </ContactSection>
        </div>
    );
}
