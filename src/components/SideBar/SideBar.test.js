import SideBar from './index'
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import user from '@testing-library/user-event';

describe('SideBar', () => {
    test('render SideBar', () => {
        renderWithRouter(<SideBar />);
        const signInElement = screen.getByTestId('main-sideBar-id');
        expect(signInElement).toBeInTheDocument();
    });
    test('should render the logo', () => {
        renderWithRouter(<SideBar />);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    test('render menu', () => {
        renderWithRouter(<SideBar />);
        const menuDiv = screen.getByTestId('main-sideBarMenu-id');
        expect(menuDiv).toBeInTheDocument();
    });

    test('should render the menu', () => {
        renderWithRouter(<SideBar />);
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBe(8);
    });


    test('should render the menu items length', () => {
        renderWithRouter(<SideBar />);
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBe(8);
    });

    test('should render the menu items', () => {
        renderWithRouter(<SideBar />);
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems[0]).toHaveTextContent('Dashboard');
        expect(menuItems[1]).toHaveTextContent('Charts');
        expect(menuItems[2]).toHaveTextContent('Tables');
        expect(menuItems[3]).toHaveTextContent('Form');
        expect(menuItems[4]).toHaveTextContent('Product');
        expect(menuItems[5]).toHaveTextContent('Editor');
    });

    test('collapse menu', () => {
        renderWithRouter(<SideBar />);
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems[0]).toHaveTextContent('Dashboard');
        expect(menuItems[1]).toHaveTextContent('Charts');
        expect(menuItems[2]).toHaveTextContent('Tables');
        expect(menuItems[3]).toHaveTextContent('Form');
        expect(menuItems[4]).toHaveTextContent('Product');
        expect(menuItems[5]).toHaveTextContent('Editor');

        const collapseBtn = screen.getByTestId('main-collapse-div-id');
        expect(collapseBtn).toBeInTheDocument();
        user.click(collapseBtn);
        
        expect(screen.queryByText('Dashboard')).not.toBe();
        expect(screen.queryByText('Charts')).not.toBe();
        expect(screen.queryByText('Tables')).not.toBe();
        expect(screen.queryByText('Form')).not.toBe();
        expect(screen.queryByText('Product')).not.toBe();
        expect(screen.queryByText('Editor')).not.toBe();

    });

    test('collapse logo', () => {
        renderWithRouter(<SideBar />);
        const logoRegular = screen.getByTestId('image-logo-id');
        
        expect(logoRegular.src).toMatch(/dummy-logo.png/);

        const collapseBtn = screen.getByTestId('main-collapse-div-id');
        expect(collapseBtn).toBeInTheDocument();
        user.click(collapseBtn);

    });

})