import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import ContactForm from "./components/ContactForm/ContactForm";

// - TODO: Fix up skills
// - TODO: change mission
// - TODO: add back to the top icon
// - TODO: fix tests


function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if(showContactForm) {
      scrollIntoContactForm();
    }
  }, [showContactForm]);

  // TODO smooth out show contact form
  const toggleAndShowContactForm = () => {
    showContactForm ? scrollIntoContactForm() : setShowContactForm(true);
  }

  const scrollIntoContactForm = () => {
    document.getElementById('contact_me').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <div className="container">
      <NavBar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Skills/>
      <ContactForm visible={showContactForm} setShowContactForm={setShowContactForm}/>
      <Footer toggleAndShowContactForm={toggleAndShowContactForm}/>
    </div>
  );
}

export default App;
