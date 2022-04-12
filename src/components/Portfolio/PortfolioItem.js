import React from 'react';
import FullPage from '../FullPage';

export default ({title ='title',
	description= 'lorien impoigaghuag jjggkl ',
	linkText='Find out more here',
	href='#',
	image='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png'}) => {

	return (
		<FullPage>
			<div className='portfolioItem'>
				<h3 className='title'>{title}</h3>
				<p className='description'>
					{description}
				</p>
				<a className='link' href={href}>{linkText}</a>
				{/*TODO replace with an actual image*/}
				<img src={image} alt={`${title}-image`}/>
			</div>
		</FullPage>
	);
};