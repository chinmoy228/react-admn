import {
  act,
  fireEvent,
  logRoles,
  render,
  screen,
} from "@testing-library/react";
import { useSearchParams } from "react-router-dom";

import { renderWithRouter } from "../../setupTests";
import { productData } from "../../utils/dummy-data";
import ProductDetail from "./index";
import { useParams } from "react-router-dom";
import { MemoryRouter, Route } from "react-router-dom";

import { Button, Col, Row, Tag } from "antd";
import ReactImageGallery from "react-image-gallery";
import { formatter } from "../../utils/commonFunction";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ProductDetailModal from "../../components/ProductDetailModal";
import App from "../../App";

describe("Product Detail", () => {
 
  const product = {
    key: "1",
    imageList: [
      "https://m.media-amazon.com/images/I/91OzzQSg47L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71mSPheTBeL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51RjUeZFbTL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51mXjNXLQeL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41w0GNk3sCL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91JwDPb9jFL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81-NF9Z2MBL._SL1500_.jpg",
    ],
    name: `Sony 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF (Ceramic Black)`,
    price: "31990",
    description: `Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz .Connectivity: Wi-Fi (Built-in) | 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices | eARC | Bluetooth 5.0 | Optical | Ethernet
        Sound: 20 Watts Output | 2.0 Ch Speaker | AI Sound (Virtual Surround 5.1 up-mix) | Auto Volume Levelling | Bluetooth Surround Ready Smart TV Features: AI ThinQ & WebOS 22 with User Profiles | Game Optimizer & Dashboard | α5 Gen5 AI Processor 4K | Unlimited OTT App Support`,
    companies: ["samsung", "sony"],
  };

  test("should show loading message while fetching product", () => {
    renderWithRouter(<ProductDetail />);
    const loading = screen.getByText("loading");
    expect(loading).toBeInTheDocument();
  });

  test("product detail content", () => {
    render(
      <MemoryRouter initialEntries={["productDetails?key=1"]}>
        <ProductDetail />
      </MemoryRouter>
    );
    expect(screen.getByTestId('product-name')).toHaveTextContent(product.name);
    expect(screen.getByTestId('product-price')).toBeInTheDocument() 
    expect(screen.getByTestId('product-description')).toBeInTheDocument();
    product.companies.forEach((company) => {
      expect(screen.getByText(company.toUpperCase())).toBeInTheDocument();
    })
    
  });
  test("open delete modal is open when Dlt Product button is clicked",()=>{
    render(
      <MemoryRouter initialEntries={["productDetails?key=1"]}>
        <ProductDetail />
      </MemoryRouter>
    );
    const btn=screen.getByText(/Delete Product/i)
    fireEvent.click(btn)
    expect(screen.getByTestId('delete-modal')).toBeInTheDocument()
  })
});
