import { render, screen } from "@testing-library/react";
import ActionTagTable from "./index";
import { renderWithRouter } from "../../setupTests";

describe('actionTagTable',()=>{
    test('render Correctly',()=>{
        renderWithRouter(<ActionTagTable heading='Table With Tag & Action'/>);
        const headingText=screen.getByTestId('heading-block')
        expect(headingText).toBeInTheDocument()
        const tableElement=screen.getByTestId('table-with-tag-action')
        expect(tableElement).toBeInTheDocument()
    })
})