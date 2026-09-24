import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the dashboard heading and all cards', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Social Media Dashboard' })).toBeInTheDocument();
  expect(screen.getAllByText('Followers')).toHaveLength(4);
  expect(screen.getAllByText('Pages Views')).toHaveLength(8);
});

test('dark mode checkbox toggles the dark class on the root wrapper', () => {
  const { container } = render(<App />);
  const toggle = screen.getByLabelText('Dark Mode');
  expect(container.firstChild).not.toHaveClass('dark');

  fireEvent.click(toggle);
  expect(toggle).toBeChecked();
  expect(container.firstChild).toHaveClass('dark');

  fireEvent.click(toggle);
  expect(container.firstChild).not.toHaveClass('dark');
});
