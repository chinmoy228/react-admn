import SignIn from './index'
import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import user from '@testing-library/user-event';

import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import SignUp from '../SignUp';
import { act } from 'react-dom/test-utils';
import ForgetPassword from '../ForgetPassword';

describe('SignIn', () => {
    test('render SignIn', () => {
        renderWithRouter(<SignIn />);
        const signInElement = screen.getByTestId('main-signin-id');
        expect(signInElement).toBeInTheDocument();
    })

    test('render left side header', () => {
        renderWithRouter(<SignIn />);
        const leftSideHeader = screen.getByTestId('signin-left-head');
        expect(leftSideHeader).toBeInTheDocument();
    })

    test('render left side description', () => {
        renderWithRouter(<SignIn />);
        const leftSideDes = screen.getByTestId('signin-left-des');
        expect(leftSideDes).toBeInTheDocument();
    })

    test('render left signUp button', async () => {
        user.setup()
        // renderWithRouter(<App/>);

        const routes = [
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
        ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/signin"],
        });

        render(<RouterProvider router={router} />);
        const leftSideBtn = screen.getByRole('button', {
            name: /sign up/i
        });
        expect(leftSideBtn).toBeInTheDocument();

        await user.click(leftSideBtn);
        const signUpElement = screen.getByTestId('main-signup-id');
        expect(signUpElement).toBeInTheDocument();
    })
})

describe('SignIn Form Head', () => {
    test('render SignIn Form Head', () => {
        renderWithRouter(<SignIn />);
        const signInFormHeadElement = screen.getByTestId('signin-right-form-head');
        expect(signInFormHeadElement).toBeInTheDocument();
    })
    test('render SignIn Form Des', () => {
        renderWithRouter(<SignIn />);
        const signInFormDesElement = screen.getByTestId('signin-right-form-des');
        expect(signInFormDesElement).toBeInTheDocument();
    })
})

describe('SignIn Form', () => {
    test('render SignIn Form', () => {
        renderWithRouter(<SignIn />);
        const signInElement = screen.getByTestId('signin-form-id');
        expect(signInElement).toBeInTheDocument();
    })

    test('render Email', () => {
        renderWithRouter(<SignIn />);
        const emailElement = screen.getByRole('textbox', {
            name: /email/i
        });
        expect(emailElement).toBeInTheDocument();
    })

    test('render Password', () => {
        renderWithRouter(<SignIn />);
        const passwordElement = screen.getByTestId('signin-password-id');
        expect(passwordElement).toBeInTheDocument();
    })

    test('render remember CheckBox', () => {
        renderWithRouter(<SignIn />);
        const rememberElement = screen.getByTestId('signin-remember-id');
        expect(rememberElement).toBeInTheDocument();
    })

    test('render remember Forgot Password', () => {
        renderWithRouter(<SignIn />);
        const forgotpassElement = screen.getByTestId('signin-forgot-password-id');
        expect(forgotpassElement).toBeInTheDocument();
    })

    test('render SignIn Button', () => {
        renderWithRouter(<SignIn />);
        const signinBtnElement = screen.getByRole('button', {
            name: /sign in/i
        });
        expect(signinBtnElement).toBeInTheDocument();
    })

    test("Email validation", async () => {
        renderWithRouter(<SignIn />, { route: "/signin" });
        const emailElement = screen.getByRole('textbox', {
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
        renderWithRouter(<SignIn />, { route: "/signin" });
        const emailElement = screen.getByRole('textbox', {
            name: /email/i
        });

        act(() => {
            fireEvent.change(emailElement, {
                target: { value: "" },
            });
        })

        const signinBtn = screen.getByRole('button', {
            name: /sign in/i
        });
        expect(signinBtn).toBeInTheDocument();

        await user.click(signinBtn);

        const ErrorMessage = screen.findByText(/Please enter your email!/i);
        expect(await ErrorMessage).toBeInTheDocument();
    });

    test("check the forgot password link", async () => {
        user.setup();
        const routes = [
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/forgotpassword",
                element: <ForgetPassword />,
            }
        ];

        const router = createMemoryRouter(routes, {
            initialIndex: 0,
            initialEntries: ["/signin"],
        });

        render(<RouterProvider router={router} />);

        const forgotPassElement = screen.getByTestId('signin-forgot-password-id');
        expect(forgotPassElement).toBeInTheDocument();

        await user.click(forgotPassElement);
        const ForgotPassMainElement = screen.getByTestId("main-forgot-password-id");
        expect(ForgotPassMainElement).toBeInTheDocument();
    });
    test('Click On Sign In Button',async()=>{
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
            initialEntries: ["/signIn"],
        });
        
        render(<RouterProvider router={router} />);

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

        const signInBtn = screen.getByRole('button',{
            name: /sign In/i
        });
        expect(signInBtn).toBeInTheDocument();

        await user.click(signInBtn);
        // const signUpElement = screen.getByTestId('main-signup-id');
        // expect(signUpElement).toBeInTheDocument();
    })

})