import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

const mockProps = {
  alt: 'alt text',
  src: ''
}

test('renders Image component', () => {
  const { getByAltText } = render(
      <Image {...mockProps}/>
  );

  expect(getByAltText(/alt text/i)).toBeInTheDocument();
});
