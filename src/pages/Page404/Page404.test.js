import Page404 from './index'
import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import user from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import SignUp from '../SignUp';
import { act } from 'react-dom/test-utils';
import SignIn from '../SignIn';
import { userEvent } from '@testing-library/user-event';

describe('Page404', () => {
    test('render Page404', () => {
        renderWithRouter(<Page404 />);
        const page404Element = screen.getByTestId('main-404-id');
        expect(page404Element).toBeInTheDocument();
    })

    test('render Page404 image', () => {
        renderWithRouter(<Page404 />);
        const page404DesElement = screen.getByText('Sorry, the page you visited does not exist.');
        expect(page404DesElement).toBeInTheDocument();
    })

    test('render Back button', () => {
        renderWithRouter(<Page404 />);
        const page404BackBtmElement = screen.getByRole('button',{
            name: /back home/i
        });
        expect(page404BackBtmElement).toBeInTheDocument();
    })

    test('clicking back home button should navigate to previous page', () => {
        renderWithRouter(<Page404 />);
        const page404BackBtmElement = screen.getByRole('button',{
            name: /back home/i
        });
        expect(page404BackBtmElement).toBeInTheDocument();
        fireEvent.click(page404BackBtmElement);
      expect(window.location.pathname).toBe('/')
    })
      

   
    
})

