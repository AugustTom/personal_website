import React from 'react';
import aboutStatement from '../../data/about.json';
import FullPage from '../FullPage';

export default () => {
	return (
		<FullPage label="mission" >
			<h5 data-testid="mission-text">
				{aboutStatement.about}
			</h5>
		</FullPage>
	);
};