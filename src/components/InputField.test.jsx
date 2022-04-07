// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import InputField from "./InputField";

test("Works when field validation exists", () => {
    // Arrange
    const setup = {"label":"validatedField"};
    const state = ["",()=>{}];
    const validation = () => {};
  
    render( <InputField setup={setup} state={state} validation={validation}/>);
  
    // Act
    const titleElement = screen.queryByText(/validatedField/i);
  
    // Assert
    expect(titleElement).toBeInTheDocument();
  });



  test("Works when field validation doesn't exist", () => {
    // Arrange
    const setup = {"label":"unvalidatedField"};
    const state = ["",()=>{}];
  
    render( <InputField setup={setup} state={state}/>);
  
    // Act
    const titleElement = screen.queryByText(/unvalidatedField/i);
  
    // Assert
    expect(titleElement).toBeInTheDocument();
  });



  test("Throws error when setup prop is missing", () => {
    // Arrange
    const state = ["",()=>{}];
    const validation = () => {};
  
    // Act
    const InputElement = ()=>render( <InputField state={state} validation={validation}/>);
  
    // Assert
    expect(InputElement).toThrow("The setup prop is missing");
  });



  test("Throws error when state prop is missing", () => {
    // Arrange
    const setup = {"label":"inputField"};
    const validation = () => {};
  
    // Act
    const InputElement = ()=>render( <InputField setup={setup} validation={validation}/>);
  
    // Assert
    expect(InputElement).toThrow("The state prop is missing");
  });

  