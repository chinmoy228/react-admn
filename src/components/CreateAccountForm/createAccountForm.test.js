import { render, screen, fireEvent } from "@testing-library/react";
import CreateAccountForm from "./index";
import { renderWithRouter } from "../../setupTests";
describe("CreateAccountForm", () => {
  it("render heading", () => {
    renderWithRouter(<CreateAccountForm />);
    const heading = screen.getByTestId("create-account-form-heading");
    expect(heading).toBeInTheDocument();
  });
  it("render username", () => {
    renderWithRouter(<CreateAccountForm />);
    const usename = screen.getByTestId("user-name");
    expect(usename).toBeInTheDocument();
  });
  it("render email", () => {
    renderWithRouter(<CreateAccountForm />);
    const email = screen.getByTestId("create-account-form-email");
    expect(email).toBeInTheDocument();
  });
  it("render password", () => {
    renderWithRouter(<CreateAccountForm />);
    const password = screen.getByTestId("create-account-form-password");
    expect(password).toBeInTheDocument();
  });
  it("render next btn", () => {
    renderWithRouter(<CreateAccountForm />);
    const nextBtn = screen.getByTestId("create-form-next-btn");
    expect(nextBtn).toBeInTheDocument();
  });
  it("should call onFinish and next functions on clicking the Save & Next button", () => {
    const mockNextFn = jest.fn();
    renderWithRouter(<CreateAccountForm next={mockNextFn} />);
    const nextBtn = screen.getByTestId("create-form-next-btn");
    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
  });
  it("should show an error message if password is less than 6 characters", async () => {
    renderWithRouter(<CreateAccountForm />);
    const passwordInput = screen.getByLabelText("Password :");
    const submitButton = screen.getByTestId("create-form-next-btn");

    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.click(submitButton);

    expect(await screen.queryByText("Password must be maximum "));
  });
});
