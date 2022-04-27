import React from 'react';
import styles from './Item.module.css';

export default ({skill = {title:'',level:0}}) => {
	return (
		<>
			<div className="skill-item">
				<div className="skill-item-title" data-testid="skill-item-title">{skill.title}</div>
				<div className={styles.skills}>
					{/*TODO replace with circles*/}
					{Array(skill.level).fill(1).map((_,i) => <span key={i} className="skill-item-level-item">&#9732;</span>)}
					{Array(5 - skill.level).fill(1).map((_,i) => <span key={i} className="skill-item-level-item">&#9730;</span>)}
				</div>
			</div>
		</>
	);
};
