import React from "react";

function Footer() {

    return (
        <footer className="flex-row px-1">
            <nav>
                <ul className="flex-row">

                    <li className={"mx-2"}>
                        <a data-testid="github" href="https://github.com/KCaseyChamberlain" target="blank">
                            GitHub
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <a data-testid="linkedin" href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                            LinkedIn
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <a data-testid="insta" href="https://www.instagram.com/khamberlain/?hl=en" target="blank">
                            Instagram
                        </a>
                    </li>

                </ul>
            </nav>
        </footer>
    );
}

export default Footer;