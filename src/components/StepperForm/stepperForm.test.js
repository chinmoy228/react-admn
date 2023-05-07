import { render, screen, fireEvent } from "@testing-library/react";
import StepperForm from "./index";
import { renderWithRouter } from "../../setupTests";

describe("StepperForm ", () => {
  test("success ", () => {
    renderWithRouter(<StepperForm />);
    const stepperForm = screen.getByTestId("stepper-form");
    expect(stepperForm).toBeInTheDocument();
  });
});
