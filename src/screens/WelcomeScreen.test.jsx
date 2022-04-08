// NPM packages
import { render } from "@testing-library/react";

// Project files
import WelcomeScreen from "./WelcomeScreen";


test("Throws error when openModal prop is missing", () => {
  
    // Act
    const Screen = ()=>render(<WelcomeScreen/>);
  
    // Assert
    expect(Screen).toThrow("The openModal prop is missing");
  });
  