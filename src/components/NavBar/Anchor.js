import React from 'react';
import styles from './Anchor.module.css';
export default ({anchor, children}) => {

	const handleOnClick = (e) => {
		e.preventDefault();
		const location = document.querySelector(`#${anchor}`).offsetTop;

		window.scrollTo({
			left: 0,
			top: location - 64,
		});
	};
	return (
		<a className={styles.anchor} onClick={handleOnClick}>{children}</a>
	);
};