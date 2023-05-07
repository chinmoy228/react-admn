import NestedAccordion from "./index";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("NestedAccordion ", () => {
  test("render correctly", () => {
    renderWithRouter(<NestedAccordion />);
    const nestedPannel = screen.getByTestId("nested-pannel");
    expect(nestedPannel).toBeInTheDocument();
  });
});
