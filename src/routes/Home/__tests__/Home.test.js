import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../';

test('Render Home correctly', () => {
  const { getByRole } = render(<Home />);

  expect(getByRole('heading')).toHaveTextContent('My Universities');
})