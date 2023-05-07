import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import IntegrationTab from '.';

describe('Integration tab', () => {

    test('render integration tab section', () => {
        renderWithRouter(<IntegrationTab />);
        const integrationTabElement = screen.getByTestId('main-integration-box-test-id');
        expect(integrationTabElement).toBeInTheDocument();
    });

    test('click on view install integration button', () => {
        renderWithRouter(<IntegrationTab />);
        const integrationButtonElement = screen.getByTestId('view-install-integartion-1');
        expect(integrationButtonElement).toBeInTheDocument();

        fireEvent.click(integrationButtonElement);
    });

    test('click on view integration button', () => {
        renderWithRouter(<IntegrationTab />);
        const integrationButtonElement = screen.getByTestId('view-uninstall-integartion-1');
        expect(integrationButtonElement).toBeInTheDocument();

        fireEvent.click(integrationButtonElement);
    });


    test('click on view uninstall integration button', () => {
        renderWithRouter(<IntegrationTab />);
        const integrationButtonElement = screen.getByTestId('view-uninstall-integartion-1');
        expect(integrationButtonElement).toBeInTheDocument();

        fireEvent.click(integrationButtonElement);

        const integrationButtonModal = screen.getByTestId('main-integration-modal-test-id');
        expect(integrationButtonModal).toBeInTheDocument();

        const integrationButtonBtn = screen.getByTestId('integration-install-btn');
        expect(integrationButtonBtn).toBeInTheDocument();

        fireEvent.click(integrationButtonBtn);

    });

    test('click on cancle integration button', () => {
        renderWithRouter(<IntegrationTab />);
        const integrationButtonElement = screen.getByTestId('view-uninstall-integartion-1');
        expect(integrationButtonElement).toBeInTheDocument();

        fireEvent.click(integrationButtonElement);

        const integrationCancelButtonBtn = screen.getByTestId('integration-cancel-btn');
        expect(integrationCancelButtonBtn).toBeInTheDocument();

        fireEvent.click(integrationCancelButtonBtn);
    });

})