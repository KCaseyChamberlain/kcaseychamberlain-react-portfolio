import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who is kcaseychamberlain?</h1>
            <img src={coverImage} className="my-2" style={{ width: "55%" }} alt="cover" />
            <div className="my-2">
                <p>
                    Recent full stack web developer graduate with previous analyst experience. Professionally educated at the University of Utah. Graduated from Coding Bootcamp in the spring of 2022.
                    Skills and experiences in HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. Strengths in teamwork, meeting deadlines, creativity, and self reliance. Known to be a hyperactive and determined person passionate about developing full stack web applications.
                </p>
                <p>
                    With each project, my aim is to learn new skills and to make the most UI friendly experience. I recently created a full stack web application that included a storefront with a forum feature attached to the store. I worked on a team of four to develop a board game storefront that also allowed a social aspect to the board game community. I’m excited to leverage my skills as part of a fast-paced quality-driven team to build better experiences for the users who will come across my work.
                </p>
                <p>
                    My technical experience as a shipping analyst for an international market for one of “America’s Best Midsize Employers” (Forbes), has taught me the importance of the corporate work setting and communication. My experience as an analyst and in corporate communication makes me a strong addition as a developer with a mindset geared towards the small details and the user.
                </p>
            </div>
        </section>
    );
}

export default About;