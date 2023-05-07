import React from "react";
import AccordionElement from "../../components/Accordion";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "antd";
import "./Uielement.scss";
import NestedAccordion from "../../components/NestedAccordion";
import NotifictionElement from "../../components/Notifaction";
import { SmileFilled } from "@ant-design/icons";
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import StepperForm from "../../components/StepperForm";

const UiElement = () => {
  const { element } = useParams();

  return (
    <div>
      {element === "accordion" ? (
        <>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <AccordionElement
                title="Basic"
                headerOne="This is header 1"
                headerTwo="This is header 2"
                headerThree="This is header 3"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                collapsible={"disabled"}
                action={true}
              />
            </Col>
            <Col xs={24} md={12}>
              <AccordionElement
                title="Accordion"
                headerOne="This is header 1"
                headerTwo="This is header 2"
                headerThree="This is header 3"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                action={true}
              />
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ paddingTop: "20px" }}>
            <Col xs={24} md={12}>
              <NestedAccordion />
            </Col>
            <Col xs={24} md={12}>
              <AccordionElement
                title="Borderless"
                headerOne="This is header 1"
                headerTwo="This is header 2"
                headerThree="This is header 3"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                bordered={false}
                action={true}
              />
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ paddingTop: "20px" }}>
            <Col xs={24} md={12}>
              <AccordionElement
                title="No arrow"
                headerOne="This is header 1"
                headerTwo="This is header 2"
                headerThree="This is header 3"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                showArrow={false}
                action={true}
              />
            </Col>
            <Col xs={24} md={12}>
              <AccordionElement
                title="Custom Pannel"
                headerOne="This is header 1"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                display={"none"}
                action={true}
                bordered={false}
              />
              <AccordionElement
                headerOne="This is header 1"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                display={"none"}
                action={true}
                bordered={false}
              />
              <AccordionElement
                headerOne="This is header 1"
                text="A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                display={"none"}
                action={true}
                bordered={false}
              />
            </Col>
          </Row>
        </>
      ) : element === "notification" ? (
        <>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title={"Basic"}>
                <NotifictionElement
                  text="Open the notification box"
                  description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                  closeControl={false}
                  action={true}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Duration after which the notification box is closed">
                <NotifictionElement
                  text="Open the notification box"
                  description="Duration after which the notification box is closed"
                  duration={2.5}
                  closeControl={false}
                  action={true}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ paddingTop: "20px" }}>
            <Col xs={24} md={12}>
              <Card title={"Custom close button"}>
                <NotifictionElement
                  text="Open the notification box"
                  description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                  closeControl={true}
                  action={true}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Notification with icon">
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  <NotifictionElement
                    text="Success"
                    description="Duration after which the notification box is closed"
                    closeControl={false}
                    backColor="#20c997"
                    action={false}
                    type="success"
                  />
                  <NotifictionElement
                    text="Info"
                    description="Duration after which the notification box is closed"
                    closeControl={false}
                    backColor="#2c99ff"
                    action={false}
                    type="info"
                  />
                  <NotifictionElement
                    text="Warning"
                    description="Duration after which the notification box is closed"
                    closeControl={false}
                    backColor="#fa8b0c"
                    action={false}
                    type="warning"
                  />
                  <NotifictionElement
                    text="Error"
                    description="Duration after which the notification box is closed"
                    closeControl={false}
                    backColor="#f5222d"
                    action={false}
                    type="error"
                  />
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ paddingTop: "20px" }}>
            <Col xs={24} md={12}>
              <Card title={"Notification with custom icon"}>
                <NotifictionElement
                  text="Open the notification box"
                  description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                  icon={<SmileFilled />}
                  action={true}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Notification with custom Style">
                <NotifictionElement
                  text="Open the notification box"
                  description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                  style={{
                    width: 600,
                  }}
                  action={true}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[24, 24]} style={{ paddingTop: "20px" }}>
            <Col xs={24} md={12}>
              <Card title={"Notification with placement"}>
                <div className="placement-Notification">
                  <NotifictionElement
                    text="top Left"
                    description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                    placement="topLeft"
                    btnIcon={<RadiusUpleftOutlined />}
                    action={true}
                  />
                  <NotifictionElement
                    text="top Right"
                    description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                    placement="topRight"
                    btnIcon={<RadiusUprightOutlined />}
                    action={true}
                  />
                </div>
                <div className="placement-Notification-2">
                  <NotifictionElement
                    text="bottom Left"
                    description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                    placement="bottomLeft"
                    btnIcon={<RadiusBottomleftOutlined />}
                    action={true}
                  />
                  <NotifictionElement
                    text="bottom Right"
                    description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
                    placement="bottomRight"
                    btnIcon={<RadiusBottomrightOutlined />}
                    action={true}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </>
      ) : element === "stepperform" ? (
        <>
          <Card>
            <StepperForm />
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default UiElement;
