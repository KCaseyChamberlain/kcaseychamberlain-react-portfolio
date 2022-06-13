import React from 'react';
import resumeImage1 from "../../assets/resume/resume-image1.jpg";
import resumeImage2 from "../../assets/resume/resume-image2.jpg";

function Resume() {

    return (
        <section className="my-5" >
            <div id='resume'>
                <img src={resumeImage1} className="my-2 resume-images" style={{ width: "47%" }} alt="resume page 1" />
                <img src={resumeImage2} className="my-2 resume-images" style={{ width: "47%" }} alt="resume page 2" />
            </div>
            
            <div className="my-2">

                <div id="download-resume" className='flex-row'>
                    <a id='download' href="https://docs.google.com/document/d/1JZmTZZerYMMK7dJCxq2Iew3pQl12C7OrLxBNVcnie2M/edit?usp=sharing" target="blank">
                        <h4>Download & View Resume Here!</h4>
                    </a>
                </div>


                <div id="dev-pro">
                    <h3 >Developer Proficiencies:</h3>
                    <p>
                        HTML, CSS, JavaScript, MySQL, MongoDB, Express.js, React.js, Node.js, Bootstrap, Heroku, jQuery, Handlebars.js, Git.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Resume;