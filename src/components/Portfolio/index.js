import React from 'react';

const Portfolio = () => {

    return (
        <div className='container'>
            <div className="flex-row ">

                {/* my budget */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>My Budget</h2>
                        <a href="https://amir-mybudget.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/my-budget.jpg`)}
                                alt='my budget app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This M.E.R.N. full stack application dynamically and safely displays the user's sensitive budgeting information once authenticated. JSON Web Token is utilized for secure authentication. This application was created with the aim to streamline and visualize the user's sensitive budget through user created categories. Bootstrap has been used to make the application's styling responsive to even mobile sizes.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/AShariat/my-budget" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* deep thoughts */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Deep Thoughts</h2>
                        <a href="https://guarded-wave-66695.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/deep-thoughts.jpg`)}
                                alt='deep thoughts app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/deep-thoughts" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* copy cat games */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Copy Cat Games</h2>
                        <a href="https://morning-spire-87893.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/copy-cat-games.jpg`)}
                                alt='copy cat games app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/copy-cat-games" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* 6day six weather */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>6Day Six Weather</h2>
                        <a href="https://kcaseychamberlain.github.io/6day-six-weather/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/6day-six-weather.jpg`)}
                                alt='6 day six weather app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/6day-six-weather" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* uhoo */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Uhoo</h2>
                        <a href="https://kcaseychamberlain.github.io/uhoo/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/uhoo.jpg`)}
                                alt='uhoo app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates the use of team work and many public APIs. This application demonstrates the use of team work and many public APIs. This application demonstrates the use of team work and many public APIs.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/uhoo" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* food festival */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Food Festival</h2>
                        <a href="https://kcaseychamberlain.github.io/food-festival/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/food-festival.jpg`)}
                                alt='food festival app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                {/* techite */}
                <div className='portfolioBlock flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Techite</h2>
                        <a href="https://calm-garden-53998.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/techite.jpg`)}
                                alt='techite app demo'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/techite" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
