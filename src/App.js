import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}

        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}

        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}

        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>

        {aboutSelected && (
          <About></About>
        )}

        {contactSelected && (
          <ContactForm></ContactForm>
        )}

        {portfolioSelected && (
          <Portfolio></Portfolio>
        )}

        {resumeSelected && (
          <Resume></Resume>
        )}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;