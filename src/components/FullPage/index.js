import React from 'react';
import styles from './FullPage.module.css';
export default ({ children, label = ''}) => {
	return (
		<section id={label.toLowerCase()} className={styles.page}>
			<>{children}</>
		</section>
	);
};