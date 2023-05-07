import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ForgetPassword from ".";
import SignIn from "../SignIn";
import user from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { renderWithRouter } from "../../setupTests";

describe("ForgetPassword", () => {
  test("Input field Email Should be there on the screen", () => {
    renderWithRouter(<ForgetPassword />, { route: "/forgotpassword" });
    const EmailInput = screen.getByTestId("email-input-element");
    expect(EmailInput).toBeInTheDocument();
    expect(EmailInput).toHaveAttribute("type", "email");
  });

  test("should handle submit with success with toast", async () => {
    renderWithRouter(<ForgetPassword />, { route: "/forgotpassword" });

    act(() => {
      fireEvent.change(screen.getByTestId("email-input-element"), {
        target: { value: "check3@gmail.com" },
      });
      fireEvent.click(screen.getByTestId("send-button-element"));
    });
    const welcomeMessage = await screen.findByText(/Mail Sent/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("On submit error", async () => {
    renderWithRouter(<ForgetPassword />, { route: "/forgotpassword" });

    act(() => {
      fireEvent.change(screen.getByTestId("email-input-element"), {
        target: { value: " " },
      });
      fireEvent.click(screen.getByTestId("send-button-element"));
    });
    const ErrorMessage = await screen.findByText(/Please enter your email!/i);
    expect(ErrorMessage).toBeInTheDocument();
  });

  test("Error in email validation", async () => {
    renderWithRouter(<ForgetPassword />, { route: "/forgotpassword" });

    act(() => {
      fireEvent.change(screen.getByTestId("email-input-element"), {
        target: { value: "invalid@gmail" },
      });
    });
    const ErrorMessage = await screen.findByText(/Please enter valid email!/i);
    expect(ErrorMessage).toBeInTheDocument();
  });

  test("check the signin link", async () => {
    user.setup();
    const routes = [
      {
        path: "/forgotpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialIndex: 0,
      initialEntries: ["/forgotpassword"],
    });

    render(<RouterProvider router={router} />);

    const leftSideBtn = screen.getByRole("button", {
      name: /sign in/i,
    });
    expect(leftSideBtn).toBeInTheDocument();

    await user.click(leftSideBtn);
    const signInElement = screen.getByTestId("main-signin-id");
    expect(signInElement).toBeInTheDocument();
  });
});
