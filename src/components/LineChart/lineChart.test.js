
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import LineChart from "./index";

describe(" Line chart ", () => {
    const initialProps = {
        values: [10],
        labels:['A'],
        tooltipLabel: 'XYZ',
        isShowLegend: false,
        showXaxis: false,
        showYaxis: true,
        isHorizontal: false,
        isGrid: false
    }
    const updatedProps = {
        ...initialProps,
        isShowLegend: true
    }
  test("renders the chart without  a legend based on the prop ", () => {
    renderWithRouter(
      <LineChart {...initialProps}/>
    );

    const chart = screen.getByTestId('line-chart')
    expect(chart).toBeInTheDocument();
    expect(chart).not.toHaveTextContent(`${initialProps.labels}`);
    expect(chart).not.toHaveAttribute('legend');
  });
  
});
