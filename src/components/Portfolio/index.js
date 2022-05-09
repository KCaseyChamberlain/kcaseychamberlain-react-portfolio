import React from 'react';

const Portfolio = () => {

    return (
        <div className='container'>
            <div className="flex-row ">

                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Deep Thoughts</h2>
                        <a href="https://guarded-wave-66695.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/deep-thoughts.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This appication demonstrates M.E.R.N.</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/deep-thoughts" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>


                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Copy Cat Games</h2>
                        <a href="https://morning-spire-87893.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/copy-cat-games.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This full stack appication demonstrates collaboration and MySQL</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/copy-cat-games" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>6Day Six Weather</h2>
                        <a href="https://kcaseychamberlain.github.io/6day-six-weather/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/6day-six-weather.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates the dynamic use of public APIs</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/6day-six-weather" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>


                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Uhoo</h2>
                        <a href="https://kcaseychamberlain.github.io/uhoo/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/uhoo.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates the use of team work and many public APIs</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://github.com/KCaseyChamberlain/uhoo" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Food Festival</h2>
                        <a href="https://kcaseychamberlain.github.io/food-festival/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/food-festival.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This appication demonstrates offline functionality and code modularization for performance boosts</p>
                    </div>

                    <div className='live-repos '>
                        <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </div>

                <div className='modalContainer flex-row'>
                    <div className='live-image '>
                        <h2 className='portfolio-name-title'>Techite</h2>
                        <a href="https://calm-garden-53998.herokuapp.com/" target="blank">
                            <img
                                src={require(`../../assets/portfolio/techite.jpg`)}
                                alt='test'
                                className="img-thumbnail mx-1"
                            />
                        </a>
                        <p>This application demonstrates full stack web development with a MySQL database</p>
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
