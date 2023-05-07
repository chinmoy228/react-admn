import React from "react";
import "./Profile.scss";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import {
  Modal,
  Upload,
  Card,
  Button,
  Form,
  Input,
  notification,
  Row,
  Col,
  Space,
  Tag,
  Statistic,
  Rate,
  theme,
  Tabs,
} from "antd";
import { useState } from "react";
import ActionTagTable from "../../components/ActionTagTable";
import { actionTagData } from "../../utils/dummy-data";
import { profileImgCard, profileTabsitems } from "../../constants";
import { useNavigate } from "react-router-dom";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const [form] = Form.useForm();
  // const formRef = React.useRef(null);
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  // const [EditProfile, setEditProfile] = useState(false);
  // const [changePassword, setChangePassword] = useState(false);
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const {
    token: { borderRadius, colorPrimary },
  } = theme.useToken();

  const actionTagColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="text-primary">{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Detail",
      key: "detail",
      render: (_, record) => (
        <Space size="middle">
          <a className="text-primary">{record.name}'s detail</a>
        </Space>
      ),
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, key) => (
        <Space size="middle" className="flex justify-center" >
          <EditOutlined
            style={{ fontSize: "14px" }}
            onClick={() => onclickEdit(key)}
            data-testid='EditOutlinedIcon-test'
          />
        </Space>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <DeleteOutlined
            style={{ color: "#ee4b4f", fontSize: "14px" }}
            onClick={() => onclickDelete(key)}
            data-testid='DeleteOutlinedIcon-test'
          />
        </Space>
      ),
    },
  ];

  const onclickEdit = (key) => {
    //console.log(key);
  };

  const onclickDelete = (key) => {
    // console.log(key);
  };
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  // const onSubmit = (e) => {
  //   //console.log("values", e);
  //   setEditProfile(false);
  //   notification.success({
  //     message: "Profile Updated ",
  //     description: "Your Profile has been updated successfully",
  //     duration: 3,
  //   });
  // };
  // const onChangePassword = (e) => {
  //   console.log("values", e);
  //   setChangePassword(false);
  //   notification.success({
  //     message: "Passoword Changed Successfully",
  //     description: "Your passoword has changed successfully",
  //     duration: 3,
  //   });
  //   formRef.current?.resetFields();
  // };

  const handleClick = () => {
    navigate("/");
  };

  const onChange = (key) => {
    // console.log(key);
  };


  return (
    <>
      <Card className="my-profile-card shadow-md pb-4 rounded" data-testid="profile-section-card">
        <div
          class="my_bg rounded gredientEffect"
        // style={{
        //   backgroundImage: `linear-gradient(to right,${colorPrimary},#6565652b)`,
        // }}
        >
          <div id="pinkblock" className="shadow-md">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76/post"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              data-testid="upload-comp"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
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
                  width: "100%",
                  height: "100%",
                }}
                src={previewImage}
                data-testid='modal-img-data-id'
              />
            </Modal>
          </div>
        </div>
        <div className="mt-5 pt-5 pl-md-5 ml-5 pr-5 mr-5">
          <div className="fs-18 text-bolder" data-testid="name-profile">Amanda Smith</div>
          <div className="fs-14 text-black-light" data-testid="email-profile">amandasmith@gmail.com</div>
        </div>

        <div className="mt-4 pl-md-5 pr-5 ml-5 mr-5">
          <Tabs defaultActiveKey="1" items={profileTabsitems} onChange={onChange} />
        </div>

        <div className="mt-4 pl-md-5 pr-5 ml-5 mr-5 profile-my-cards">
          <ActionTagTable
            heading="Action And Permission"
            dataSource={actionTagData}
            columns={actionTagColumns}
          />
        </div>

        <div className="mt-4 pl-md-5 pr-5 ml-5 profile-my-cards mr-5">
          <Row gutter={16}>
            <Col md={12} sm={24} className="w-100">
              <Card bordered={false} className="shadow-md" data-testid="statistic-card-1">
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"

                />
              </Card>
            </Col>
            <Col md={12} sm={24} className="w-100">
              <Card bordered={false} data-testid="statistic-card-2">
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"

                />
              </Card>
            </Col>
          </Row>
        </div>

        <div className="mt-4 pl-md-5 pr-5 ml-5 mr-5 profile-my-cards">
          <Row gutter={24}>
            {profileImgCard.map((imgData) => (
              <Col sm={24} md={12} lg={6} key={imgData.key} className="w-100">
                <Card
                  className="mt-5"
                  hoverable
                  // bordered={false}
                  cover={
                    <img
                      alt={imgData.title}
                      src={imgData.imgSrc}
                      style={{ borderRadius: borderRadius }}
                    />
                  }
                >
                  <div className="text-black-light" data-testid={`name-${imgData.key}`}>Project #{imgData.key}</div>
                  <div className="mt-1 text-bolder fs-18" data-testid={`title-${imgData.key}`}>
                    {" "}
                    {imgData.title}{" "}
                  </div>
                  <div className="mt-1 text-light text-black-light" data-testid={`description-${imgData.key}`}>
                    {imgData.description}{" "}
                  </div>
                  <Rate
                    disabled
                    defaultValue={imgData.rating}
                    className="mt-2 fs-18"
                    data-testid={`rate-${imgData.key}`}
                  />
                  <Button type="primary" className="mt-2" onClick={handleClick} data-testid={`view-dashboard-${imgData.key}`}>
                    View Dashboard
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Card>

      {/* <Modal
        title="Edit Profile"
        centered
        open={EditProfile}
        onOk={onSubmit}
        onCancel={() => setEditProfile(false)}
        data-testid="edit-modal"
      >
        <div className="mt-3 mb-3">
          <Form form={form} layout="vertical" onFinish={onSubmit}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Enter Full Name" data-testid="edit-form-fullname" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input type="email" placeholder="Enter Email" data-testid="edit-form-email" />
            </Form.Item>
          </Form>
        </div>
      </Modal> */}

      {/* <Modal
        title="Change Password"
        centered
        open={changePassword}
        onOk={onChangePassword}
        onCancel={() => setChangePassword(false)}
        closable
        data-testid="password-change-modal"
      >
        <div className="mt-3 mb-3">
          <Form
            form={form}
            layout="vertical"
            onFinish={onChangePassword}
            ref={formRef}
          >
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Old Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Old Password"
                data-testid="password-old"
              />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input new password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter New Password"
                data-testid="password-new"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Enter Confirm Password" data-testid="password-conf" />
            </Form.Item>
          </Form>
        </div>
      </Modal> */}
    </>
  );
};

export default Profile;
