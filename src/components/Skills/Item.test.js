import {render} from '@testing-library/react';
import Item from './Item';
import {skills} from '../../data/skills.json';

describe('Skills Item', () => {

	it('renders without crashing', () => {
		render(<Item />);
	});
	it('renders the skill correctly', ()=>{
		const {getByTestId} = render(<Item skill={skills[0]}/>);
		expect(getByTestId('skill-item-title').textContent).toBe(skills[0].title);
	});
});