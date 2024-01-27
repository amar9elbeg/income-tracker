import React from 'react';
import { render } from '@testing-library/react';
import { GeldIcon } from 'src/components/icons';
import '@testing-library/jest-dom';

describe('GeldIcon component', () => {
  it('renders without crashing', () => {
    const { container } = render(<GeldIcon />);
    expect(container).toBeInTheDocument();
  });
});
