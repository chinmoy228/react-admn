import ProfileTab from './index';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import user from '@testing-library/user-event';

describe('Profile tab', () => {

    test('render profile tab section', () => {
        renderWithRouter(<ProfileTab />);
        const signInElement = screen.getByTestId('main-profiletab-box-id');
        expect(signInElement).toBeInTheDocument();
    });

    test('Click On reset Button', async () => {
        renderWithRouter(<ProfileTab />);
        const resetBtn = screen.getByTestId(`reset-btn-test-id`);
        expect(resetBtn).toBeInTheDocument();
        await user.click(resetBtn);
    })

    test('Click On Sign In Button',async()=>{
        
        renderWithRouter(<ProfileTab />);
        const resetBtn = screen.getByTestId(`select-lang-test-id`);
        expect(resetBtn).toBeInTheDocument();
        await user.click(resetBtn);
    })
})