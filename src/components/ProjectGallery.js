import '../styles/ProjectGallery.css';
import ProjectImages from '../assets/project-images';

export default function ProjectGallery({ id }) {
    const projectImages = ProjectImages[id] || [];

    return (
        <div className='project-card-container'>
            {projectImages.map((image, index) => (
                <a  href={image.link}  key={index} className="project-card" target='blank'>
                    <img src={image.src}  className="project-image" alt={`Screenshot of Project ${id} `}/>
                    <div className="overlay">
                            <h5>{`View Project ${id}'s Code`}</h5>
                    </div>
                </a>
            ))}
        </div>
    );
}
