import React from 'react';

import Anchor from './Anchor';

export default () => {

	return (
		<nav className="navbar sticky">
			<div className="nav-center">
				<Anchor anchor="mission">Mission</Anchor>
				<Anchor anchor="portfolio">Portfolio</Anchor>
				<Anchor anchor="experience">experience</Anchor>
				<Anchor anchor="skills">skills</Anchor>
			</div>
		</nav>
	);
};