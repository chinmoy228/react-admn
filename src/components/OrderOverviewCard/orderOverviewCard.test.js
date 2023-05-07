import {render,screen} from "@testing-library/react";
import OrderOverviewCard from "./index";
import { renderWithRouter } from '../../setupTests';
describe('OrderOverviewCard',()=>{
    test('render correctly',()=>{
        renderWithRouter(<OrderOverviewCard/>);
        const orderOverViewTitle=screen.getByTestId('orders-overview-title')
        expect(orderOverViewTitle).toBeInTheDocument()
        const ArrowUpOutlinedIcon=screen.getByTestId('ArrowUpOutlined-icon')
        expect(ArrowUpOutlinedIcon).toBeInTheDocument()
        const topText=screen.getByTestId('top-text')
        expect(topText).toBeInTheDocument()
        const steps=screen.getByTestId('steps')
        expect(steps).toBeInTheDocument()
    })
})