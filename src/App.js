import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FullPage from './components/FullPage';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
	return (
		<div>
			<NavBar/>
			<Intro/>
			<About/>
			<Portfolio/>
			<FullPage color="blue" label="experience"/>
			<FullPage color="green" label="skills"/>
			<Footer/>
		</div>
	);
}

export default App;
