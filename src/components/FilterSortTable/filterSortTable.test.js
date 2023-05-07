import FilterSortTable from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("Filter Sort Table", () => {
       test("render heading correctly", () => {
        renderWithRouter(<FilterSortTable heading="test" />);
        const combineTableHeading = screen.getByTestId("filter-sort-table-heading");
        expect(combineTableHeading).toBeInTheDocument();

       })
      
})