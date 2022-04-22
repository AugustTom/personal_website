import React from 'react';

export default ({skill = {title:'',level:0}}) => {
	return (
		<>
			skill && (
			<div className="skill-item">
				<div className="skill-item-title" data-testid="skill-item-title">{skill.title}</div>
				<div className="skill-item-level">{skill.level}</div>
			</div>
			)
		</>
	);
};
