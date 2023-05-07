import { Card } from "antd";
import React from "react";
import { Button, notification, Space } from "antd";
const close = () => {
  // console.log(
  //   "Notification was closed. Either the close button was clicked or duration time elapsed."
  // );
};
const NotifictionElement = ({
  text,
  description,
  danger,
  duration,
  closeControl,
  backColor,
  icon,
  style,
  placement,
  btnIcon,
  action,
  type,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button
          type="primary"
          size="small"
          onClick={() => notification.close(key)}
        >
          Confirm
        </Button>
      </Space>
    );
    const options = {
      message: "Notification Title",
      description: description,
      key,
      onClose: close,
    };
    if (duration) {
      options.duration = duration;
    }
    if (closeControl) {
      options.btn = btn;
    }
    if (icon) {
      options.icon = icon;
    }
    if (style) {
      options.style = style;
    }
    if (placement) {
      options.placement = placement;
    }

    notification.open(options);
  };
  const openNotificationWithIcon = () => {
    notification[type]({
      message: "Notification Title",
      description: description,
    });
  };
  return (
    <div>
      {contextHolder}

      {action ? (
        <Button
          type="primary"
          onClick={openNotification}
          danger={danger}
          icon={btnIcon}
          style={{ backgroundColor: `${backColor}` }}
          data-testid="btn"
          size="large"
        >
          {text}
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={openNotificationWithIcon}
          danger={danger}
          icon={btnIcon}
          style={{ backgroundColor: `${backColor}` }}
          data-testid="btn-2"
          size="large"
        >
          {text}
        </Button>
      )}
    </div>
  );
};

export default NotifictionElement;
