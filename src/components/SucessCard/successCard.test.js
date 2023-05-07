import { render, screen, fireEvent } from "@testing-library/react";
import SuccessCard from "./index";
import { renderWithRouter } from "../../setupTests";

describe("Success component ", () => {
  test("success ", () => {
    renderWithRouter(<SuccessCard />);
    const result = screen.getByTestId("result-section");
    expect(result).toBeInTheDocument();
  });
});
