import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../../data/portfolio';

export default () => {
	const items = portfolioData.portfolio;

	return items.map(item => <PortfolioItem key={item.title} {...item} />);
};