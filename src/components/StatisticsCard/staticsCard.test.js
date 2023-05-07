import {render,screen} from "@testing-library/react";
import StatisticsCard from "./index";
import { renderWithRouter } from '../../setupTests';
describe('staticsCard',()=>{
    test("render correctly",()=>{
        renderWithRouter(<StatisticsCard />)
        const iconBlock=screen.getByTestId('icon-block')
        expect(iconBlock).toBeInTheDocument()
        const titleBlock=screen.getByTestId('title-booking')
        expect(titleBlock).toBeInTheDocument()
        const staticDataNumber=screen.getByTestId('staticData-number')
        expect(staticDataNumber).toBeInTheDocument()
    })
})