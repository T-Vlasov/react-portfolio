import { useParams } from 'react-router-dom';
import BtnGit from '../components/BtnGit/BtnGit';
import {projects} from './../helpers/projectsList';

function Definite_project () {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    {project.link && (
                        <BtnGit  link={project.link} />
                    )}

                    

                </div>
            </div>
        </main>
    )
}

export default Definite_project