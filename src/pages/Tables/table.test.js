import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Tables from "./index";

import { renderWithRouter } from "../../setupTests";
import NormalTable from "../../components/NormalTable";
import PaginationTable from "../../components/PaginationTable";
import ActionTagTable from "../../components/ActionTagTable";
import FilterSortTable from "../../components/FilterSortTable";
import SearchTable from "../../components/SearchTable";
import CombineTable from "../../components/CombineTable";
describe("Tables component", () => {
  
 
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
  ];
  
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];
  test("renders NormalTable without error", () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("normal-table")).toBeInTheDocument();
  });

  test('renders PaginationTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("pagination-table")).toBeInTheDocument();
  });

  test('renders ActionTagTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("action-tag-table")).toBeInTheDocument();
  });

  test('renders FilterSortTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("filter-sort-table")).toBeInTheDocument();
  });

  test('renders SearchTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("search-table1")).toBeInTheDocument();
  });

  test('renders ScrollTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("scroll-table1")).toBeInTheDocument();
  
  });

  test('renders CombineTable without error', () => {
    renderWithRouter(<Tables/>) 
    expect(screen.getByTestId("combine-table")).toBeInTheDocument();
  });

  test('renders Action table edit', () => {
    renderWithRouter(<Tables/>) 
    const editIcon = screen.getAllByTestId('action-EditOutlinedIcon-test')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });

  test('renders Action table delete', () => {
    renderWithRouter(<Tables/>) 
    const deleteIcon = screen.getAllByTestId('action-DeleteOutlinedIcon-test')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);

    const deletePopup = screen.getByTestId('delete-modal')
    expect(deletePopup).toBeInTheDocument();

  });

  test('renders Combine table edit', () => {
    renderWithRouter(<Tables/>) 
    const editIcon = screen.getAllByTestId('combine-table-edite-test-id')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });

  test('renders Combine table delete', () => {
    renderWithRouter(<Tables/>) 
    const deleteIcon = screen.getAllByTestId('combine-table-delete-test-id')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);

    const deletePopup = screen.getByTestId('delete-modal')
    expect(deletePopup).toBeInTheDocument();

  });

  test('renders search table functionality', async() => {
    const {container} = renderWithRouter(<Tables/>) 

    const menuIcon = container.querySelectorAll(".ant-table-filter-trigger")[0];
    expect(menuIcon).toBeInTheDocument();
    fireEvent.click(menuIcon);
    
  //   await waitFor(()=>{
  //     screen.getByTestId('filter-data-test-id')
  // })

  //   console.log('elements',menuIcon);
  //   const searchIcon =  screen.getByTestId('filter-data-test-id');
  //   expect(searchIcon).toBeInTheDocument();
  });


  test('renders NormalTable with correct data', () => {
    renderWithRouter(<NormalTable heading='Normal Table' dataSource={data} columns={columns} />)  
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });


  test('Table delete modal cancle button click event', () => {
    renderWithRouter(<Tables/>) 
    const deleteIcon = screen.getAllByTestId('combine-table-delete-test-id')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);

    const deletePopup = screen.getByTestId('delete-modal')
    expect(deletePopup).toBeInTheDocument();

    const deleteBtn = screen.getAllByText('Delete')[2]
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
  });
  
  test('Table Cancle modal cancle button click event', () => {
    renderWithRouter(<Tables/>) 
    const deleteIcon = screen.getAllByTestId('combine-table-delete-test-id')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);

    const deletePopup = screen.getByTestId('delete-modal')
    expect(deletePopup).toBeInTheDocument();

    const cancelBtn = screen.getByText('Cancel')
    expect(cancelBtn).toBeInTheDocument();
    fireEvent.click(cancelBtn);
  });

  test('Table Filter click event', () => {
  
    const {container} = renderWithRouter(<Tables/>) 
    const searchIcon = container.querySelectorAll(".anticon-search")[0];
    console.log('searchIcon',searchIcon.length);

    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
    const searchPopup = screen.getByTestId('filter-data-test-id');
    expect(searchPopup).toBeInTheDocument();

  });

  test('Table Search button click event', () => {
    const {container} = renderWithRouter(<Tables/>) 
    const searchIcon = container.querySelectorAll(".anticon-search")[0];

    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
    const searchButton = screen.getByTestId('search-button-data-test-id');
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
  });

  test('Table Reset button click event', () => {
    const {container} = renderWithRouter(<Tables/>) 
    const searchIcon = container.querySelectorAll(".anticon-search")[0];

    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
    const ResetButton = screen.getByTestId('reset-button-data-test-id');
    expect(ResetButton).toBeInTheDocument();
    fireEvent.click(ResetButton);
  });

  test('Table Close button click event', () => {
    const {container} = renderWithRouter(<Tables/>) 
    const searchIcon = container.querySelectorAll(".anticon-search")[0];

    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
    const closeButton = screen.getByTestId('close-button-data-test-id');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
  });

});
