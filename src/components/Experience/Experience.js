import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from '../../data/experience.json';

export default () => {
	const items = experienceData.experience;

	return items.map(item => <ExperienceItem key={item.title} {...item} />);
};