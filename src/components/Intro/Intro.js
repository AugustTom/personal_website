import React from 'react';
import Typewriter from 'typewriter-effect';
import FullPage from '../FullPage';
import style from './Intro.module.css';

export default () => {
	return (
		<div className={style.background}>
			<FullPage label='intro'>

				<h1> Hi I am </h1>
				<h1>
					<Typewriter
						options={{
							strings: ['Auguste', 'a developer', 'a learner', 'a maker'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>

			</FullPage>
		</div>
	);
};

