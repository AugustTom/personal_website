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
				<h3 className='title'>{title}</h3>
				<div className={styles.description}>
					{description}
				</div>
				<a className='link' href={href}>{linkText}</a>
				{/*TODO fix imports */}
				<img src={`../../assets/${title.replaceAll(' ', '-').toLowerCase()}.gif`} alt={`${title} animation`}/>
			</div>
		</FullPage>
	);
};