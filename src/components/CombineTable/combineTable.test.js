import CombineTable from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("Combine Table", () => {
       test("render heading correctly", () => {
        renderWithRouter(<CombineTable heading="test" />);
        const combineTableHeading = screen.getByTestId("combine-table-heading");
        expect(combineTableHeading).toBeInTheDocument();

       })
      
})