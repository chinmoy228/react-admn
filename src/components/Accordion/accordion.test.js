import Accordion from "./index";
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";

describe("Accordion", () => {
    test("render  correctly", () => {
        renderWithRouter(<Accordion />);
        const accordionCard = screen.getByTestId("accordion-card");
        expect(accordionCard).toBeInTheDocument();
    })
    test("render first  pannel correctly", () => {
        renderWithRouter(<Accordion />);
        const accordionFirstPannel = screen.getByTestId("first-pannel");
        expect(accordionFirstPannel).toBeInTheDocument();
    })
    
    
})