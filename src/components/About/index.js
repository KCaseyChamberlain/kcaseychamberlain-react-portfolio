import React from 'react';

function About() {

    return (
        <section>
            <div
                id='hero'
                alt="Casey and his dog Chief"
                className='flex-row'
            >
                <div>
                    <h1 id="about-title">Who is KCaseyChamberlain?</h1>
                </div>
            </div>

            <div id='about-block'>
                <p className='about-text'>
                Recent full stack web developer graduate with previous analyst experience. Professionally educated at the University of Utah. Graduated from the University's Coding Bootcamp in the spring of 2022. Strengths in teamwork, meeting deadlines, creativity, and self reliance. Known to be a hyper focused and determined individual passionate about developing full stack web applications.                </p>
                <p className='about-text'>
                My technical experience as an international shipping analyst for one of “America’s Best Midsize Employers” (Forbes), has taught me the importance of the corporate environment and communication. My past experience makes me a strong addition as a developer with a mindset geared towards the small details and the user.
                </p>
            </div>
        </section>
    );
}

export default About;