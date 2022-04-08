import React from 'react';
import Typewriter from 'typewriter-effect';


export default () => {
	return (
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
	);
};

