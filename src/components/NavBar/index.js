import React, {useState} from 'react';
import styles from './NavBar.module.css';
import Anchor from './Anchor';
import classNames from 'classnames';

export default () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className={classNames(styles.navbar, {[styles.open]: open})}>
				<div className={styles.center}>
					<Anchor anchor="mission">Mission</Anchor>
					<Anchor anchor="portfolio">Portfolio</Anchor>
					<Anchor anchor="experience">experience</Anchor>
					<Anchor anchor="skills">skills</Anchor>
				</div>
				<div className={styles.toggle} onClick={() => setOpen(!open)}/>
			</nav>

		</>
	);
};