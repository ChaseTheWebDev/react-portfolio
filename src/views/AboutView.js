import React from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/AboutView.css';

export default function AboutView() {
    return (
        <div className='about'>
            <section aria-label='About Us Section'>
                <div className='dual-container-1400'>
                    <div className='box-1'>
                        <h1>About</h1>
                    </div>
                    <div className='box-2'>
                        <p>
                        Driven Aerospace Engineer transitioning to a dynamic career as a Web Developer.
                        Eager to apply my engineering acumen and creative problem-solving abilities to
                        crafting engaging and functional websites. With a proven track record of
                        overcoming adversity, including triumphing over brain cancer twice, I am fueled
                        by resilience and poised to contribute my unique perspective to the world of
                        web development.
                        </p>
                        <p>
                            Before this I was an actor. So, that was cool.
                        </p>
                        <p>
                            I realize I don't have much to say about myself.
                        </p>
                        <p>
                            I like climbing.
                        </p>
                    </div>
                </div>
            </section>
            <ContactSection background="three">
                <h2>Let's Work Together</h2>
                <Button variant='light'>Contact Me</Button>
            </ContactSection>
        </div>
    );
}
