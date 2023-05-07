import SignUp from './index'
import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import user from '@testing-library/user-event';

import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";
import SignIn from '../SignIn';
import { act } from 'react-dom/test-utils';

describe('SignUp', () => {
    test('render SignUp', ()=>{
        renderWithRouter(<SignUp/>);
        const signUpElement = screen.getByTestId('main-signup-id');
        expect(signUpElement).toBeInTheDocument();
    })

    test('render left side header',()=>{
        renderWithRouter(<SignUp/>);
        const leftSideHeader = screen.getByTestId('signup-left-head');
        expect(leftSideHeader).toBeInTheDocument();
    })

    test('render left side description',()=>{
        renderWithRouter(<SignUp/>);
        const leftSideDes = screen.getByTestId('signup-left-des');
        expect(leftSideDes).toBeInTheDocument();
    })

    test('render left signIn button',async()=>{
        user.setup()    
        // renderWithRouter(<App/>);

        const routes = [
            {
              path: "/signup",
              element: <SignUp />
            },
            {
                path: "/signin",
                element: <SignIn />
              },
          ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/signup"],
        });
        
        render(<RouterProvider router={router} />);
        const leftSideBtn = screen.getByRole('button',{
            name: /sign in/i
        });
        expect(leftSideBtn).toBeInTheDocument();

        await user.click(leftSideBtn);
        const signInElement = screen.getByTestId('main-signin-id');
        expect(signInElement).toBeInTheDocument();
    })
})




describe('SignUp Form', () => {
    test('render SignUp Form', ()=>{
        renderWithRouter(<SignUp/>);
        const signUpElement = screen.getByTestId('signup-form-id');
        expect(signUpElement).toBeInTheDocument();
    })

    test('render First Name', ()=>{
        const view = renderWithRouter(<SignUp/>);
        logRoles(view.container)
        const firstNameElement = screen.getByRole('textbox',{
            name: /first name/i
        });
        expect(firstNameElement).toBeInTheDocument();
    })

    test('render Last Name', ()=>{
        renderWithRouter(<SignUp/>);
        const lastNameElement = screen.getByRole('textbox',{
            name: /last name/i
        });
        expect(lastNameElement).toBeInTheDocument();
    })

    test('render Email', ()=>{
        renderWithRouter(<SignUp/>);
        const emailElement = screen.getByRole('textbox',{
            name: /email/i
        });
        expect(emailElement).toBeInTheDocument();
    })

    test('render Password', ()=>{
        renderWithRouter(<SignUp/>);
        const passwordElement = screen.getByTestId('signup-password-id');
        expect(passwordElement).toBeInTheDocument();
    })

    test('render SignUp Button', ()=>{
        renderWithRouter(<SignUp/>);
        const signupBtnElement = screen.getByRole('button',{
            name: /sign up/i
        });
        expect(signupBtnElement).toBeInTheDocument();
    })

    test("Alphabets validation check for first name", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        user.setup()
        const firstNameElement = screen.getByRole('textbox',{
            name: /first name/i
        });

        act(() => {
            fireEvent.change(firstNameElement, {
                target: { value: "32453" },
            }); 
        })

        const ErrorMessage = screen.findByText(/Only alphabets allowed/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });
    

    test("Empty validation check for first name", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        const firstNameElement = screen.getByRole('textbox',{
            name: /first name/i
        });

        act(() => {
            fireEvent.change(firstNameElement, {
                target: { value: "" },
            }); 
        })

        const signupBtn = screen.getByRole('button',{
            name: /sign up/i
        });
        expect(signupBtn).toBeInTheDocument();

        await user.click(signupBtn);

        const ErrorMessage = screen.findByText(/Please enter your first name!/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });


    test("Alphabets validation check for last name", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        const lastNameElement = screen.getByRole('textbox',{
            name: /last name/i
        });

        act(() => {
            fireEvent.change(lastNameElement, {
                target: { value: "32453" },
            }); 
        })

        const ErrorMessage = screen.findByText(/Only alphabets allowed/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });

    
    test("Empty validation check for last name", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        const lastNameElement = screen.getByRole('textbox',{
            name: /last name/i
        });

        act(() => {
            fireEvent.change(lastNameElement, {
                target: { value: "" },
            }); 
        })

        const signupBtn = screen.getByRole('button',{
            name: /sign up/i
        });
        expect(signupBtn).toBeInTheDocument();

        await user.click(signupBtn);

        const ErrorMessage = screen.findByText(/Please enter your last name!/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });


    test("Email validation", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        const emailElement = screen.getByRole('textbox',{
            name: /email/i
        });

        act(() => {
            fireEvent.change(emailElement, {
                target: { value: "pro_tattoosyopmail.com" },
            }); 
        })

        const ErrorMessage = screen.findByText(/Please enter valid email!/i);
        expect(await ErrorMessage).toBeInTheDocument();

        act(() => {
            fireEvent.change(emailElement, {
                target: { value: "pro_tattoos@yopmail" },
            }); 
        })

        const ErrorMessage1 = screen.findByText(/Please enter valid email!/i);
        expect(await ErrorMessage1).toBeInTheDocument();

    });

    test("Empty validation check for email", async () => {
        renderWithRouter(<SignUp />, { route: "/signup" });
        const emailElement = screen.getByRole('textbox',{
            name: /email/i
        });

        act(() => {
            fireEvent.change(emailElement, {
                target: { value: "" },
            }); 
        })

        const signupBtn = screen.getByRole('button',{
            name: /sign up/i
        });
        expect(signupBtn).toBeInTheDocument();

        await user.click(signupBtn);

        const ErrorMessage = screen.findByText(/Please enter your email!/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });
    

    test('Click On Sign Up Button',async()=>{
        user.setup()    

        const routes = [
            {
              path: "/signup",
              element: <SignUp />
            },
            {
                path: "/signin",
                element: <SignIn />
              },
          ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/signup"],
        });
        
        render(<RouterProvider router={router} />);

        const firstNameElement = screen.getByRole('textbox',{
            name: /first name/i
        });

        act(() => {
            fireEvent.change(firstNameElement, {
                target: { value: "Alvero" },
            }); 
        })

        const lastNameElement = screen.getByRole('textbox',{
            name: /last name/i
        });

        act(() => {
            fireEvent.change(lastNameElement, {
                target: { value: "moreno" },
            }); 
        })

        const emailElement = screen.getByRole('textbox',{
            name: /email/i
        });

        act(() => {
            fireEvent.change(emailElement, {
                target: { value: "alvero@gmail.com" },
            }); 
        })

        const passwordElement = screen.getByLabelText(/password/i);

        act(() => {
            fireEvent.change(passwordElement, { target: { value: 'Test@123' } });
        })

        const signUpBtn = screen.getByRole('button',{
            name: /sign up/i
        });
        expect(signUpBtn).toBeInTheDocument();

        await user.click(signUpBtn);
        const signInElement = screen.getByTestId('main-signin-id');
        expect(signInElement).toBeInTheDocument();
    })
    

})