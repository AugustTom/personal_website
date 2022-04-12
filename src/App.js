import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FullPage from './components/FullPage';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/Mission/Mission';

function App() {
	return (
		<div>
			<NavBar/>
			<Intro/>
			<About/>
			<FullPage color="blue" label="experience"/>
			<FullPage color="green" label="skills"/>
			<Footer/>
		</div>
	);
}

export default App;
