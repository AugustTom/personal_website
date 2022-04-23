import React from 'react';
import Typewriter from 'typewriter-effect';
import FullPage from '../FullPage';

export default () => {
	return (
		<FullPage>
			<div className="intro">
				<h1> Hi I am </h1>
				<Typewriter
					options={{
						strings: ['Auguste', 'a web developer', 'a learner', 'a maker'],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</FullPage>
	);
};

