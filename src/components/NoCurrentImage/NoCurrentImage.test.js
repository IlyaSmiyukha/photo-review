import React from 'react';
import { render } from '@testing-library/react';
import NoCurrentImage from './NoCurrentImage';

test('renders NoCurrentImage component', () => {
  const { getByText } = render(
      <NoCurrentImage />
  );

  expect(getByText(/click on the/i)).toBeInTheDocument();
});
