import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

// TODO - add navbar space at the top
// - TODO: Fix up skills
// - TODO: Fix up footer
// - TODO: add portfolio
// - TODO: change mission
// TODO: add logo
// TODO: add name

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
