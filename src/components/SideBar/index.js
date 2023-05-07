import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/dummy-logo.png";
import logoOneByOne from "../../Assets/logo11.png";

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  RightOutlined,
  LeftOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  AppstoreAddOutlined,
  FileProtectOutlined,
  LayoutOutlined,
  BorderOuterOutlined
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, theme } from "antd";
import { toggleSidebar } from "../../reducers/SidebarCollapse";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  const onClickLogo = () => {
    navigate("/");
  };

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { isCollapse } = useSelector((state) => state.sidebarCollapse);

  const items = [
    {
      key: "/",
      route: "/",
      icon: <DesktopOutlined />,
      label: "Dashboard",
      isSubmenu: false,
    },
    {
      isSubmenu: true,
      icon: <PieChartOutlined />,
      label: "Charts",
      SubMenu: [
        {
          key: "/charts/bar",
          route: "/charts/bar",
          label: "Bar Chart",
        },
        {
          key: "/charts/group",
          route: "/charts/group",
          label: "Group Chart",
        },
        {
          key: "/charts/linebar",
          route: "/charts/linebar",
          label: "Line Bar",
        },
        {
          key: "/charts/pie",
          route: "/charts/pie",
          label: "Pie Chart",
        },
        {
          key: "/charts/doughnut",
          route: "/charts/doughnut",
          label: "Doughnut Chart",
        },
      ],
    },
    {
      key: "/tables",
      route: "/tables",
      icon: <UserOutlined />,
      label: "Tables",
      isSubmenu: false,
    },
    {
      key: "/form",
      route: "/form",
      icon: <FileTextOutlined />,
      label: "Form",
      isSubmenu: false,
    },
    {
      key: "/product",
      route: "/product",
      icon: <AppstoreAddOutlined />,
      label: "Product",
      isSubmenu: false,
    },
    {
      key: "/editor",
      route: "/editor",
      icon: <CreditCardOutlined />,
      label: "Editor",
      isSubmenu: false,
    },
    {
      key: "/kanban",
      route: "/kanban",
      icon: <BorderOuterOutlined />,
      label: "Kanban",
      isSubmenu: false,
    },
    {
      isSubmenu: true,
      icon: <LayoutOutlined />,
      label: "UI Elements",
      SubMenu: [
        {
          key: "/uielements/accordion",
          route: "/uielements/accordion",
          label: "Accordion",
        },
        {
          key: "/uielements/notification",
          route: "/uielements/notification",
          label: "Notification",
        },
        {
          key: "/uielements/stepperform",
          route: "/uielements/stepperform",
          label: "Stepper Form",
        }
      ],
    },
    {
      isSubmenu: true,
      icon: <FileProtectOutlined />,
      label: "Authentication",
      SubMenu: [
        {
          key: "/signin",
          route: "/signin",
          label: "Sign In",
        },
        {
          key: "/signUp",
          route: "/signUp",
          label: "Sign Up",
        },
        {
          key: "/forgotPassword",
          route: "/forgotPassword",
          label: "Forgot Password",
        },
      ],
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      width={250}
      collapsed={isCollapse}
      className="h-full main-side-bar"
      data-testid="main-sideBar-id"
    >
      <div
        className={isCollapse ? `logoBoxContainerOneByOne` : `logoBoxContainer`}
        onClick={onClickLogo}
      >
        <div className="logoBox">
          <img
            src={isCollapse ? logoOneByOne : logo}
            alt="logo"
            height={36}
            width={170}
            data-testid="image-logo-id"
          />
        </div>
      </div>
      <div className="sideBarMenuList" data-testid="main-sideBarMenu-id">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          // items={items}
        >
          {items.map((item, i) => {
            return (
              <React.Fragment key={i} data-testid={item?.label}>
                {item?.isSubmenu === false ? (
                  <Menu.Item key={item?.key}>
                    <NavLink to={item?.route}>
                      {item?.icon}
                      <span>{item?.label}</span>
                    </NavLink>
                  </Menu.Item>
                ) : null}
                {item?.isSubmenu ? (
                  <SubMenu
                    title={
                      <>
                        {item?.icon}
                        <span className="">{item?.label}</span>
                      </>
                    }
                    className="siderSubMenu"
                  >
                    {item?.SubMenu.map((subItem) => {
                      return (
                        <Menu.Item key={subItem?.key}>
                          <NavLink to={subItem?.route}>
                            <span>{subItem?.label}</span>
                          </NavLink>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                ) : null}
              </React.Fragment>
            );
          })}
        </Menu>
      </div>
      <div
        className="sider-toggler-main cursor-pointer"
        data-testid="main-collapse-div-id"
        style={{ backgroundColor: `${colorPrimary}` }}
        onClick={() => dispatch(toggleSidebar(!isCollapse))}
      >
        {React.createElement(isCollapse ? RightOutlined : LeftOutlined, {
          className: "trigger",
          // onClick: () => dispatch(toggleSidebar(!isCollapse)),
          style: { fontSize: "16px", color: "#fff" },
        })}
      </div>
    </Sider>
  );
};

export default SideBar;
