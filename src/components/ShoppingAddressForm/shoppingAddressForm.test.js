import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingAddressForm from "./index";
import { renderWithRouter } from "../../setupTests";
describe("shoppingAddressForm", () => {
  it("render heading", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const heading = screen.getByTestId("shipping-address-form-heading");
    expect(heading).toBeInTheDocument(); 
  });
  it("render contact-name", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const contactname = screen.getByTestId("contact-name");
    expect(contactname).toBeInTheDocument();
  });
  it("render company-name", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const companyname= screen.getByTestId("company-name");
    expect(companyname).toBeInTheDocument(); 
  });
  it("render phone-number", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const phonenumber = screen.getByTestId("phone-number");
    expect(phonenumber).toBeInTheDocument();
  });
  it("render country", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const country = screen.getByTestId("country");
    expect(country).toBeInTheDocument();
  });
  it("render streetAdress", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const streetAdress = screen.getByTestId("street-adress");
    expect(streetAdress).toBeInTheDocument();
  });
  it("render apartment", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const apartment = screen.getByTestId("apartment");
    expect(apartment).toBeInTheDocument();
  });
  it("render apartment", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const city = screen.getByTestId("city");
    expect(city).toBeInTheDocument();
  });
  it("render postalcode", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const postalcode = screen.getByTestId("postalcode");
    expect(postalcode).toBeInTheDocument();
  });
  it("render postalcode", () => {
    renderWithRouter(<ShoppingAddressForm />);
    const postalcode = screen.getByTestId("postalcode");
    expect(postalcode).toBeInTheDocument();
  });
  it("should call onFinish and next functions on clicking the Save & Next button", () => {
    const mockNextFn = jest.fn();
    const mockPrevFn = jest.fn();
    renderWithRouter(<ShoppingAddressForm next={mockNextFn} prev={mockPrevFn}/>);
    const nextBtn = screen.getByTestId("shopping-AddressForm-next-btn");
    expect(nextBtn).toBeInTheDocument()
    // const prevBtn = screen.getByTestId("shopping-AddressForm-prev-btn");
    // expect(prevBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
  });
  it("render previous btn", () => {
    const mockNextFn = jest.fn();
    const mockPrevFn = jest.fn();
    renderWithRouter(<ShoppingAddressForm next={mockNextFn} prev={mockPrevFn}/>);
    
    const prevBtn = screen.getByTestId("shopping-AddressForm-prev-btn");
    expect(prevBtn).toBeInTheDocument();
    fireEvent.click(prevBtn);
    expect(mockPrevFn).toHaveBeenCalled();

    
  });
  it("should show an error message if password is less than 6 characters", async () => {
    renderWithRouter(<ShoppingAddressForm />);
    const phoneInput = screen.getByLabelText("Phone Number :");
    const submitButton = screen.getByTestId("shopping-AddressForm-next-btn");

    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.click(submitButton);
  
    expect (await screen.queryByText("Phone number required!")) 
  });
});
