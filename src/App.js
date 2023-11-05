import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

// - TODO: Fix up skills
// - TODO: add contact form
// - TODO: change mission
// - TODO: add back to the top icon
// - TODO: fix tests


function App() {
	return (
		<div className="container">
			<NavBar/>
			<Intro/>
			<About/>
			<Portfolio/>
			<Experience/>
			<Skills/>
			<Footer/>
		</div>
	);
}

export default App;
