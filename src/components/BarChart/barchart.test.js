import BarChart from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("Pagination Table", () => {
       test("render heading correctly", () => {
        renderWithRouter(<BarChart />);
        const barChart = screen.getByTestId("bar-chart");
        expect(barChart).toBeInTheDocument();

       })
})