import { Button } from 'src/components/button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
describe('Button component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
