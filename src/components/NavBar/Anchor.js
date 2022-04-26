import React from 'react';
import styles from './Anchor.module.css';
export default ({anchor, children}) => {

	const handleOnClick = (e) => {
		e.preventDefault();
		document.querySelector('.container').scrollTo({
			top: document.querySelector(`#${anchor}`).offsetTop,
		});
	};
	return (
		<a className={styles.anchor} onClick={handleOnClick}>{children}</a>
	);
};