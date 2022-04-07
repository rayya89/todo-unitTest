// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import ModalForm from "./ModalForm";
import validateName from "../scripts/validateName";
import InputField from "./InputField";

test("Opens when showModal is setted to true", () => {
  // Arrange
  const listState = [[], () => {}];
  const goodModalState = [true, () => {}];

  render(<ModalForm listState={listState} modalState={goodModalState} />);

  // Act
  const titleElement = screen.queryByText(/Create new item/i);

  // Assert
  expect(titleElement).toBeInTheDocument();
});

test("Doesn't open when showModal is setted to false", () => {
  // Arrange
  const listState = [[], () => {}];
  const badModalState = [false, () => {}];

  render(<ModalForm listState={listState} modalState={badModalState} />);

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
//   const titleElement = screen.queryByText(/validatedField/i);

//   // Act
//   const errorMessage = screen.queryByText(/hh/i);
  
//   // Assert
//   screen.debug();
//   expect(errorMessage).toBeInTheDocument();
// });