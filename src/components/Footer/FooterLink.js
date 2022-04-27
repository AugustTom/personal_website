import React from 'react';
import style from './FooterLink.module.css';

export default ({href, children}) => {
	return (
		<h5 className={style.link}>
			<a href={href}> {children}</a>
		</h5>
	);
};