import { screen, fireEvent, render } from '@testing-library/react';
import { renderWithRouter } from '../../setupTests';
import MultiSelectCheckButton from '.';

describe('Notification tab', () => {


    const selectedTags = [
        {
          field: 'Field-1',
          options: [
            { type: 'Email', selected: false },
            { type: 'Browser', selected: true },
            { type: 'App', selected: false },
          ],
        },
        {
          field: 'Field-2',
          options: [
            { type: 'Email', selected: true },
            { type: 'Browser', selected: false },
            { type: 'App', selected: false },
          ],
        },
      ];

      test('renders the component with correct props', () => {
        const setSelectedTags = jest.fn();
        const { getByTestId } = render(
          <MultiSelectCheckButton
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        );

        expect(getByTestId('main-multi-select-test-id')).toBeInTheDocument();
      });

    test('render notification tab section', () => {
        renderWithRouter(<MultiSelectCheckButton />);
        const multiSelectElement = screen.getByTestId('main-multi-select-test-id');
        expect(multiSelectElement).toBeInTheDocument();
    });

    test('clicking a tag should toggle its selection', () => {
        const setSelectedTags = jest.fn();
        const { getByTestId } = render(
          <MultiSelectCheckButton
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        );
    
        fireEvent.click(getByTestId('checkable-tag-Field-1-Browser'));
        
      });
    
})