import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('<Greeting />', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing in this case

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button is NOT clicked', () => {
    render(<Greeting />);

    const paraElement = screen.getByText('good to see you', { exact: false });

    expect(paraElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was Clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const paraElement = screen.getByText('Changed!');
    expect(paraElement).toBeInTheDocument();
  });

  test('does not render "Good to see you" if the button was Clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const paraElement = screen.queryByText('good to see you', { exact: false });
    expect(paraElement).toBeNull();
  });
});
