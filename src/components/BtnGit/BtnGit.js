import './style.css';

import git from "./gitHub-black.svg";

function BtnGit ({link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={git} alt="" />
            GitHub repo
        </a>
    )
}

export default BtnGit