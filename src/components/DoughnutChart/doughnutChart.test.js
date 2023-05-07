import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DoughnutChart from "./index";
import { renderWithRouter } from "../../setupTests";
describe("Doughnut Chart", () => {
  test("renders without errors", () => {
    const values = [10, 20, 30];
    const labels = ["Label 1", "Label 2", "Label 3"];
    renderWithRouter(
      <DoughnutChart values={values} labels={labels} isShowLegend={true} />
    )
    const doughnutChartElement = screen.getByTestId("doughnut");
    expect(doughnutChartElement).toBeInTheDocument()
  })
  
});
