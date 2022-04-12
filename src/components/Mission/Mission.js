import React from 'react';
import aboutStatement from '../../data/about.json';
import FullPage from '../FullPage';

export default () => {
	return (
		<FullPage label="mission" >
			<div data-testid="mission-text">
				{aboutStatement.about}
			</div>
		</FullPage>
	);
};