import React from 'react';

const Portfolio = () => {

    return (
        
        <div className="flex-row">

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/0.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="0"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/1.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="1"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/2.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="2"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/3.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="3"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/4.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="4"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/kcaseychamberlain" target="blank">
                    <img
                        src={require(`../../assets/portfolio/4.jpg`)}
                        alt='test'
                        className="img-thumbnail mx-1"
                        key="5"
                    />
                </a>
            </div>

        </div>
    );
};

export default Portfolio;
