import ExperienceItem from './ExperienceItem';
import {render} from '@testing-library/react';

describe('Experience Item', () => {
	const date = '2019 May - 2019 May';
	const title = 'Test Title';
	const company = 'Test Company';
	const description = ['Test Description'];
	const skills = ['a', 'b', 'c'];

	it('renders without crashing', () => {
		render(<ExperienceItem date={date} title={title} company={company} description={description} skills={skills}  />);
	});
	it('renders props correctly', () => {
		const {getByText} = render(<ExperienceItem date={date} title={title} company={company} description={description} skills={skills} />);
		expect(getByText(date)).toBeInTheDocument();
		expect(getByText(title)).toBeInTheDocument();
		description.map(item => {
			expect(getByText(item)).toBeInTheDocument();
		});
		expect(getByText(company)).toBeInTheDocument();
		skills.map(item => {
			expect(getByText(item)).toBeInTheDocument();
		});

	});
});