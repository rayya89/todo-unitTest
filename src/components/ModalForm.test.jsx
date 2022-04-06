// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import ModalForm from "./ModalForm";

test("Opens when you pass true on showModal", () => {
  // Arrange
  const listState = [[], () => {}];
  const goodModalState = [true, () => {}];

  render(<ModalForm listState={listState} modalState={goodModalState} />);

  // Act
  const titleElement = screen.queryByText(/Create new item/i);

  // Assert
  expect(titleElement).toBeInTheDocument();
});

test("Don't open when you pass false on showModal", () => {
  // Arrange
  const listState = [[], () => {}];
  const badModalState = [false, () => {}];

  render(<ModalForm listState={listState} modalState={badModalState} />);

  // Act
  const titleElement = screen.queryByText(/Create new item/i);

  // Assert
  expect(titleElement).not.toBeInTheDocument();
});
