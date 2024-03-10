import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Typography } from '@components/typography';

describe('Typography component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Typography />);
    expect(container).toBeInTheDocument();
  });
});
