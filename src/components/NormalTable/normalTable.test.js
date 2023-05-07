import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import NormalTable from "./index";


describe(" Normal table ", () => {
    test("renders heading   ", () => {
        renderWithRouter(<NormalTable heading="test" />);
        const normalTableHeading = screen.getByTestId('normal-table-heading')
        expect(normalTableHeading).toBeInTheDocument();

    })
    test("renders table   ", () => {
        renderWithRouter(<NormalTable  />);
        const normalTable = screen.getByTestId('table-comp')
        expect(normalTable).toBeInTheDocument();

    })
})