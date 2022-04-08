// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import ShoppingScreen from "./ShoppingScreen";
import { TasksProvider } from "../state/TasksContext";

// test("Opens regularly when everything is setted fine", () => {
//     //Arrange
//     const openModal= ()=>{};

//     // Act
//     const ScreenComponent = ()=> render(<TasksProvider><ShoppingScreen openModal={openModal}/></TasksProvider>);
//     const titleElement = screen.queryByText(/Shopping List/i);
    
//     // Assert
//     expect(titleElement).toBeInTheDocument();
    
//   });

test("Throws error when openModal prop is missing", () => {
  
    // Act
    const Screen = ()=>render(<TasksProvider><ShoppingScreen/></TasksProvider>);
  
    // Assert
    expect(Screen).toThrow("The openModal prop is missing");
  });
  
  test("Doesn't render and throws error win not wrapping the parent component with the context provider", () => {
    //Arrange
    const openModal= ()=>{};

    // Act
    const ScreenComponent = ()=> render( <ShoppingScreen openModal={openModal}/> );
    
    // Assert
    expect(ScreenComponent).toThrow("You need to wrap the parent component with <TasksProvider/>");
    
  });