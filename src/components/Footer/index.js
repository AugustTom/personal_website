import React from 'react';
import FooterLink from './FooterLink';
import styles from './Footer.module.css';

export default () => {
	return (
		<div className={styles.background}>
			<div className={styles.footer} data-testid={'footer'}>
				<FooterLink href={'https://www.linkedin.com/in/augusttom/'}>LinkedIn</FooterLink>
				<FooterLink href={'https://github.com/AugustTom'}>Github</FooterLink>
				<FooterLink href={'https://medium.com/@augusttomaeviit'}>Medium</FooterLink>
			</div>
		</div>
	);
};