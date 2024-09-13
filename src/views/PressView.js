import {useEffect} from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/PressView.css';

export default function PressView() {

    useEffect(() => {
        document.title = `Chase Leoncini's Fake Press Reviews`;
      }, []);

    return (
        <div className='press'>
            <section aria-label='Press Reviews Section'>
                <div className='dual-container-1400'>
                    <div className='box-1'>
                        <h1>Press</h1>
                    </div>
                    <div className='box-2'>
                        <blockquote>
                            “Chase's commitment to not using ChatGPT to write fake
                             press reviews shows his willingness to go the extra mile.”
                            <cite>– probably Chase himself</cite>
                        </blockquote>
                        <blockquote>
                            “Chase did all the work. No one else even had to show up. He's like, 
                            really good. I knew hiring him would mean I could
                            finally go on vacation.
                            Thank you, Chase!”
                            <cite>– Likely, still Chase.</cite>
                        </blockquote>
                        <blockquote>
                            “After Chase solidified an astonishing turn-around in my company, I
                            had to invite him over for dinner. His personality and charm had us laughing
                            the entire time. My family loved him more than me!
                            So, yeah, they live with him now... I miss them.”
                            <cite>– Yeah, it's definitely Chase.</cite>
                        </blockquote>
                    </div>
                </div>
            </section>
            <ContactSection background='other'>
            <h2>Let's Work Together</h2>
            <Button variant='dark'>Contact Me</Button>
            </ContactSection>
        </div>
    );
}
