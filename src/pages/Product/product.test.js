import { fireEvent, render, screen } from "@testing-library/react";
import { Button, Switch } from "antd";
import { renderWithRouter } from "../../setupTests";
import Product from "./index";
import { PlusOutlined } from "@ant-design/icons";
import { navigate } from "react-router-dom";
import ActionTagTable from "../../components/ActionTagTable";
import { userEvent } from '@testing-library/user-event';

describe("Product page ", () => {
  
  const productData = [
    {
      key: 1,
      name: "Product 1",
      imageList: [],
      price: 100,
      description: "This is product 1",
      companies: ["apple", "samsung"],
    },
    {
      key: 2,
      name: "Product 2",
      imageList: [],
      price: 200,
      description: "This is product 2",
      companies: ["sony", "oneplus"],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
    },
    {
      title: "ImageList",
      dataIndex: "imageList",
      key: "imageList",
      className: "d-none",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "10%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Companies",
      key: "companies",
      dataIndex: "companies",
      width: "10%",
    },
    {
      title: "Detail",
      key: "detail",
    },
    {
      title: "Edit",
      key: "edit",
    },
    {
      title: "Delete",
      key: "delete",
    },
  ];

  test("product title header", () => {
    renderWithRouter(<Product />);
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
  });
  test("render add btn ", () => {
    renderWithRouter(<Product />);
    expect(screen.getByTestId("add-btnOn-Add-Product")).toBeInTheDocument();
  });
  test("render action tag table", () => {
    renderWithRouter(<Product />);
    expect(screen.getByTestId("action-tag-table")).toBeInTheDocument();
  });
  test("render switch btn", () => {
    renderWithRouter(<Product />);
    expect(screen.getByTestId("switch")).toBeInTheDocument();
  });
  test("render switch element", () => {
    renderWithRouter(<Product />);
    expect(screen.getByTestId("switch-element")).toBeInTheDocument();
  });

  test("onClick event handler is called when button is clicked", () => {
    const onClickAdd = jest.fn();
    renderWithRouter(
      <Button
        icon={<PlusOutlined />}
        type="primary"
        size="large"
        onClick={onClickAdd}
        data-testid="add-btnOn-Add-Product"
      >
        Add
      </Button>
    );

    fireEvent.click(screen.getByTestId("add-btnOn-Add-Product"));

    expect(onClickAdd).toHaveBeenCalled();
  });

  test("navigates to the correct route when button is clicked", () => {
    render(
      <Button
        icon={<PlusOutlined />}
        type="primary"
        size="large"
        onClick={() => navigate("/product/add")}
        data-testid="add-btnOn-Add-Product"
      >
        Add
      </Button>
    );
    const navigate = jest.fn();
    fireEvent.click(screen.getByTestId("add-btnOn-Add-Product"));

    expect(navigate).toHaveBeenCalledWith("/product/add");
  });

  test("onChange of Switch run  onChangeDetailsInModal function", () => {
    const onChangeDetailsInModal = jest.fn();
    render(
      <Switch onChange={onChangeDetailsInModal} data-testid="switch-element" />
    );

    fireEvent.click(screen.getByTestId("switch-element"));
    expect(onChangeDetailsInModal).toHaveBeenCalled()
  });
  test("render table with correct data", () => {
    render(<ActionTagTable dataSource={productData} columns={columns} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    
  });
  it('should render the table with product data', () => {
    renderWithRouter(<Product />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('ImageList')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Companies')).toBeInTheDocument();
    expect(screen.getByText('Detail')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })
 
  test('renders Action table edit in product', () => {
    renderWithRouter(<Product/>) 
    const editIcon = screen.getAllByTestId('EditOutlinedIcon-test')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });
  
  test('renders Action table delete', () => {
    renderWithRouter(<Product/>) 
    const deleteIcon = screen.getAllByTestId('DeleteOutlinedIcon-test')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);
  });

  test('renders Action table view', () => {
    renderWithRouter(<Product/>) 
    const viewIcon = screen.getAllByTestId('ViewOutlinedIcon-test')[0];
    expect(viewIcon).toBeInTheDocument();
    fireEvent.click(viewIcon);
  });
  

  test('Render add product page and click on add product', () => {
    renderWithRouter(<Product/>)
    const addProductIcon = screen.getByTestId('add-btnOn-Add-Product');
    expect(addProductIcon).toBeInTheDocument();
    fireEvent.click(addProductIcon);

    
  });

  
});

