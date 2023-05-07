import { render, screen, fireEvent } from "@testing-library/react";
import ReviewOrder from "./index";
import { renderWithRouter } from "../../setupTests";

describe("review order ", () => {
  const mockPrev = jest.fn();
  const mockSetConfirmClick = jest.fn();
  const mockNext = jest.fn();
  it("render heading", () => {
    renderWithRouter(<ReviewOrder />);
    const heading = screen.getByTestId("review-order-heading");
    expect(heading).toBeInTheDocument();
  });
  it("render previousBtn", () => {
    renderWithRouter(<ReviewOrder />);
    const previousBtn = screen.getByTestId("previous-btn");
    expect(previousBtn).toBeInTheDocument();
  });
  it("render doneBtn", () => {
    renderWithRouter(<ReviewOrder />);
    const doneBtn = screen.getByTestId("done-btn");
    expect(doneBtn).toBeInTheDocument();
  });
  it("calls the setConfirmClick but not the next function when the Done button is clicked and user cancels", () => {
    renderWithRouter(
      <ReviewOrder
        prev={mockPrev}
        setConfirmClick={mockSetConfirmClick}
        next={mockNext}
      />
    );
    window.confirm = jest.fn(() => false);
    fireEvent.click(screen.getByText("Done"));
    expect(mockSetConfirmClick).toHaveBeenCalledWith(false);
    expect(mockNext).not.toHaveBeenCalled();
  });
  it("render doneBtn", () => {
    renderWithRouter(<ReviewOrder />);
    const doneBtn = screen.getByTestId("done-btn");
    expect(doneBtn).toBeInTheDocument();
  });
  it("calls the setConfirmClick and next functions when the Done button is clicked and user confirms", () => {
    renderWithRouter(
      <ReviewOrder
        prev={mockPrev}
        setConfirmClick={mockSetConfirmClick}
        next={mockNext}
      />
    );
    window.confirm = jest.fn(() => true);
    fireEvent.click(screen.getByText("Done"));
    expect(mockSetConfirmClick).toHaveBeenCalledWith(true);
    expect(mockNext).toHaveBeenCalled();
  });
});
