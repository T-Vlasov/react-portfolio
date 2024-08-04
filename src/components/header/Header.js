import "./style.css"

import header_bg from "../../img/header-bg.png";

function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={header_bg} alt="Beautiful" className="header__img" />
            </div>
        </header>
    )
}

export default Header