import { render, screen, fireEvent } from "@testing-library/react";
import ReviewOrderTable from "./index";
import { renderWithRouter } from "../../setupTests";

describe("review order ", () => {
  it("should update total product count when Counter component value changes", () => {
    render(<ReviewOrderTable />);
    const table = screen.getByTestId("table-order");
    expect(table).toBeInTheDocument();
  });
  it("render subtotal", () => {
    render(<ReviewOrderTable />);
    const subTotal = screen.getByTestId("sub-total");
    expect(subTotal).toBeInTheDocument();
  });
  it("render subtotal", () => {
    render(<ReviewOrderTable />);
    const subTotal = screen.getByTestId("sub-total-amount");
    expect(subTotal).toBeInTheDocument();
  });
});
