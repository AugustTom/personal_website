import Mission from './Mission';
import {render} from '@testing-library/react';
import text from '../../data/about.json';

describe('Mission', () => {
	it('renders without crashing', () => {
		render(<Mission />);
	});
	it('renders correct text',  () => {
		const {getByTestId} = render(<Mission />);
		expect(getByTestId('mission-text')).toHaveTextContent(text.about);
	});

});
