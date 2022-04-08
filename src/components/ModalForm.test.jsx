// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import ModalForm from "./ModalForm";
import { TasksProvider } from "../state/TasksContext";
import validateName from "../scripts/validation/validateName";
import InputField from "./InputField";

test("Opens when showModal is setted to true", () => {
  // Arrange
  const goodModalState = [true, () => {}];

  render(<TasksProvider><ModalForm modalState={goodModalState} /></TasksProvider>);

  // Act
  const titleElement = screen.queryByText(/Create new item/i);

  // Assert
  expect(titleElement).toBeInTheDocument();
});

test("Doesn't open when showModal is setted to false", () => {
  // Arrange
  const badModalState = [false, () => {}];

  render(<TasksProvider><ModalForm modalState={badModalState} /></TasksProvider>);

  // Act
  const titleElement = screen.queryByText(/Create new item/i);

  // Assert
  expect(titleElement).not.toBeInTheDocument();
});

// test("Shows error message when validation fails", () => {
//   // Arrange
//   const setup = {"label":"validatedField"};
//   const state = ["",()=>{}];
//   const validation = validateName("");
  
//   const listState = [[], () => {}];
//   const goodModalState = [true, () => {}];

//   render(<ModalForm listState={listState} modalState={goodModalState} />);
//   render( <InputField setup={setup} state={state} validation={validation}/>);

//   // Act
//   const errorMessage = "You must enter the product name";
  
//   // Assert
//   
//   expect(errorMessage).toBeInTheDocument();
// });