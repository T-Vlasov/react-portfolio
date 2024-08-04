import "./style.css";

import { NavLink } from "react-router-dom";

function Project (props) {
    return (
        <NavLink to={props.link}>
            <li className="project">
                <div className="base">
                    <div className="project__img">
                        <img src={props.img} alt={props.title} className="project__img" />
                    </div>
                </div>
                <h3 className="project__title">{props.title}</h3>
                <h6 className="project__description">{props.desk}</h6>
            </li>
        </NavLink>
    )
}

export default Project