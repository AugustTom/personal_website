import React from 'react';
import FullPage from '../../components/FullPage';
import Item from './Item';
import items from '../../data/skills.json';

export default () => {
	return (
		<FullPage label='skills'>
			{items.skills && items.skills.map(item => <Item key={item.title} skill={item} />)}
		</FullPage>);
};