import { screen } from '@testing-library/react';

import { renderWithRouter } from './setupTests';
import LayoutBox from './pages/LayoutBox';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Page404 from './pages/Page404';

// jest.mock('./pages/LayoutBox',()=>{
//   return {
//     LayoutBox : () => <div data-testid='main-layout-id'>Hello World</div>
//   }
// })

describe('App', () => {

  test('renders Layout', () => {
    renderWithRouter(
      <LayoutBox />
      , { route: '/' }
    );
    const layOutMain = screen.getByTestId("main-layout-id");
    expect(layOutMain).toBeInTheDocument();
  });

  test('renders SignIn', () => {
    renderWithRouter(
      <SignIn />
      , { route: '/signin' }
    );
    const layOutMain = screen.getByTestId("main-signin-id");
    expect(layOutMain).toBeInTheDocument();
  });

  test('renders SignUp', () => {
    renderWithRouter(
      <SignUp />
      , { route: '/signup' }
    );
    const layOutMain = screen.getByTestId("main-signup-id");
    expect(layOutMain).toBeInTheDocument();
  });

  test('renders Forgot Password', () => {
    renderWithRouter(
      <ForgetPassword />
      , { route: '/forgotpassword' }
    );
    const layOutMain = screen.getByTestId("main-forgot-password-id");
    expect(layOutMain).toBeInTheDocument();
  });

  test('renders 404 Page', () => {
    renderWithRouter(
      <Page404 />
      , { route: '*' }
    );
    const layOutMain = screen.getByTestId("main-404-id");
    expect(layOutMain).toBeInTheDocument();
  });
})