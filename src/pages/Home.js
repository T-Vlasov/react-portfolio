import Header from "./../components/header/Header.js";

function Home () {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                <ul className="content-list_main-page">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, Gulp</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, python, Django</p>
                    </li>
                </ul>
                </div>
            </main>
        </>
    )
}

export default Home