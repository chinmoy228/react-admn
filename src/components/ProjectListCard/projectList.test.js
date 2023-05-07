import { render, screen, fireEvent } from "@testing-library/react";
import ProjectListCard from "./index";
import { renderWithRouter } from "../../setupTests";
import { Link } from "react-router-dom";
import user from "@testing-library/user-event";
import DeleteModal from "../DeleteModal";

describe("staticsCard", () => {
  test("render correctly", () => {
    renderWithRouter(<ProjectListCard />);
    const icon = screen.getByTestId("RiseOutlined-icon");
    expect(icon).toBeInTheDocument();
    const projectTitle = screen.getByTestId("project-title");
    expect(projectTitle).toBeInTheDocument();
    const projectDate = screen.getByTestId("project-date");
    expect(projectDate).toBeInTheDocument();
    const projectAvtar1 = screen.getByTestId("project-avtar-1");
    expect(projectAvtar1).toBeInTheDocument();
    const projectAvtar2 = screen.getByTestId("project-avtar-2");
    expect(projectAvtar2).toBeInTheDocument();
    const projectAvtar3 = screen.getByTestId("project-avtar-3");
    expect(projectAvtar3).toBeInTheDocument();
    const editBtn = screen.getByTestId("edit-btn");
    expect(editBtn).toBeInTheDocument();
    const deleteBtn = screen.getByTestId("delete-btn-project");
    expect(deleteBtn).toBeInTheDocument();
  });
  test("DeleteModal is hidden initially", () => {
    render(<DeleteModal />);
    const deleteModal = screen.queryByTestId("delete-modal");
    expect(deleteModal).toBeNull();
  });
  test("open modal onClick of delete", async () => {
    user.setup();
    renderWithRouter(<ProjectListCard />);

    const link = screen.getByText("Delete");
    expect(link).toBeInTheDocument();
    await user.click(link);

    const modal = screen.getByTestId("delete-modal");
    expect(modal).toBeVisible();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Want to delete the product?/i)
    ).toBeInTheDocument();
  });
 
});
