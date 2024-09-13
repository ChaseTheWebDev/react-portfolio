import {useEffect} from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/AboutView.css';
import headshot from '../assets/headshot.jpg';

export default function AboutView() {

    useEffect(() => {
        document.title = `About Chase Leoncini`;
      }, []);

    return (
        <div className='about'>
            <section aria-label='About Us Section'>
                <div className='dual-container-1400'>
                    <div className='box-1'>
                        <h1>About</h1>
                        <img src={headshot} alt="Chase Leoncini's Face." />
                    </div>
                    <div className='box-2'>
                        <p>
                            I loathe talking about myself and typically avoid it, but this seems to be one of the few places where I should provide some background. It’s challenging to distill an entire life story into a few short paragraphs, so I'll offer you the cliff notes (if that's still a term!).
                        </p>
                        <p>
                            Working as an aerospace engineer In my early twenties, I aspired to become an entrepreneur, envisioning a venture centered around outdoor professionals who shared my passion for teaching others about outdoor adventures. I taught myself to rock climb, kayak, and trained to be a professional SCUBA instructor. Unfortunately, a major shoulder injury disrupted these plans.
                        </p>
                        <p>
                            A few years later, I was diagnosed with stage two brain cancer. After surviving that ordeal, I was struck by another brain tumor just two years later, from which I also recovered. Regrettably, complications with the plate in my skull led to further surgery to alleviate persistent headaches. I managed to overcome that challenge as well.
                        </p>
                        <p>
                            These health issues effectively ended my career in aerospace due to the harmful chemicals and the physical limitations I experienced—significant vision impairment and diminished strength on the left side of my body as a result of the brain surgeries.
                        </p>
                        <p>
                            Feeling somewhat lost, I immersed myself in the world of acting, studying at various institutions in Southern California, participating in numerous festivals, and taking on several roles that earned me awards. Additionally, I authored my debut novel, <em>TYPHON</em>, an epic genesis story set in the enigmatic depths of the Mariana Trench.
                        </p>
                        <p>
                            As making a living in the arts proved challenging, I turned to my other passion: coding.
                        </p>
                        <p>
                            As a former aerospace engineer, I am excited to have moved into the dynamic field of web development. I am eager to leverage my engineering expertise and creative problem-solving skills to build engaging and functional websites. Having faced significant challenges, including overcoming brain cancer twice, I bring a unique blend of resilience and perspective to the world of web development.
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
