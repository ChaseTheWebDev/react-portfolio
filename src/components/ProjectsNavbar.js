import '../styles/ProjectsNavbar.css';
import { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

function convertToNumber(word) {
    return numberMap[word] || null;
};

function convertToString(number) {
    return reverseNumberMap[number] || null;
};

export default function ProjectsNavbar({ previous, next, project }) {
    const [rightArrowVis, setRightArrowVis] = useState(false);
    const [leftArrowVis, setLeftArrowVis] = useState(false);
    const [projectNumber, setProjectNumber] = useState(convertToNumber(project));

    useEffect(() => {
        const number = convertToNumber(project);
        setProjectNumber(number);
        setLeftArrowVis(number > 1);
        setRightArrowVis(number < 4);
    }, [project]);

    return (
        <div className="project-navbar">
            <div className="container-1400">
                <div className="spreader">

                    <div>{projectNumber === 1 ? (
                            <Link to="/">
                                <FaChevronLeft />
                                <span className='home'>
                                    Return Home
                                </span>
                            </Link>
                        ) : (
                            leftArrowVis && (
                                <Link to={`/project/${convertToString(projectNumber - 1)}`}>
                                    <span className='previous'>
                                        <FaChevronLeft /> {previous}
                                    </span>
                                </Link>
                            )
                        )}
                    </div>
                    <div>

                    {rightArrowVis && (
                        <Link to={`/project/${convertToString(projectNumber + 1)}`}>
                            <span className='next'>
                                {next} <FaChevronRight />
                            </span>
                        </Link>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}
