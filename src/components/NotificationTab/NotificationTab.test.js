import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import NotificationTab from '.';

describe('Notification tab', () => {

    test('render notification tab section', () => {
        renderWithRouter(<NotificationTab />);
        const notificationTabElement = screen.getByTestId('main-notification-box-test-id');
        expect(notificationTabElement).toBeInTheDocument();
    });


    test('update button click functionality', async() => {
        renderWithRouter(<NotificationTab />);
        const notificationUpdateButtonElement = screen.getByTestId('notification-update-btn-test-id');
        expect(notificationUpdateButtonElement).toBeInTheDocument();

        fireEvent.click(notificationUpdateButtonElement);

        const notificationText = await screen.findByText('Notification are updeted');
        expect(notificationText).toBeInTheDocument();
    });

    test('reset button click functionality', async() => {
        renderWithRouter(<NotificationTab />);
        const notificationResetButtonElement = screen.getByTestId('notification-reset-btn-test-id');
        expect(notificationResetButtonElement).toBeInTheDocument();

        fireEvent.click(notificationResetButtonElement);

    });
    
})