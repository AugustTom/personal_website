import PortfolioItem from './PortfolioItem';
import {render} from '@testing-library/react';

describe('Portfolio Item', () => {
	const title = 'Test Title';
	const description = 'Test Description';
	const href = 'https://www.google.com';
	const image = 'https://www.google.com/image.png';
	const linkText = 'Test Alt';

	it('renders without crashing', () => {
		render(<PortfolioItem />);
	});
	it('renders props correctly', () => {
		const {getByText} = render(<PortfolioItem title={title} description={description} href={href} image={image} linkText={linkText} />);
		expect(getByText(title)).toBeInTheDocument();
		expect(getByText(description)).toBeInTheDocument();
		expect(getByText(linkText)).toBeInTheDocument();
	});
});