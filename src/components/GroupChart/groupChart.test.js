
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import GroupChart from "./index";

describe("Group chart", () => {
  const values = [
    {
      label: "Value 1",
      data: [10, 20, 30],
    },
    {
      label: "Value 2",
      data: [15, 25, 35],
    },
  ];
  const labels = ["Label 1", "Label 2", "Label 3"];

  test("renders the chart ", () => {
    renderWithRouter(
      <GroupChart
        values={values}
        labels={labels}
        isShowLegend={true}
        showXaxis={true}
        showYaxis={true}
        isHorizontal={false}
        isGrid={true}
      />
    );

    const chart = screen.getByTestId("bar-cart-grp");
    expect(chart).toBeInTheDocument();

    
  });
});
