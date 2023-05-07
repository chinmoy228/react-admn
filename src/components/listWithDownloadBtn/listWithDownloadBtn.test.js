import { render, screen, fireEvent,waitFor } from "@testing-library/react";
import ListWithDownloadBtn from "./index";
import { renderWithRouter } from "../../setupTests";
import user from "@testing-library/user-event";

describe("listWithDownloadBtn", () => {
    test('render correctly invoice text',()=>{
       renderWithRouter(<ListWithDownloadBtn/>);
       const invoiceText = screen.getByTestId("invoice-text");
       expect(invoiceText).toBeInTheDocument();
       
    });
    test('render correctly view-btn',()=>{
      renderWithRouter(<ListWithDownloadBtn/>);
      const viewAllBtn = screen.getByTestId("view-btn");
      expect(viewAllBtn).toBeInTheDocument();
   });
    test.each([1, 2, 3, 4, 5,6])(
        "renders card with proper data",
        (index) => {
          render(<ListWithDownloadBtn />);
          expect(screen.getByTestId(`date-${index}`)).toHaveTextContent(
            "March, 01, 2020"
          );
          expect(screen.getByTestId(`id-${index}`)).toHaveTextContent(
            "#MS-415646"
          );
          expect(screen.getByTestId(`price-${index}`)).toHaveTextContent(
            "$180"
          );
          expect(screen.getByTestId(`pdf-btn-${index}`)).toHaveTextContent(
            "PDF"
          );
        }
      );
      
      test.each([1, 2, 3,4,5,6])("in pdf btn pdf text is there or not",  (index) => {
        
        renderWithRouter(<ListWithDownloadBtn />);
    
        const pdfTxt = screen.getByTestId(`pdf-txt-${index}`)
        expect(pdfTxt).toBeInTheDocument();
       
      });
      test.each([1, 2, 3,4,5,6])("in pdf btn pdf outline is there or not",  (index) => {
        
        renderWithRouter(<ListWithDownloadBtn />);
    
        const pdfOutline = screen.getByTestId(`pdf-outline-${index}`)
        expect(pdfOutline).toBeInTheDocument()
       
      });

      test.each([1, 2, 3,4,5,6])("in pdf btn pdf outline is there or not",  (index) => {
        
        global.URL.createObjectURL = jest.fn();
        global.URL.revokeObjectURL = jest.fn();
        global.fetch = jest.fn().mockResolvedValueOnce({
          blob: jest.fn().mockResolvedValueOnce(new Blob(["dummy"], { type: "application/pdf" })),
        });

        renderWithRouter(<ListWithDownloadBtn />);
    
        const pdfOutline = screen.getByTestId(`pdf-btn-${index}`)
        expect(pdfOutline).toBeInTheDocument()
        fireEvent.click(pdfOutline);


      });
   
})