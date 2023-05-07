import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import PasswordTab from '.';

describe('Password tab', () => {

    test('render profile tab section', () => {
        renderWithRouter(<PasswordTab />);
        const passwordTabElement = screen.getByTestId('main-profiletab-box-test-id');
        expect(passwordTabElement).toBeInTheDocument();
    });

    test('renders form with confirm password input', () => {
        renderWithRouter(<PasswordTab />);
        const confirmPasswordInput = screen.getByPlaceholderText('Enter Confirm Password');
        expect(confirmPasswordInput).toBeInTheDocument();
    });

    test('validates confirm password correctly', async () => {
        renderWithRouter(<PasswordTab />);

        const newPasswordInput = screen.getByPlaceholderText('Enter New Password');
        const confirmPasswordInput = screen.getByPlaceholderText('Enter Confirm Password');

        fireEvent.change(newPasswordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password1234' } });

        fireEvent.blur(confirmPasswordInput);

        const errorMessage = await screen.findByText(/The two passwords that you entered do not match!/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should reset the form fields when reset button is clicked', () => {
        renderWithRouter(<PasswordTab />);
    
        // Fill in some fields
        const currentPass = screen.getByTestId('pass-current-id');
        const newPass = screen.getByTestId('pass-new-id');
        const confirmPass = screen.getByTestId('pass-confirm-id');
        fireEvent.change(currentPass, { target: { value: 'Test@123' } });
        fireEvent.change(newPass, { target: { value: 'A!a12345' } });
        fireEvent.change(confirmPass, { target: { value: 'A!a12345' } });

    
        // Click the reset button
        const resetButton = screen.getByRole('button', { name: /reset/i });
        fireEvent.click(resetButton);
    
      });


      it('should notification show after update password', async() => {
        renderWithRouter(<PasswordTab />);
    
        // Fill in some fields
        const currentPass = screen.getByTestId('pass-current-id');
        const newPass = screen.getByTestId('pass-new-id');
        const confirmPass = screen.getByTestId('pass-confirm-id');
        fireEvent.change(currentPass, { target: { value: 'Test@123' } });
        fireEvent.change(newPass, { target: { value: 'A!a12345' } });
        fireEvent.change(confirmPass, { target: { value: 'A!a12345' } });

    
        const resetButton = screen.getByRole('button', { name: /Update Passoword/i });
        fireEvent.click(resetButton);
    
        const notificationText = await screen.findByText('Password is updated');
        expect(notificationText).toBeInTheDocument();
       
      });
})