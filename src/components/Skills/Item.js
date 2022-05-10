import React from 'react';
import styles from './Item.module.css';

export default ({skill = {title:'',level:0}}) => {
	return (
		<>
			<div className="skill-item">
				<div className={styles.title} data-testid="skill-item-title"><h5>{skill.title}</h5></div>
				<div className={styles.skills}>
					{Array(skill.level).fill(1).map((_,i) => <h5 key={i} className="skill-item-level-item">&#9679;</h5>)}
					{Array(5 - skill.level).fill(1).map((_,i) => <h5 key={i} className="skill-item-level-item">&#9675;</h5>)}
				</div>
			</div>
		</>
	);
};
