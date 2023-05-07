import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Step from "./index";

describe("<Step />", () => {
  it("shows the 'Create Account' form by default", () => {
    render(<Step />);
    const createAccountForm = screen.getByText("Create Account");
    expect(createAccountForm).toBeInTheDocument();
  });
  it("shows the 'Shipping Address", () => {
    render(<Step />);
    const createAccountForm = screen.getByText("Shipping Address");
    expect(createAccountForm).toBeInTheDocument();
  });
  it("shows the 'Create Account' form by default", () => {
    render(<Step />);
    const crateFormNextBtn = screen.getByTestId("create-form-next-btn");
    fireEvent.click(crateFormNextBtn);
  });
  it("should update current state when next and prev buttons are clicked", async () => {
    const next = jest.fn();
    const prev = jest.fn();
    render(<Step />);
    const nextButton = screen.getByTestId("create-form-next-btn");

    fireEvent.click(nextButton);
    expect(screen.getByText("Shipping Address")).toBeInTheDocument();
    const createAccountStep = screen.getByText("Create Account");
    expect(createAccountStep).toHaveClass("ant-steps-item-title");
  });
});
