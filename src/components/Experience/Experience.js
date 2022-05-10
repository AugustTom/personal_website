import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from '../../data/experience.json';

export default () => {
	const items = experienceData.experience;

	return (
		<section id="experience">
			{items.map(item => {
				return <ExperienceItem key={item.title} {...item} />;
			})}
		</section>
	);
};