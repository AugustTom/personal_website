import React from 'react';
import styles from './FullPage.module.css';

export default ({ children}) => {
	return (
		<div className={styles.page}>
			<>{children}</>
		</div>
	);
};