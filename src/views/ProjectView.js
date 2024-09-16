import { useEffect } from 'react';
import '../styles/ProjectView.css';
import { useParams } from 'react-router-dom';
import ProjectsNavbar from '../components/ProjectsNavbar';
import ProjectGallery from '../components/ProjectGallery';

const numberMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
};

const reverseNumberMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
};

const projectDescriptions = {
    "one": (
        <div>
            <p>
                It all started here, my original ChaseTheWebDev portfolio. This straightforward yet effective page utilizes 99% Semantic HTML5
                and CSS, and is still fully functional, because... not everything requires JavaScript.
            </p>
            <p>That being said, this is the only portfolio piece that features both dark and light modes, and that is the only area where
                javascript was used.</p>
        </div>
    ),
    "two": (
        <div>
            <p>
                Hyer Airlines garnered numerous awards for its web design, which inspired me to recreate it from scratch using a blend
                of grid and flex code. This project incorporates some deceptively complex layouts and more animations compared
                to my other HTML5/CSS portfolio piece. It's a nice showcase of my evolution with both languages.
            </p>
            <p>
                You'll notice the continued use of semantic HTML5, which enhances accessibility and SEO as well as javascript for
                a small slideshow at near the bottom.
            </p>
        </div>
    ),
    "three": (
        <div>
            <p>
                As you might have guessed, this project features the same layout as the one you're viewing. What began as a simple
                48-hour challenge evolved into the host site for my portfolio. This Utica version is less complex than the current site;
                it lacks a sophisticated project viewer and a functional contact form. The site you're on now, however, is equipped
                with emailJS, allowing you to send me an email through the footer or the contact page.
            </p>
        </div>
    ),
    "four": (
        <div>
            <p>
                For my fourth and final project, here is a clone of Netflix's landing page. I aimed to focus less on HTML and CSS and
                more on React and JavaScript. This is the only portfolio piece featuring the
                integration of a free API. There's also plenty of javasctipt to check out such as dropdown component, an accordion, and a slideshow.
            </p>
            <p>
                This piece may not have the most content of the four projects, but it certainly has the most complex code.
            </p>
        </div>
    ),
};


function convertStringToNumber(string) {
    return numberMap[string] || null;
}

function convertNumberToString(number) {
    return reverseNumberMap[number] || null;
}

export default function ProjectView() {
    const { id } = useParams();
    const projectNumber = convertStringToNumber(id);
    const nextNumber = projectNumber ? projectNumber + 1 : null;
    const previousNumber = projectNumber ? projectNumber - 1 : null;
    const renderedNextString = convertNumberToString(nextNumber);
    const renderedPreviousString = convertNumberToString(previousNumber);
    const currentDescription = projectDescriptions[id] || <p>Project not found</p>;

    useEffect(() => {
        document.title = `Chase Leoncini's Projects`;
      }, []);

    return (
        <div className="project">
            <div className="dual-container-1400">
                <div className="project-box-1">
                    <h2>Project {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
                </div>
                <div className="project-box-2">
                    {currentDescription}
                </div>
            </div>
            <section className='project-gallery' aria-label='Project Gallery'>
                <ProjectGallery id={id}/>
            </section>
            <ProjectsNavbar
                previous={`Project ${renderedPreviousString || ''}`}
                next={`Project ${renderedNextString || ''}`}
                project={id}
            />
        </div>
    );
}
