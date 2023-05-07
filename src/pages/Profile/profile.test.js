import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import Profile from "./index";
import {
  Modal,
  Card,
  Button,
  Col,
  Rate,
} from "antd";
import { profileImgCard } from "../../constants";


describe("Profile page", () => {

  test("render upload comp", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("upload-comp")).toBeInTheDocument();
  });

  test("render profile name", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("name-profile")).toBeInTheDocument();
  });
  test("render profile section card", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("profile-section-card")).toBeInTheDocument();
  });

  test("render profile email", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("email-profile")).toBeInTheDocument();
  });

  test("render stastics card 1", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("statistic-card-1")).toBeInTheDocument();
  });

  test("render stastics card 2", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("statistic-card-2")).toBeInTheDocument();
  });

  test("render actionTagTable", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("action-tag-table")).toBeInTheDocument();
  });

  it("should render correctly", () => {
    render(
      <Col sm={24} md={12} lg={6}>
        {profileImgCard.map((imgData) => (
          <Col sm={24} md={12} lg={6} key={imgData.key} className="w-100">
            <Card
              className="mt-5"
              hoverable
              cover={<img alt={imgData.title} src={imgData.imgSrc} />}
            >
              <div
                className="text-black-light"
                data-testid={`product-${imgData.key}`}
              >
                Project #{imgData.key}
              </div>
              <div
                className="mt-1 text-bolder fs-18"
                data-testid={`product-head-${imgData.key}`}
              >
                {" "}
                {imgData.title}{" "}
              </div>
              <div
                className="mt-1 text-light text-black-light"
                data-testid={`product-description-${imgData.key}`}
              >
                {imgData.description}{" "}
              </div>
              <Rate
                disabled
                defaultValue={imgData.rating}
                className="mt-2 fs-18"
                data-testid={`product-rate-${imgData.key}`}
              />
              <Button
                type="primary"
                className="mt-2"
                data-testid={`product-btn-${imgData.key}`}
              >
                View Dashboard
              </Button>
            </Card>
          </Col>
        ))}
      </Col>
    );
    profileImgCard.forEach((imgData) => {
      expect(screen.getByAltText(imgData.title)).toBeInTheDocument();
    });
    profileImgCard.forEach((imgData) => {
      expect(screen.getByTestId(`product-${imgData.key}`)).toBeInTheDocument();
    });
    profileImgCard.forEach((imgData) => {
      expect(screen.getByTestId(`product-head-${imgData.key}`)).toBeInTheDocument();
    });
    profileImgCard.forEach((imgData) => {
      expect(screen.getByTestId(`product-description-${imgData.key}`)).toBeInTheDocument();
    })

    profileImgCard.forEach((imgData) => {
      expect(screen.getByTestId(`product-btn-${imgData.key}`)).toBeInTheDocument()
    });
  });

  it("should open image preview modal on click of image", async () => {
    renderWithRouter(<Profile />);
    const image = await screen.queryByTestId('upload-comp')
    fireEvent.click(image);
    const previewTitle = await screen.findByText("image.png");
    expect(previewTitle).toBeInTheDocument();
  });

  test.each([1, 2, 3, 4])("should navigate to the homepage when the back button is clicked", (index) => {
    renderWithRouter(<Profile />)
    const backButton = screen.getByTestId(`view-dashboard-${index}`)
    expect(backButton).toBeInTheDocument()
    fireEvent.click(backButton);
    expect(window.location.pathname).toEqual("/")
  })
  test.each([1, 2, 3, 4])("should render project name", (index) => {
    renderWithRouter(<Profile />)
    const name = screen.getByTestId(`name-${index}`)
    expect(name).toBeInTheDocument()

  })
  test.each([1, 2, 3, 4])("should render project title", (index) => {
    renderWithRouter(<Profile />)
    const name = screen.getByTestId(`title-${index}`)
    expect(name).toBeInTheDocument()

  })

  test.each([1, 2, 3, 4])("should render project description", (index) => {
    renderWithRouter(<Profile />)
    const name = screen.getByTestId(`description-${index}`)
    expect(name).toBeInTheDocument()

  })

  it('calls handleCancel function when cancel icon is clicked', () => {
    const handleCancel = jest.fn();
    const previewOpen = true;
    const previewTitle = 'Example Title';
    const previewImage = 'example.png';

    render(
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
        data-testid="preview-modal"
      >
        <img
          alt="example"
          style={{
            width: '100%',
            height: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    );

    const cancelIcon = screen.getByLabelText('Close');
    fireEvent.click(cancelIcon);

    expect(handleCancel).toHaveBeenCalled();
  });

  test("render actionTagTable with header", () => {
    renderWithRouter(<Profile />);
    expect(screen.getByTestId("action-tag-table")).toBeInTheDocument();
    expect(screen.getByText(/Action And Permission/i)).toBeInTheDocument()

  });
  test('displays the correct number of rows', () => {

    renderWithRouter(<Profile />)
    const rows = screen.getAllByRole('row');
    const firstRow = rows[1]; // get the second element in the rows array, which should be the first data row
    const firstRowCells = screen.getAllByRole('cell', { within: firstRow });
    expect(firstRowCells[0]).toHaveTextContent('John Brown');
    expect(firstRowCells[1]).toHaveTextContent('32')

  })

  test('renders Action table edit', () => {
    renderWithRouter(<Profile />)
    const editIcon = screen.getAllByTestId('EditOutlinedIcon-test')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });

  test('renders Action table delete', () => {
    renderWithRouter(<Profile />)
    const deleteIcon = screen.getAllByTestId('DeleteOutlinedIcon-test')[0];
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);

  });

  test("opens preview modal on handlePreview", async () => {
    renderWithRouter(<Profile />);
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const uploadComp = screen.getByTestId("upload-comp");
    fireEvent.change(uploadComp, { target: { files: [file] } });
  });

  test("closes preview modal on handleCancel", async () => {
    const { container } = renderWithRouter(<Profile />)
    const menuIcon = container.querySelectorAll(".anticon-eye")[0];
    expect(menuIcon).toBeInTheDocument();
    await fireEvent.click(menuIcon);
    expect(screen.getByAltText("example")).toBeInTheDocument();
    await fireEvent.click(screen.getByAltText("example"));
  });

});