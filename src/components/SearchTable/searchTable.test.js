import { render, screen } from "@testing-library/react";
import SearchTable from "./index";
import { renderWithRouter } from "../../setupTests";




describe(" search table ", () => {
    test("renders heading   ", () => {
        renderWithRouter(<SearchTable heading="test" />);
        const searchTableHeading = screen.getByTestId('search-table-heading')
        expect(searchTableHeading).toBeInTheDocument();

    })
    test("renders table   ", () => {
        renderWithRouter(<SearchTable />);
        const searchTable = screen.getByTestId('search-table')
        expect(searchTable).toBeInTheDocument();

    })
})