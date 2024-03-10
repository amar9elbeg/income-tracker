import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Title } from '@components/typography';

describe('Title component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Title />);
    expect(container).toBeInTheDocument();
  });
});
