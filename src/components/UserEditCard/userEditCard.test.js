import { render, screen, fireEvent } from "@testing-library/react";
import UserEditCard from "./index";
import { renderWithRouter } from "../../setupTests";
import user from "@testing-library/user-event";
import DeleteModal from "../DeleteModal";
describe("userEditCard", () => {
  test("render correctly", () => {
    renderWithRouter(<UserEditCard />);
    const headingText = screen.getByTestId("header-title");
    expect(headingText).toBeInTheDocument();
    const nameElement = screen.getByTestId("owner-name-1");
    expect(nameElement).toBeInTheDocument();
    const DeleteOutlinedIcon = screen.getByTestId("DeleteOutlined-icon-1");
    expect(DeleteOutlinedIcon).toBeInTheDocument();
    const EditBtn = screen.getByTestId("edit-btn-1");
    expect(EditBtn).toBeInTheDocument();
    const companyNameTitle = screen.getByTestId("company-name-title-1");
    expect(companyNameTitle).toBeInTheDocument();
    const companyName = screen.getByTestId("company-name-1");
    expect(companyName).toBeInTheDocument();
    const emailAddressTitle = screen.getByTestId("email-adress-title-1");
    expect(emailAddressTitle).toBeInTheDocument();
    const emailAddress = screen.getByTestId("email-adress-1");
    expect(emailAddress).toBeInTheDocument();
    const vatNumberTitle = screen.getByTestId("vat-number-title-1");
    expect(vatNumberTitle).toBeInTheDocument();
    const vatNumber = screen.getByTestId("vat-number-1");
    expect(vatNumber).toBeInTheDocument();
  });
  test("DeleteModal is hidden initially", () => {
    render(<DeleteModal />);
    const deleteModal = screen.queryByTestId("delete-modal");
    expect(deleteModal).toBeNull();
  });
  test.each([1, 2, 3])(
    "renders card %i with owner name, company name, email address, and vat number",
    (index) => {
      render(<UserEditCard />);
      expect(screen.getByTestId(`owner-name-${index}`)).toHaveTextContent(
        "Oliver Liam"
      );
      expect(screen.getByTestId(`company-name-${index}`)).toHaveTextContent(
        "Viking Burrito"
      );
      expect(screen.getByTestId(`email-adress-${index}`)).toHaveTextContent(
        "oliver@burrito.com"
      );
      expect(screen.getByTestId(`vat-number-${index}`)).toHaveTextContent(
        "FRB1235476"
      );
    }
  );
  test.each([1, 2, 3])("open modal onClick of delete", async (index) => {
    user.setup();
    renderWithRouter(<UserEditCard />);

    const link = screen.getByTestId(`delete-action-${index}`);
    expect(link).toBeInTheDocument();
    await user.click(link);

    const modal = screen.getByTestId("delete-modal");
    expect(modal).toBeVisible();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Want to delete the product?/i)).toBeInTheDocument();
  });
});
