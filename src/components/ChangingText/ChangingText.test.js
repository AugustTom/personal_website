import React from 'react';
import ChangingText from './ChangingText';
import {act, render} from '@testing-library/react';

describe('Changing Text', () => {

	const typingSpeed = 1000;

	it('shows all words one by one', async () => {
		const {getByTestId} = render(<ChangingText words={options}/>);
		await new Promise((r) => setTimeout(r, typingSpeed * options[0].length));
		expect(getByTestId('text-holder').textContent).toBe(options[0]);
	});
});
