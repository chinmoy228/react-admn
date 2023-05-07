import {render,screen} from "@testing-library/react";
import TransactionCards from "./index";

describe('transactionCard',()=>{
    test('transaction Card 1 ',()=>{
        render(<TransactionCards/>);
        const transactionText =screen.getByTestId('transaction-word');
        expect(transactionText).toBeInTheDocument()
        const RiseOutlinedIcon=screen.getByTestId('riseoutlined-icon')
        expect(RiseOutlinedIcon).toBeInTheDocument()
        const transactionAmount =screen.getByTestId('trans-amount');
        expect(transactionAmount).toBeInTheDocument()
        const downOutLinedIcon=screen.getByTestId('downOutLined-icon')
        expect(downOutLinedIcon).toBeInTheDocument()
        const percentText=screen.getByTestId('percent')
        expect(percentText).toBeInTheDocument()
    })
    test('transaction Card 2',()=>{
        render(<TransactionCards/>);
        const transactionText2 =screen.getByTestId('transaction-word2');
        expect(transactionText2).toBeInTheDocument()
        const StarOutlinedIcon=screen.getByTestId('StarOutlined-icon')
        expect(StarOutlinedIcon).toBeInTheDocument()
        const transactionAmount2 =screen.getByTestId('trans-amount2');
        expect(transactionAmount2).toBeInTheDocument()
        const UpOutlinedIcon=screen.getByTestId('UpOutlined-icon')
        expect(UpOutlinedIcon).toBeInTheDocument()
        const percentText2=screen.getByTestId('percent2')
        expect(percentText2).toBeInTheDocument()
    })
})