// Project files
import validateName from "./validateName";

test("Pass when the name is valid", () => {
  // Arrange
  const testValidName = "Chair";
  const resultData = "Chair";
  const resultError = "";

  // Act
  const validation = validateName(testValidName);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Return with error message when name is empty", () => {
  // Arrange
  const testOneEmptySpace = "";
  const resultData = "";
  const resultError = "You must enter the product name";

  // Act
  const validation = validateName(testOneEmptySpace);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Return with error message when passing whitespaces", () => {
  // Arrange
  const testWhitespaces = "   ";
  const resultData = "";
  const resultError = "You must enter the product name";

  // Act
  const validation = validateName(testWhitespaces);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Pass when the name is surrounded with whitespace", () => {
  // Arrange
  const testValidNameWithWhitespaces = "   Chair   ";
  const resultData = "Chair";
  const resultError = "";

  // Act
  const validation = validateName(testValidNameWithWhitespaces);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Pass when the name has whitespaces between or around words", () => {
  // Arrange
  const testValidNameWithWhitespaces = " White  Chair   ";
  const resultData = "White Chair";
  const resultError = "";

  // Act
  const validation = validateName(testValidNameWithWhitespaces);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});
