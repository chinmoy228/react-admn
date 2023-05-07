import { render, screen, fireEvent } from "@testing-library/react";
import ProductDetailModal from "./index";
import { renderWithRouter } from "../../setupTests";
import { Button } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

describe("product detail modal",()=>{
    const mockProduct = {
        key: '1',
        name: 'Product 1',
        price: 100,
        description: 'Product 1 description',
        companies: ['company1', 'company2'],
        imageList: ['image1', 'image2'],
      };
    test("render product name",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        const productName=screen.getByTestId('product-name')
        expect(productName).toBeInTheDocument();
    })

    test("render product price",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        const productName=screen.getByTestId('product-price')
        expect(productName).toBeInTheDocument()
    })

    test("render product description",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        const productName=screen.getByTestId('product-description')
        expect(productName).toBeInTheDocument()
    })
    test("render product companies",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        const productName=screen.getByTestId('product-companies') 
        expect(productName).toBeInTheDocument() 

        
    })

    test("render edit btn",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        expect(screen.getByText(/Edit Product/i)).toBeInTheDocument()

        
    })

    test("render delete btn",()=>{
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        expect(screen.getByText(/Delete Product/i)).toBeInTheDocument()

        
    })

    test("calls onClickEdit function when Edit Product button is clicked",()=>{
        const handleClick=jest.fn();
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        renderWithRouter( <Button type="primary" block size='large' icon={<EditOutlined />} onClick={()=>handleClick()} data-testid="edit-btn">Edit Product</Button>)
        const btn=screen.getByTestId("edit-btn")
        fireEvent.click(btn)
        expect(handleClick).toHaveBeenCalled() 
        

        
    })
     test("calls onClickdelete function when Dlt Product button is clicked",()=>{
        const handleClick=jest.fn();
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        renderWithRouter( <Button type="primary" block size='large' icon={<DeleteOutlined />} onClick={()=>handleClick()} data-testid="dlt-btn">Delete Product</Button>)
        const btn=screen.getByTestId("dlt-btn")
        fireEvent.click(btn)
        expect(handleClick).toHaveBeenCalled() 
        

        
    })

    test("open delete modal is open when Dlt Product button is clicked",()=>{
        
        renderWithRouter(<ProductDetailModal idKey={mockProduct.key}/>)
        const btn=screen.getByTestId("dlt-btn-product")
        fireEvent.click(btn) 
        expect(screen.getByTestId('delete-modal')).toBeInTheDocument()
        

        
    })
})