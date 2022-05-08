import React from 'react';
import resumeImage1 from "../../assets/resume/resume-image1.jpg";
import resumeImage2 from "../../assets/resume/resume-image2.jpg";

function Resume() {

    return (
        <section className="my-5" >
            <h1 id="resume">My Resume</h1>
            <img src={resumeImage1} className="my-2" style={{ width: "100%" }} alt="resume page 1" />
            <img src={resumeImage2} className="my-2" style={{ width: "100%" }} alt="resume page 2" />
            <div className="my-2">
                <a data-testid="devresdoc" href="https://docs.google.com/document/d/1JZmTZZerYMMK7dJCxq2Iew3pQl12C7OrLxBNVcnie2M/edit?usp=sharing" target="blank">
                    <h5>Download & View Resume Here!</h5>
                </a>
                <h3 id="dev-pro">Developer Proficiencies:</h3>
                <p>
                    M.E.R.N., HTML, CSS, JavaScript, React JS, Node.JS, Express.JS, MongoDB, MySQL, NoSQL, Handlebars.JS, Bootstrap, Bulma.
                </p>
            </div>
        </section>
    );
}

export default Resume;