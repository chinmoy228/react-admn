import PaginationTable from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("Pagination Table", () => {
       test("render heading correctly", () => {
        renderWithRouter(<PaginationTable heading="test" />);
        const paginationTableHeading = screen.getByTestId("pagination-table-heading");
        expect(paginationTableHeading).toBeInTheDocument();

       })
})