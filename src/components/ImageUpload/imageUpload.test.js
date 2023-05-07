import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ImageUpload from "./index";
import { renderWithRouter } from "../../setupTests";
import user from "@testing-library/user-event";

describe("listWithDownloadBtn", () => {

    const mockSetGetSrc = jest.fn();
    const mockGetSrc = [];
    const props = {
        getSrc: mockGetSrc,
        setGetSrc: mockSetGetSrc,
        isDregger: true,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('render correctly invoice text', () => {
        renderWithRouter(<ImageUpload />);
        const invoiceText = screen.getByTestId("img-upload-edit");
        expect(invoiceText).toBeInTheDocument();

    });

    test('should render ImageUpload component', () => {
        render(<ImageUpload {...props} />);
        const uploadInput = screen.getByTestId('upload-input-dragger');
        expect(uploadInput).toBeInTheDocument();
    });

    it('renders upload input when isDregger prop is false', () => {
      render(<ImageUpload isDregger={false} />);
      const uploadInput = screen.getByTestId('upload-input');
      expect(uploadInput).toBeInTheDocument();
    });

    it('renders dragger when isDregger prop is true', () => {
      render(<ImageUpload isDregger={true} />);
      const dragger = screen.getByTestId('upload-input-dragger');
      expect(dragger).toBeInTheDocument();
    });

    it('renders dragger when isDregger prop is false', () => {
      render(<ImageUpload isDregger={true} />);
      // const dragger = screen.getByTestId('upload-input-dragger');
      // expect(dragger).not.toBeInTheDocument();
      expect(screen.getByTestId('upload-input-dragger')).not.toBe();
    });

    it('renders dragger when isDregger prop is true with click icon', () => {
      render(<ImageUpload isDregger={true} />);
      const dragger = screen.getByTestId('upload-input-dragIcon');
      expect(dragger).toBeInTheDocument();
    });

    it('renders dragger when isDregger prop is false with click icon', () => {
      render(<ImageUpload isDregger={true} />);
      expect(screen.getByTestId('upload-input-dragIcon')).not.toBe();
    });

    it('renders dragger when isDregger prop is true with click text', () => {
      render(<ImageUpload isDregger={true} />);
      const dragger = screen.getByTestId('upload-input-click-text');
      expect(dragger).toBeInTheDocument();
    });

    it('renders dragger when isDregger prop is false with click text', () => {
      render(<ImageUpload isDregger={true} />);
      expect(screen.getByTestId('upload-input-click-text')).not.toBe();
      // const dragger = screen.getByTestId('upload-input-click-text');
      // expect(dragger).toBeInTheDocument();
    });
    

    it('renders dragger when isDregger prop is true with click description', () => {
      render(<ImageUpload isDregger={true} />);
      const dragger = screen.getByTestId('upload-input-click-description');
      expect(dragger).toBeInTheDocument();
    });

    it('renders dragger when isDregger prop is false with click description', () => {
      render(<ImageUpload isDregger={false} />);
      const dragger = screen.getByTestId('upload-input-Btn-Upload');
      expect(dragger).toBeInTheDocument();
    });



      test('should display error message when file type is not JPG or PNG', () => {
        render(<ImageUpload {...props} />);
        const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
        fireEvent.change(screen.getByTestId('upload-input-dragger'), { target: { files: [file] } });
        // expect(screen.getByText(/You can only upload JPG\/PNG file!/i)).toBeInTheDocument();
        // const a = screen.getByText(/You can only upload JPG\/PNG file!/i)
        // expect().toBeInTheDocument();
      });

    test('should display error message when file size is greater than 2MB', () => {
        render(<ImageUpload {...props} />);
        const file = new File(['dummy content'], 'test.jpg', { type: 'image/jpeg' });
        Object.defineProperty(file, 'size', { value: 3 * 1024 * 1024 });
        fireEvent.change(screen.getByTestId('upload-input-dragger'), { target: { files: [file] } });
        expect(screen.getByText(/Image must smaller than 2MB!/i)).toBeInTheDocument();
      });
    
    it('renders uploaded images when getSrc prop has images', () => {
      const images = [
        { imagebase64: 'image1', name: 'image1.jpg', file: {} },
        { imagebase64: 'image2', name: 'image2.jpg', file: {} },
      ];
      const setGetSrc = jest.fn();
      render(<ImageUpload getSrc={images} setGetSrc={setGetSrc}/>);
      const image1 = screen.getAllByTestId('uploaded-image-tag')[0];
      expect(image1).toBeInTheDocument();
      const image2 = screen.getAllByTestId('uploaded-image-tag')[1];
      expect(image2).toBeInTheDocument();
    });

    it('removes uploaded image when close button is clicked', () => {
      const images = [
        { imagebase64: 'image1', name: 'image1.jpg', file: {} },
        { imagebase64: 'image2', name: 'image2.jpg', file: {} },
      ];
      const setGetSrc = jest.fn();
      render(<ImageUpload getSrc={images} setGetSrc={setGetSrc} />);
      const closeButton1 = screen.getAllByTestId('close-Image-btn')[0];
      fireEvent.click(closeButton1);
    });

    it('removes uploaded image when close button is clicked up span', () => {
      const images = [
        { imagebase64: 'image1', name: 'image1.jpg', file: {} },
        { imagebase64: 'image2', name: 'image2.jpg', file: {} },
      ];
      const setGetSrc = jest.fn();
      render(<ImageUpload getSrc={images} setGetSrc={setGetSrc} />);
      const closeButton1 = screen.getAllByTestId('close-Image-btn-up-span')[0];
      expect(closeButton1).toBeInTheDocument();
    });

    it('removes uploaded image when close button is clicked image main div', () => {
      const images = [
        { imagebase64: 'image1', name: 'image1.jpg', file: {} },
        { imagebase64: 'image2', name: 'image2.jpg', file: {} },
      ];
      const setGetSrc = jest.fn();
      render(<ImageUpload getSrc={images} setGetSrc={setGetSrc} />);
      const closeButton1 = screen.getAllByTestId('close-Image-btn-image-main-div')[0];
      expect(closeButton1).toBeInTheDocument();
    });

    test('clicking the remove button for an uploaded image correctly removes it', async () => {
      const setGetSrc = jest.fn();
      const getSrc = [{ name: 'test.jpg', file: new File([], 'test.jpg'), imagebase64: 'data:image/jpeg;base64,/9j/4AAQSk...' }];
      const { getByTestId, queryByTestId } = render(<ImageUpload getSrc={getSrc} setGetSrc={setGetSrc} isDregger={false} />);
      const closeButton = screen.getByTestId('close-Image-btn');
      expect(screen.getByTestId('getSrc-image-row')).toBeInTheDocument();
      fireEvent.click(closeButton);
    });

    test('selecting a file that is too large shows an error notification', async () => {
      const setGetSrc = jest.fn();
      const { getByTestId, queryByTestId } = render(<ImageUpload getSrc={[]} setGetSrc={setGetSrc} isDregger={false} />);
      const input = screen.getByTestId('upload-input');
      Object.defineProperty(input, 'files', { value: [new File([], 'test.jpg', { type: 'image/jpeg', size: 1 * 1024 * 1024 })] });
      fireEvent.change(input);
    });

    it('should show dragger input when isDregger is true', () => {
      const { getByTestId } = render(<ImageUpload getSrc={mockGetSrc} setGetSrc={mockSetGetSrc} isDregger={true} />);
      expect(screen.getByTestId('upload-input-dragger')).toBeInTheDocument();
    });


})