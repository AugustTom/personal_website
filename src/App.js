import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FullPage from './components/FullPage';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';

function App() {
	return (
		<div>
			<NavBar/>
			<Intro/>
			<About/>
			<Portfolio/>
			<Experience/>
			<FullPage color="green" label="skills"/>
			<Footer/>
		</div>
	);
}

export default App;
