import NotifictionElement from "./index";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import { notification } from "antd";

describe("NotificationElement ", () => {
  it("renders correctly with action prop", () => {
    const api = {
      open: jest.fn(),
      destroy: jest.fn(),
    };

    const text = "Test Notification";
    const description = "This is a test notification";
    const duration = 5;
    const closeControl = true;
    const backColor = "red";
    const icon = null;
    const style = null;
    const placement = "topRight";
    const btnIcon = null;
    const action = true;
    const type = "success";

    render(
      <NotifictionElement
        text={text}
        description={description}
        duration={duration}
        closeControl={closeControl}
        backColor={backColor}
        icon={icon}
        style={style}
        placement={placement}
        btnIcon={btnIcon}
        action={action}
        type={type}
      />
    );

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

   
  });
});
