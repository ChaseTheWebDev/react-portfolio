import { useEffect } from 'react';
import '../styles/WorkView.css';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import ProjectOneImage1 from '../assets/ctwd-homepage-dark.png';
import ProjectTwoImage1 from '../assets/hyer-homepage.png';
import ProjectThreeImage1 from "../assets/UticaProjectPreview-1.png";
import ProjectFourImage1 from "../assets/netflix-landing.png";

export default function WorkView() {

    useEffect(() => {
        document.title = `Chase Leoncini's Work`;
      }, []);

    return (
        <div className="workview">
            <header>
                <p>Chase Leoncini is a front-end web developer from San Diego, CA.</p>
            </header>
            <main>
                <div className='workview-image-1'></div>
                <section aria-label='Recent Work' className='recent-work'>
                        <h2>Recent Work</h2>
                        <p>
                            As a newcomer to the front-end web development field, I
                            have dedicated the past year to immersing myself in the
                            craft. Hour after hour, day by day, I've done nothing but
                            study and create. And now, after long last, I finally have a
                            portfolio of projects to showcase my abilities and growth.
                            Below, you’ll find a selection of my most recent projects, each
                            demonstrating my commitment to creating engaging and functional
                            web experiences. And yes, that last sentence was written with
                            ChatGPT. Thank you.
                        </p>
                </section>
                <div className='project-gallery'>
                            <div className='project-card-container'>
                            <a href="/project/one" className="project-card">
                                <img src={ProjectOneImage1} alt="Project 1" className="project-image"/>
                                <div className='overlay'>
                                    <h5>Visit Project 1 (HTML / CSS)</h5>
                                </div>
                            </a>
                            <a href="/project/two" className="project-card">
                                <img src={ProjectTwoImage1} alt="Project 2" className="project-image"/>
                                <div className='overlay'>
                                    <h5>Visit Project 2 (HTML / CSS)</h5>
                                </div>
                            </a>
                            <a href="/project/three" className="project-card">
                                <img src={ProjectThreeImage1} alt="Project 3" className="project-image"/>
                                <div className='overlay'>
                                    <h5>Visit Project 3 (Javascript / React)</h5>
                                </div>
                            </a>
                            <a href="/project/four" className="project-card">
                                <img src={ProjectFourImage1} alt="Project 4" className="project-image"/>
                                <div className='overlay'>
                                    <h5>Visit Project 4 (Javascript / React)</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                <ContactSection>
                    <h2>Let's Work Together</h2>
                    <p>
                        I'm always looking for new opportunities and am comfortable
                        working locally, remotely, internationally, or from outer-space. Please get in touch,
                        and I'll reach out to you probably in seconds.
                    </p>
                    <Button variant='light'>Contact Me</Button>
                </ContactSection>
            </main>
        </div>
    );
}
