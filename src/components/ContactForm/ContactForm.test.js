import {render} from '@testing-library/react';
import ContactForm from "./ContactForm";

describe('Contact Form', () => {
  it('renders correctly', () => {
      render(<ContactForm/>)
    }
  )
})