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
                    <a id='download' href={require("../../assets/resume/KCaseyChamberlain_Resume.pdf")} download="Casey_Chamberlain_Resume.pdf">
                        <h4>Download Resume Here!</h4>
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