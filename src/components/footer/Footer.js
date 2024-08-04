import "./style.css"

import vk from "./../../img/icons/vk.svg";

function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"></img></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer