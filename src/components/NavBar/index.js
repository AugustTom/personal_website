import React, {useState} from 'react';
import styles from './NavBar.module.css';
import Anchor from './Anchor';
import classNames from 'classnames';

export default () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar sticky">

			<div className="nav-center">
				<Anchor anchor="mission">Mission</Anchor>
				<Anchor anchor="portfolio">Portfolio</Anchor>
				<Anchor anchor="experience">experience</Anchor>
				<Anchor anchor="skills">skills</Anchor>
				<div className={styles.toggle} onClick={() => setOpen(!open)} />
			</div>
		</nav>
	);
};