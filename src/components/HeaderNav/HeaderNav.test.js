import HeaderNav from './index'
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import {
    BellFilled,
    MessageFilled,
    UserOutlined,
    LogoutOutlined
  } from '@ant-design/icons';
import { userEvent } from '@testing-library/user-event';
import user from "@testing-library/user-event";
import Profile from '../../pages/Profile';
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import LayoutBox from '../../pages/LayoutBox';
import SignIn from '../../pages/SignIn';

describe('HeaderNav', () => {
    test('render Header', () => {
        renderWithRouter(<HeaderNav />);
        const signInElement = screen.getByTestId('main-header-id');
        expect(signInElement).toBeInTheDocument();
    });

    test('render Badge', () => {
        renderWithRouter(<HeaderNav />);
        const signInElement = screen.getByTestId('header-badge-id');
        expect(signInElement).toBeInTheDocument();
    });

    test('should display profile', () => {
        renderWithRouter(<HeaderNav />);
        const profile = screen.getByAltText('profile');
        expect(profile).toBeInTheDocument();
    });

    test('should open the notification drawer when the bell icon is clicked', () => {
        renderWithRouter(<HeaderNav />);
        const bellIconElement = screen.getByRole('img', { name: /bell/i });
        fireEvent.click(bellIconElement);
        const drawerTitleElement = screen.getByText('Notification');
        expect(drawerTitleElement).toBeInTheDocument();
    });

    test('onClick notification Badge', () => {
        renderWithRouter(<HeaderNav />);
        const signInElement = screen.getByTestId('header-badge-id');
        expect(signInElement).toBeInTheDocument();

        fireEvent.click(signInElement);
        const drawerTitleElement = screen.getByText('Notification');
        expect(drawerTitleElement).toBeInTheDocument();
    });

    test('onClick clear notification', () => {
        renderWithRouter(<HeaderNav />);
        const signInElement = screen.getByTestId('header-badge-id');
        expect(signInElement).toBeInTheDocument();

        fireEvent.click(signInElement);
        const drawerTitleElement = screen.getByText('Notification');
        expect(drawerTitleElement).toBeInTheDocument();

        const clearNotification = screen.getByTestId('clear-notification');
        expect(clearNotification).toBeInTheDocument();

        fireEvent.click(clearNotification);

        screen.debug()
        

        const emptyNotification = screen.getByTestId('notification-empty');
        expect(emptyNotification).toBeInTheDocument();

    });

    test('should navigate to the profile page when the profile option is clicked', async() => {
        user.setup();

        renderWithRouter(<HeaderNav />);

        const headerText=screen.getByText(/Alvero Moreno/i)
        expect(headerText).toBeInTheDocument();

        fireEvent.mouseOver(headerText);
        await waitFor(()=>{
            screen.getByTestId('profile-test-id')
        })
        await waitFor(()=>{
            screen.queryByText(/Profile/i)
        })
        
        // await user.hover(headerText)
        const text=screen.queryByText(/Profile/i)
        const profileText = screen.getByTestId('profile-test-id')
        expect(profileText).toBeInTheDocument()
        expect(text).toBeInTheDocument()
        // expect(text).toBeInTheDocument()
    });

    test('render to profile page', async () => {
        user.setup()

        const routes = [
            {
                path: "/",
                element: <HeaderNav />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/"],
        });

        render(<RouterProvider router={router} />);

        const headerText=screen.getByTestId('profileDropdown');
        expect(headerText).toBeInTheDocument();

        fireEvent.mouseOver(headerText);
        await waitFor(()=>{
            screen.getByTestId('profile-test-id')
        })
        await waitFor(()=>{
            screen.queryByText(/Profile/i)
        })
        
        // await user.hover(headerText)
        const text=screen.queryByText(/Profile/i)
        const profileText = screen.getByTestId('profile-test-id')
        expect(profileText).toBeInTheDocument()
        expect(text).toBeInTheDocument()

        await user.click(profileText);
        await waitFor(()=>{
            screen.getByTestId('profile-section-card');
        }) 
        expect(screen.getByTestId('profile-section-card')).toBeInTheDocument();
    })
    

    test('clicks on logout and render to login page', async () => {
        user.setup()

        const routes = [
            {
                path: "/",
                element: <HeaderNav />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
        ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/"],
        });

        render(<RouterProvider router={router} />);

        const headerText=screen.getByTestId('profileDropdown');
        expect(headerText).toBeInTheDocument();

        fireEvent.mouseOver(headerText);
        await waitFor(()=>{
            screen.getByTestId('logout-test-id')
        })
        await waitFor(()=>{
            screen.queryByText(/Logout/i)
        })
        
        // await user.hover(headerText)
        const text=screen.queryByText(/Logout/i)
        const logoutText = screen.getByTestId('logout-test-id')
        expect(logoutText).toBeInTheDocument()
        expect(text).toBeInTheDocument()

        await user.click(logoutText);
        await waitFor(()=>{
            screen.getByTestId('main-signin-id');
        }) 
        expect(screen.getByTestId('main-signin-id')).toBeInTheDocument();
    })


});