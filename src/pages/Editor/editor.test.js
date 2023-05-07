import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Editor from "./index";
import { renderWithRouter } from "../../setupTests";
import { userEvent } from "@testing-library/user-event";

describe("Editor Page ", () => {
  test("render JoditEditor", () => {
    renderWithRouter(<Editor />);
    const JoditEditor = screen.getByTestId("jodit-editor");
    expect(JoditEditor).toBeInTheDocument();
  });

  test("render Add btn", () => {
    renderWithRouter(<Editor />);
    const addBtn = screen.getByRole("button", {
      name: /add/i,
    });
    expect(addBtn).toBeInTheDocument();
  });

  test("render log text", () => {
    renderWithRouter(<Editor />);
    const logText = screen.getByTestId("log-text");
    expect(logText).toBeInTheDocument();
  });

  test("render log correctly", () => {
    renderWithRouter(<Editor />);
    const logText = screen.getByTestId("log-text");
    expect(logText).toBeInTheDocument();
  });
  test("logs 'hello' message when Add button is clicked", () => {
     render(<Editor />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    const log = screen.getByTestId("logs-0");
    expect(log).toHaveTextContent("hello")
  });
  
})
