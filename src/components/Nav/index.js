import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {

        contactSelected,
        setContactSelected,

        aboutSelected,
        setAboutSelected,

        portfolioSelected,
        setPortfolioSelected,

        resumeSelected,
        setResumeSelected

    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Casey Chamberlain
                </a>
            </h2>

            <nav>
                <ul className="flex-row">

                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <a data-testid="about" href="#about" onClick={() => {
                            setAboutSelected(true);
                            setContactSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            About Me
                        </a>
                    </li>

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a data-testid="contact" href="#contact" onClick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setResumeSelected(false);
                        }}>
                            Contact Me
                        </a>
                    </li>

                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <a data-testid="portfolio" href="#portfolio" onClick={() => {
                            setPortfolioSelected(true)
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>
                            My Portfolio
                        </a>
                    </li>

                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <a data-testid="resume" href="#resume" onClick={() => {
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