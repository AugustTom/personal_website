import React from 'react';
import style from './FooterLink.module.css';

export default ({href, children}) => {
	return (
		<h5 className={style.link}>
			<a href={href} target="_blank" rel="noreferrer"> {children}</a>
		</h5>
	);
};