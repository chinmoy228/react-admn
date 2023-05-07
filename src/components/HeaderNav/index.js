import React, { useState } from "react";
import "./HeaderNav.scss";

import {
  Avatar,
  Badge,
  Button,
  Col,
  Drawer,
  Dropdown,
  Empty,
  Layout,
  notification,
  Row,
  Space,
  theme,
} from "antd";
import {
  BellFilled,
  MessageFilled,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { messageNotification } from "../../utils/dummy-data";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderNav = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(
    messageNotification?.length
  );
  const url =
    "https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg";
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const items = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined style={{ fontSize: "14px" }} data-testid='profile-test-id'/>,
      className: "header-profile-dropdown",
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined style={{ fontSize: "14px" }} data-testid='logout-test-id'/>,
      style: { color: "#ee4b4f" },
      className: "headerLogoutDropdown",
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onClickClear = () => {
    setNotificationCount(0);
  };

  const onClick = ({ key }) => {
    if (key === "1") {
      navigate("/profile");
    }
    if (key === "2") {
      notification.success({
        message: "Logout Successfully",
        description: "You have been logged out successfully",
        duration: 3,
      });
      navigate("/signin");
    }
  };

  const NotificationHeader = () => {
    return (
      <Row>
        <Col xs={12} className="fs-18 d-flex items-center">
          Notification
        </Col>
        <Col xs={12} className="d-flex justify-end">
          <Button
            type="link"
            onClick={onClickClear}
            data-testid="clear-notification"
          >
            Clear
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <Header style={{ padding: 0 }}>
      <Row data-testid="main-header-id">
        <Col xs={24} sm={24} md={24}>
          <div className="header-right-main d-flex justify-end">
            <div className="header-right-notification">
              <span className="cursor-pointer" onClick={showDrawer}>
                <Badge
                  count={notificationCount}
                  size="small"
                  data-testid="header-badge-id"
                >
                  <BellFilled
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </span>
            </div>
            <div className="header-right-profile pl-md-5 pl-3 pr-5 ml-md-1 mr-1 text-white cursor-pointer">
              <Dropdown
                menu={{
                  items,
                  onClick,
                 
                }}
                
              >
                <div
                  onClick={(e) => e.preventDefault()}
                  data-testid="profileDropdown"
                >
                  <span className="pr-2">
                    Hi,<span className="text-bolder"> Alvero Moreno</span>
                  </span>
                  <Avatar size={40} src={url} alt="profile" />
                </div>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
      <Drawer
        title={<NotificationHeader />}
        className="drawer-notification-main"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {notificationCount > 0 ? (
          messageNotification?.map((item) => {
            return (
              <div
                className="drawer-notification-card shadow-md p-3 rounded mb-4"
                key={item?.id}
              >
                <Row className="mb-4">
                  <Col xs={3}>
                    {item?.type === "message" ? (
                      <MessageFilled
                        style={{ fontSize: "20px", color: `${colorPrimary}` }}
                      />
                    ) : (
                      <BellFilled
                        style={{
                          fontSize: "20px",
                          color: "#ee4b4f",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Col>
                  <Col xs={15} className="fs-16 text-gray text-bold">
                    {item?.title}
                  </Col>
                  <Col xs={6} className="text-gray text-bold text-end">
                    {item?.time}
                  </Col>
                </Row>
                <Row className="mb-2 fs-16 ">{item?.description}</Row>
                <Row className="text-gray text-bold">{item?.message}</Row>
              </div>
            );
          })
        ) : (
          <div
            className="d-flex items-center h-full justify-center"
            data-testid="notification-empty"
          >
            <Empty description={`Don't have any notification`} />
          </div>
        )}
      </Drawer>
    </Header>
  );
};

export default HeaderNav;
