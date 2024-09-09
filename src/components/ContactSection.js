import '../styles/ContactSection.css';

export default function ContactSection({ children, background = 'dark' }) {
    return (
        <section aria-label='Contact Section' className={`contact-section ${background}`}>
            <div className='children-container'>
                {children}
            </div>
        </section>
    );
}
