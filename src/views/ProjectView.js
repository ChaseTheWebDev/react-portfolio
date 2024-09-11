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
                It all began here. My first project. This simple but effective page uses 99% Semantic HTML5
                and CSS. Not everything needs Javascript.
            </p>
            <p>Another paragraph</p>
            <p>And another</p>
            <p>More.</p>
        </div>
    ),
    "two": (
        <div>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
        </div>
    ),
    "three": (
        <div>
            <p>You guessed it, this project has the exact same layout as this one. That's because what began
                as a simple 48 hour challenge, ended as the host site for my portfolio work. This example is 
                not as complex as the site you're on now. The differences with Utica's site are it does not have
                a complex project viewer like this one, nor does it's contact us section work. This one on the
                other hand is equipped with emailJS, so you can send me an email through the footer or the contact 
                us page. Either way. Either Way.
            </p>
        </div>
    ),
    "four": (
        <div>
            <p>And for my fourth and final trick, I've begun working on a clone of Netflix. This is still a work
                in progress, but the goal is to use proptypes, SASS, and a free API to show just how much I can stack
                into one page. It may not be largest of my portfolio pieces, but it is certainly the most complex.
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
