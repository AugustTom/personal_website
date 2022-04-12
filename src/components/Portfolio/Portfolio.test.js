import Portfolio from './Portfolio';
import {render} from '@testing-library/react';

describe('Portfolio', () => {
	it('renders without crashing', () => {
		render(<Portfolio />);
	});
});