import React from 'react';
import FullPage from '../FullPage';
import styles from './PortfolioItem.module.css';

export default ({
	title = 'title',
	description = 'lorien impoigaghuag jjggkl ',
	linkText = 'Find out more here',
	href = '#',
	// image='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg'
}) => {

	return (
		<FullPage>
			<div className={styles.item}>
				<div className={styles.top}>
					<h3 className="title">{title}</h3>
					<span className={styles.description}>
						{description}
					</span>
					<a className="link" href={href}>{linkText}</a>
				</div>
				<img
					src={`https://auguste-personal-website.s3.eu-west-2.amazonaws.com/${title.replaceAll(' ', '-').toLowerCase()}.gif`}
					alt={`${title} animation`}/>
			</div>
		</FullPage>
	);
};