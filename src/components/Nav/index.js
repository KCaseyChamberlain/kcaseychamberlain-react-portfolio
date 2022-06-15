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
                <a id="app-creator" href="/kcaseychamberlain-react-portfolio">
                    Casey Chamberlain
                </a>
            </h2>

            <nav>
                <ul className="flex-row">

                    <li className="mx-2">
                        {/* if aboutSelected is true, the nav-active class will be added to the <a> tag */}
                        <a className={` ${aboutSelected && 'nav-active'}`} href="#about" onClick={() => {
                            setAboutSelected(true);
                            setContactSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            About Me
                        </a>
                    </li>

                    <li className="mx-2">
                        <a className={` ${contactSelected && 'nav-active'}`} href="#contact" onClick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            Contact Me
                        </a>
                    </li>

                    <li className="mx-2 ">
                        <a className={` ${portfolioSelected && 'nav-active'}`} href="#portfolio" onClick={() => {
                            setPortfolioSelected(true)
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>
                            My Portfolio
                        </a>
                    </li>

                    <li className="mx-2">
                        <a className={` ${resumeSelected && 'nav-active'}`} href="#resume" onClick={() => {
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