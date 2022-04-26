import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../../data/portfolio';

export default () => {
	const items = portfolioData.portfolio;

	return (
		<div id="portfolio">
			{items.map(item => {
				return <PortfolioItem key={item.title} {...item} />;
			})}
		</div>
	);
};