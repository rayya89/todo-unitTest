// NPM packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import App from "./App";

test("Creates a task item when submit the correct info", () => {
  // Arrange
  const correctName = "Chair";
  const correctPrice = "900";

  render(<App />);

  // Act
  const firstButton = screen.queryByText(/add item/i);
  fireEvent.click(firstButton);

  
  const inputName = screen.getByLabelText(/product name/i);
  const inputPrice = screen.getByLabelText(/price/i);
  const secondButton = screen.queryByText(/submit/i);
  fireEvent.change(inputName, { target: { value: correctName } });
  fireEvent.change(inputPrice, { target: { value: correctPrice } });
  fireEvent.click(secondButton);

  
  const newTask = screen.queryByText(/chair, 900:-/i);

  // Assert
  expect(newTask).toBeInTheDocument();
});

test("Don't create a task item when submit incorrect info", () => {
    // Arrange
    const incorrectName = "";
    const incorrectPrice = "-1";
  
    render(<App />);
  
    // Act
    // Step 1 (open modal)
    const firstButton = screen.queryByText(/add item/i);
    fireEvent.click(firstButton);
  
    // Step 2 (fill the form)
    const inputName = screen.getByLabelText(/product name/i);
    const inputPrice = screen.getByLabelText(/price/i);
    const secondButton = screen.queryByText(/submit/i);
    fireEvent.change(inputName, { target: { value: incorrectName } });
    fireEvent.change(inputPrice, { target: { value: incorrectPrice } });
    fireEvent.click(secondButton);
  
    // Step 3 (check that the task was created)
    const newTask = screen.queryByText(/ ,-1:-/i);
  
    // Assert
    expect(newTask).not.toBeInTheDocument();
  });
  