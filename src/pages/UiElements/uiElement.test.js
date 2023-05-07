import UiElement from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ element: "accordion" }),
}));

describe("UiElement page", () => {
  test("render  correctly", () => {
    renderWithRouter(<UiElement />);
  });
});
