import React from 'react';
import FullPage from '../../components/FullPage';
import Item from './Item';
import items from '../../data/skills.json';

export default () => {
	console.log(items.skills);
	return (
		<FullPage>
			<p>Hello</p>
			{items.skills && items.skills.map(item => <Item key={item.title} skill={item} />)}
		</FullPage>);
};