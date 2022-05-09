import React from "react";

function Nav(props) {
    // passed to App.js
    const {
        contactSelected,
        setContactSelected,

        aboutSelected,
        setAboutSelected,

        portfolioSelected,
        setPortfolioSelected,

        resumeSelected,
        setResumeSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a id="app-creator" href="/">
                    Casey Chamberlain
                </a>
            </h2>

            <nav>
                <ul className="flex-row">

                    <li >
                        {/* if aboutSelected is true, the navActive class will be added to the <a> tag */}
                        <a className={`mx-2 nav-title ${aboutSelected && 'navActive'}`} href="#about" onClick={() => {
                            setAboutSelected(true);
                            setContactSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            About Me
                        </a>
                    </li>

                    <li >
                        <a className={`mx-2 nav-title ${contactSelected && 'navActive'}`} href="#contact" onClick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            Contact Me
                        </a>
                    </li>

                    <li >
                        <a className={`mx-2 nav-title ${portfolioSelected && 'navActive'}`} href="#portfolio" onClick={() => {
                            setPortfolioSelected(true)
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>
                            My Portfolio
                        </a>
                    </li>

                    <li >
                        <a className={`mx-2 nav-title ${resumeSelected && 'navActive'}`} href="#resume" onClick={() => {
                            setResumeSelected(true)
                            setAboutSelected(false);
                            setContactSelected(false);
                            setPortfolioSelected(false);
                        }}>
                            My Resume
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;