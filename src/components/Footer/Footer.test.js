import Footer from './index'

import React from 'react'
import {render, cleanup} from '@testing-library/react'

afterEach(cleanup);

describe('Footer', () => {
    it('should be visible', () => {
        const {getByTestId} = render(<Footer/>);
        expect(getByTestId('footer')).toBeVisible();
    });
})
