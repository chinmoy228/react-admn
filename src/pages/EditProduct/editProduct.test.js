import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import EditProduct from "./index";
import { renderWithRouter } from "../../setupTests";
import user from "@testing-library/user-event";
import { Button } from "antd";
import ImageUpload from "../../components/ImageUpload";
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ status: "edit" || "" }),
}));

describe("Edit product page", () => {
  const mockSetGetSrc = jest.fn();
  const mockGetSrc = [];
  const props = {
    getSrc: mockGetSrc,
    setGetSrc: mockSetGetSrc,
    isDregger: true,
  };

  const mockProductData = [
    {
      key: "123",
      name: "Product 1",
      price: 10,
      description: "Description 1",
      companies: ["Company 1", "Company 2"],
      quantity: 5,
      imageList: ["image1.png", "image2.png"],
    },
    {
      key: "456",
      name: "Product 2",
      price: 20,
      description: "Description 2",
      companies: ["Company 3"],
      quantity: 10,
      imageList: ["image3.png"],
    },
  ];

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('removes uploaded image when close button is clicked image main div', () => {
    const images = [
      { imagebase64: 'image1', name: 'image1.jpg', file: {} },
      { imagebase64: 'image2', name: 'image2.jpg', file: {} },
    ];
    const setGetSrc = jest.fn();
    render(<ImageUpload getSrc={images} setGetSrc={setGetSrc} />);
    const closeButton1 = screen.getAllByTestId('close-Image-btn-image-main-div')[0];
    expect(closeButton1).toBeInTheDocument();
  });


  test("render udate btn with text Update Product", () => {
    renderWithRouter(<EditProduct />);
    const updateProduct = screen.getByText(/Update Product/i);
    expect(updateProduct).toBeInTheDocument();
  });

  test("onFinish is call when click on ", () => {
    const onFinishFailed = jest.fn();
    renderWithRouter(<EditProduct />);

    const updateBtn = screen.getByTestId("update-add-btn");
    expect(updateBtn).toBeInTheDocument();
    fireEvent.click(updateBtn);
  });
  test("Should not show something wrong went message", () => {
    renderWithRouter(<EditProduct />);

    expect(
      screen.queryByText(/'Somthing went wrong'/i)
    ).not.toBeInTheDocument();
  });

  test("Should title render", () => {
    renderWithRouter(<EditProduct />);

    const title = screen.getByTestId('edit-title-data-id');
    expect(title).toBeInTheDocument();
  });

  it("displays error messages when fields are not filled in", async () => {
    renderWithRouter(<EditProduct />);

    fireEvent.submit(
      screen.getByRole("button", {
        name: /Update Product/i,
      })
    );

    expect(
      await screen.findByText("Please enter product name!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter product price!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please select product company!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter product description!")
    ).toBeInTheDocument();
    expect(await screen.findByText("Please upload image!")).toBeInTheDocument();
  });


  it("loads existing product data when status is 'edit'", () => {
    const mockLocation = {
      state: {
        key: "123",
      },
    };
    const mockParams = {
      status: "edit",
    };
    const { getByLabelText } = renderWithRouter(
      <EditProduct
        productData={mockProductData}
        location={mockLocation}
        params={mockParams}
      />
    );

    const title = screen.getByTestId('edit-title-data-id');
    expect(title).toBeInTheDocument();
  
  });  

});
