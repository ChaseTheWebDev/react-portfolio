import '../styles/ContactSection.css';

export default function ContactSection({ children, background = 'dark' }) {
    return (
        <section aria-label='Contact Us Section' className={`contact-section-container ${background}`}>
            <div className='children-container'>
                {children}
            </div>
        </section>
    );
}
