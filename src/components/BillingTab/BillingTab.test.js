import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import BillingTab from '.';

describe('Billing tab', () => {

    
    test('render billing tab section', () => {
        renderWithRouter(<BillingTab />);
        const billingTabElement = screen.getByTestId('main-billing-box-test-id');
        expect(billingTabElement).toBeInTheDocument();
    });

    test('click On edite button for the other payment', () => {
        renderWithRouter(<BillingTab />);
        const paymentEditBtnElement = screen.getByTestId('edit-other-payment-test-id');
        expect(paymentEditBtnElement).toBeInTheDocument();

        fireEvent.click(paymentEditBtnElement);      
    });

    test('click On edit button for the credit card', () => {
        renderWithRouter(<BillingTab />);
        const cardEditBtnElement = screen.getByTestId('edit-credit-card-test-id-1');
        expect(cardEditBtnElement).toBeInTheDocument();

        fireEvent.click(cardEditBtnElement);      
    });

    test('click On update button for the credit card', async() => {
        renderWithRouter(<BillingTab />);
        const cardUpdateBtnElement = screen.getByTestId('update-billing-info-test-id');
        expect(cardUpdateBtnElement).toBeInTheDocument();

        fireEvent.click(cardUpdateBtnElement);

        const notificationText = await screen.findByText('Payment details are updeted');
        expect(notificationText).toBeInTheDocument();

    });

    test('click On reset button for the credit card', async() => {
        renderWithRouter(<BillingTab />);
        const cardResetBtnElement = screen.getByTestId('reset-billing-info-test-id');
        expect(cardResetBtnElement).toBeInTheDocument();

        fireEvent.click(cardResetBtnElement);

    });

    test('click On add new card button for the credit card', async() => {
        renderWithRouter(<BillingTab />);
        const cardNewAddBtnElement = screen.getByTestId('add-new-card-btn-test-id');
        expect(cardNewAddBtnElement).toBeInTheDocument();

        fireEvent.click(cardNewAddBtnElement);

        const addEditBtnElement = await screen.getByTestId('add-edit-credit-card-modal');
        expect(addEditBtnElement).toBeInTheDocument();

    });


    test('click On close card button for the credit card', async() => {
        renderWithRouter(<BillingTab />);
        const cardNewAddBtnElement = screen.getByTestId('add-new-card-btn-test-id');
        expect(cardNewAddBtnElement).toBeInTheDocument();

        fireEvent.click(cardNewAddBtnElement);

        const addEditBtnElement = await screen.getByLabelText('Close');
        expect(addEditBtnElement).toBeInTheDocument();
        fireEvent.click(addEditBtnElement);

    });


    test('click On submit button for the credit card', async() => {
        renderWithRouter(<BillingTab />);
        const cardNewAddBtnElement = screen.getByTestId('add-new-card-btn-test-id');
        expect(cardNewAddBtnElement).toBeInTheDocument();

        fireEvent.click(cardNewAddBtnElement);

        const addEditBtnElement = await screen.getByTestId('add-edit-credit-card-submit-btn-test-id');
        expect(addEditBtnElement).toBeInTheDocument();


        const cardHoldername = screen.getByTestId('card-holder-name-test-id');
        const cardNumber = screen.getByTestId('card-number-test-id');
        const cardExpDate = screen.getByTestId('card-exp-date-test-id');
        const cardCVV = screen.getByTestId('card-cvv-test-id');

        fireEvent.change(cardHoldername, { target: { value: 'Alvero' } });
        fireEvent.change(cardNumber, { target: { value: '4111 1111 1111 1111' } });
        fireEvent.change(cardExpDate, { target: { value: '12/25' } });
        fireEvent.change(cardCVV, { target: { value: '159' } });
        
        fireEvent.click(addEditBtnElement);

    });
    
})