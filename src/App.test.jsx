// NPM packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import App from "./App";

test("Creates a task item when submitting a valid name and price", () => {
  // Arrange
  const correctName = "Chair";
  const correctPrice = "900";
  render(<App />);

  // Act
  const firstButton = screen.queryByText(/add item/i);
  fireEvent.click(firstButton);
  const inputName = screen.queryByLabelText(/product name/i);
  const inputPrice = screen.queryByLabelText(/price/i);
  const secondButton = screen.queryByText(/submit/i);
  fireEvent.change(inputName, { target: { value: correctName } });
  fireEvent.change(inputPrice, { target: { value: correctPrice } });
  fireEvent.click(secondButton);
  const newTask = screen.queryByText(/chair, 900:-/i);

  // Assert
  expect(newTask).toBeInTheDocument();
});


  test("Don't create a task item when submitting invalid name", () => {
    // Arrange
    const incorrectName = "";
    const correctPrice = "500";
    render(<App />);
  
    // Act
    // Step 1 (open modal)
    const firstButton = screen.queryByText(/add item/i);
    fireEvent.click(firstButton);
    // Step 2 (fill the form)
    const inputName = screen.queryByLabelText(/product name/i);
    const inputPrice = screen.queryByLabelText(/price/i);
    const secondButton = screen.queryByText(/submit/i);
    fireEvent.change(inputName, { target: { value: incorrectName } });
    fireEvent.change(inputPrice, { target: { value: correctPrice } });
    fireEvent.click(secondButton);
    // Step 3 (check that the task was created)
    const newTask = screen.queryByText(/ ,500:-/i);
  
    // Assert
    expect(newTask).not.toBeInTheDocument();
  });
  
  
test("Don't create a task item when submitting invalid price", () => {
  // Arrange
  const incorrectName = "Chair";
  const incorrectPrice = "-1";
  render(<App />);

  // Act
  // Step 1 (open modal)
  const firstButton = screen.queryByText(/add item/i);
  fireEvent.click(firstButton);
  // Step 2 (fill the form)
  const inputName = screen.queryByLabelText(/product name/i);
  const inputPrice = screen.queryByLabelText(/price/i);
  const secondButton = screen.queryByText(/submit/i);
  fireEvent.change(inputName, { target: { value: incorrectName } });
  fireEvent.change(inputPrice, { target: { value: incorrectPrice } });
  fireEvent.click(secondButton);
  // Step 3 (check that the task was created)
  const newTask = screen.queryByText(/Chair,-1:-/i);

  // Assert
  expect(newTask).not.toBeInTheDocument();
});


test("Don't create a task item when submitting invalid name and price", () => {
  // Arrange
  const incorrectName = "";
  const correctPrice = "-1";
  render(<App />);

  // Act
  // Step 1 (open modal)
  const firstButton = screen.queryByText(/add item/i);
  fireEvent.click(firstButton);
  // Step 2 (fill the form)
  const inputName = screen.queryByLabelText(/product name/i);
  const inputPrice = screen.queryByLabelText(/price/i);
  const secondButton = screen.queryByText(/submit/i);
  fireEvent.change(inputName, { target: { value: incorrectName } });
  fireEvent.change(inputPrice, { target: { value: correctPrice } });
  fireEvent.click(secondButton);
  // Step 3 (check that the task was created)
  const newTask = screen.queryByText(/ ,-1:-/i);

  // Assert
  expect(newTask).not.toBeInTheDocument();
});


test("Modal closes when clicking cancel button",()=>{
  //Arrange
  render(<App/>);

  //Act
  // Step 1 (open modal)
  const firstButton = screen.queryByText(/add item/i);
  fireEvent.click(firstButton);
  // Step 2 (closes modal)
  const secondButton = screen.queryByText(/cancel/i);
  fireEvent.click(secondButton);
  const titleElement = screen.queryByText(/Create new item/i);


  //Assert
  expect(titleElement).not.toBeInTheDocument();
  });


test("Goes to the Welcome screen when the list is empty", () => {
  // Arrange
  const fakeData = [];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));
  render(<App/>)

  // Act
  const titleElement = screen.queryByText(/EIKA's shopping list/i);

  // Assert
  screen.debug();
  expect(titleElement).toBeInTheDocument();
});  

test("Goes to the Shopping screen when the list is not empty", () => {
  // Arrange
  // spy on localStorage to follow it around
  // "hack" the localStorage when is about to be used
  // send the "fake data" to the App
  const fakeItem = {
    id: 0,
    name: "Table with black leather",
    price: 777,
    completed: false,
    imageURL: "",
  };
  const fakeList = [fakeItem];
  const fakeData = JSON.stringify(fakeList);

  Storage.prototype.getItem = jest.fn(() => fakeData);
  render(<App />);

  // Act
  const titleElement = screen.queryByText(/Shopping List/i);
  const loadedTasks = screen.queryByText(/table with black leather, 777:-/i);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(loadedTasks).toBeInTheDocument();
});
