import { TextField } from 'src/components/textfield';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
describe('TextField component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TextField />);
    expect(container).toBeInTheDocument();
  });
});
