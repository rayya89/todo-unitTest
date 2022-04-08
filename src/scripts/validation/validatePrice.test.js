// Project files
import validatePrice from "./validatePrice";

test("Pass when the price is valid as a possitive number", () => {
    // Arrange
    const testCorrectPrice = "555";
    const resultData = 555;
    const resultError = "";
  
    // Act
    const validation = validatePrice(testCorrectPrice);
  
    // Assert
    expect(validation.data).toBe(resultData);
    expect(validation.error).toBe(resultError);
  });


test("Return with error message when price field is empty", () => {
  // Arrange
  const testEmptyText = "";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act
  const validation = validatePrice(testEmptyText);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Return with error message when price is 0 indicating a free product", () => {
  // Arrange
  const testPriceZero = "0";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act
  const validation = validatePrice(testPriceZero);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Return with error message when price is negative indicating a non valid price", () => {
  // Arrange
  const testNegativePrice = "-1";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act
  const validation = validatePrice(testNegativePrice);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});



