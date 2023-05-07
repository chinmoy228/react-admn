import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import ScrollTable from "./index";



describe(" Scroll  table ", () => {
    test("renders heading   ", () => {
        renderWithRouter(<ScrollTable heading="test" />);
        const scrollTableHeading = screen.getByTestId('scroll-table-heading')
        expect(scrollTableHeading).toBeInTheDocument();

    })
    test("renders table   ", () => {
        renderWithRouter(<ScrollTable  />);
        const scrollTable = screen.getByTestId('scroll-table')
        expect(scrollTable).toBeInTheDocument();

    })
})