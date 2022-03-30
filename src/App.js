import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FullPage from './components/FullPage';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';

function App() {
	return (
		<div>
			<NavBar/>
			<Intro/>
			<FullPage color="blue" label="experience"/>
			<FullPage color="green" label="skills"/>
			<Footer/>
		</div>
	);
}

export default App;
