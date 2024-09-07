import '../styles/ResumeView.css';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import resumeFile from '../assets/Chase-Leoncini-Resume-2024.pdf'; 
import resumeThumbnail from '../assets/resume-thumbnail.png';

export default function Resume() {
    return (
        <div className="resume">
            <section aria-label='Chases Resume Section'>
                <div className='background'>
                    <div className='resume-dual-container'>
                        <div className='resume-box-1'>
                            <h1>Resume</h1>
                        </div>
                        <div className='resume-box-2'>
                            <div className='download-paragraph'>
                                <p>Check it out below, or download it here:</p>
                                <a href={resumeFile} download="Chase-Leoncini-Resume-2024.pdf" className='resume-thumbnail'>
                                    <img src={resumeThumbnail} alt="Resume Thumbnail" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className='resume-container'>
                <section className="contact-info">
                    <h1 className='name'>CHASE LEONCINI</h1>
                    <p className='font-small contact-container'>
                        <span className='colored'>San Diego, CA</span>
                    </p>
                    <p className='font-small'>
                        Driven Aerospace Engineer transitioning to a dynamic career as a Web Developer. Eager to apply my engineering acumen and creative problem-solving abilities to crafting engaging and functional web experiences. With a proven track record of overcoming adversity, including triumphing over brain cancer twice, I am fueled by resilience and poised to contribute my unique perspective to the world of web development.
                    </p>
                </section>
                
                <hr />

                <section className="experience">
                    <h2 className='font-large'>EXPERIENCE</h2>

                    <div className="experience-item">
                        <div className='space-between'>
                            <h3 className='font-medium colored'>Web Development</h3>
                            <p><strong>2022 - Present</strong></p>
                        </div>
                        <ul><strong>Portfolio Project:</strong>
                            <li>Created a personal portfolio page and implemented a unique brand.</li>
                            <li>Harnessed HTML and CSS, crafted an intuitive UX that guides visitors through my skills and accomplishments.</li> 
                            <li>Implemented several animated elements to breathe life into static sections.</li>
                        </ul>
                        <ul><strong>Hyer Flight Homepage:</strong>
                            <li>Undertook strategic overhaul of homepage. Approached challenge by intentionally avoiding antiquated code practices and adopted modern coding techniques to ensure enhanced readability and improved performance.</li>
                            <li>Optimized layout, refined UI, integrated intuitive navigation.</li>
                        </ul>
                        <ul><strong>MyBank App:</strong>
                            <li>Designed a banking app that embraced reusability through modular card components. Components facilitated a consistent and intuitive user journey but also streamlined the development process.</li>
                            <li>Developed app using HTML, CSS, and JavaScript. Enabled dynamic interactions that enriched user experience.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className='space-between'>
                            <h3 className='font-medium colored'>Professional Actor</h3>
                            <p><strong>2015 - Present</strong></p>
                        </div>
                        <ul><strong>Web Series:</strong>
                            <li>Origin: Beyond The Impact (2015) - Supporting Actor</li>
                        </ul>
                        <ul><strong>Short Films:</strong>
                            <li>Descanso (2018) - Star</li>
                            <li>Devil’s Pass (2019) - Star</li>
                            <li>11:17 (2022) - Screenwriter, Supporting Actor</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className='space-between'>
                            <h3 className='font-medium colored'>Northrop Grumman</h3>
                            <p><strong>2010 - 2020</strong></p>
                        </div>
                        <ul>
                            <h4><strong>Aerospace Lead:</strong></h4>
                            <li>Proven track record of exceptional accomplishments, spanning diverse technical realms, all driven by my unyielding commitment to innovation, precision, and collaborative success.</li>
                            <li>Excelled in machining, operating 3-axis and 5-axis waterjets, routers, lathes, and CNC drills. Maintained tolerances within an impressive .003, akin to the width of a strand of hair. This precision was critical in shaping intricate components for aerospace applications.</li>
                            <li>Played a pivotal role in fusing components with aerospace-grade adhesives and silicone and assembled intricate missile and spacecraft structures. Collaborated with colleagues and set a remarkable record by delivering an unprecedented number of missile housings within an accelerated time frame, showcasing unmatched efficiency and teamwork.</li>
                            <li>Assumed responsibility for testing, demonstrating mastery in manipulating cranes and lifts to accurately position spacecraft within rigorous testing setups. My approach involved precise installation of actuators and measurement devices, simulating flight conditions with utmost precision.</li>
                        </ul>
                        <ul>
                            <h4><strong>Senior Aerospace Technician</strong></h4>
                            <li>Aerospace Craft Production: engaged in the crafting of spacecraft, interpreted engineer blueprints to fabricate precision molds that defined the spacecraft's structural contours.</li>
                            <li>Utilized advanced techniques such as layering carbon-fiber and fiberglass materials within these molds, followed by the precise autoclave process that solidified the lay-up.</li>
                            <li>Transitioned into wet chemistry, demonstrating exceptional proficiency in plating components to adhere to specific spacecraft areas. Precision in titrating chemicals led to enhanced accuracy.</li>
                            <li>Devised solutions that expedited above processes, reducing a 30-day task to a mere 3 days. Strong command of priming and painting spacecraft and aircraft surfaces.</li>
                        </ul>
                    </div>
                </section>
                
                <section className="education">
                    <h2 className='font-large'>EDUCATION</h2>
                    <div className='space-between-500'>
                        <div>
                            <div className="education-item">
                                <h3>Adler Improv</h3>
                                <p><strong>2014 - 2015, Los Angeles, CA</strong></p>
                                <i>Improv</i>
                            </div>
                            <div className="education-item">
                                <h3>The Rehearsal Room</h3>
                                <p><strong>2019 - 2023, San Diego, CA</strong></p>
                                <i>Method Acting</i>
                            </div>

                            <div className="education-item">
                                <h3>EMSTA College</h3>
                                <p><strong>2016 - 2017, San Diego, CA</strong></p>
                                <i>EMT Graduate</i>
                            </div>
                        </div>
                        <div>    
                            <div className="education-item">
                                <h3>Actor’s Workshop Studios</h3>
                                <p><strong>2013 - 2018, San Diego, CA</strong></p>
                                <i>Meisner Technique</i>
                            </div>
                            <div className="education-item">
                                <h3>Granite Hills High School</h3>
                                <p><strong>2005 - 2009, El Cajon, CA</strong></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="certifications">
                    <h2 className='font-large'>CERTIFICATIONS</h2>
                    <div className="certification-item space-between">
                        <h3 className='colored'>Learn HTML & CSS Online School</h3>
                        <p><strong>2022 - 2023</strong></p>
                    </div>
                    <div className="certification-item space-between">
                        <h3 className='colored'>Learn Programming Online School</h3>
                        <p><strong>2022 - 2023</strong></p>
                    </div>
                    <div className="certification-item space-between">
                        <h3 className='colored'>Learn Javascript Online School</h3>
                        <p><strong>2022 - 2023</strong></p>
                    </div>
                    <div className="certification-item space-between">
                        <h3 className='colored'>React Tutorial</h3>
                        <p><strong>2023 - 2024</strong></p>
                    </div>
                    <div className="certification-item space-between">
                        <h3 className='colored'>EMT</h3>
                        <p><strong>2017 - 2019</strong></p>
                    </div>
                    <div className="certification-item space-between">
                        <h3 className='colored'>PADI Rescue Diver</h3>
                        <p><strong>2013 - Present</strong></p>
                    </div>
                </section>
                <section className="skills-section">
                    <h2 className='font-large'>SKILLS</h2>
                         <div className='space-between-500' >
                            <ul className='skill-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Flexbox</li>
                                <li>Grid</li>
                                <li>NodeJS</li>
                                <li>Vite</li>
                                <li>TailwindCSS</li>
                            </ul>
                            <ul className='skill-list'>  
                                <li>Github</li>
                                <li>VS Code</li>
                                <li>Microsoft Office</li>
                                <li>Google Suite</li>
                                <li>Screenwriting</li>
                                <li>Novel writing</li>
                                <li>Tournament-level chess</li>
                                <li>Outdoor rock climbing</li>
                                <li>SCUBA diving</li>
                            </ul>
                    </div>
                </section>

                <section className="awards">
                    <h2 className='font-large'>AWARDS</h2>
                    <ul>
                        <li><strong>2018:</strong> Best Actor Nominee - Descanso</li>
                        <li><strong>2019:</strong> Best Film - Devil’s Pass</li>
                    </ul>
                </section>
            </div>
            
            <ContactSection>
                <h2>Let's Work Together</h2>
                <p>
                    I'm always looking for new opportunities and am comfortable
                    working locally, remotely, internationally, or from space. Please get in touch,
                    and I'll reach out to you probably in seconds.
                </p>
                <Button variant='light'>Contact Me</Button>
            </ContactSection>
        </div>
    );
};
