import React from "react";
import { Card } from "antd";
import "./Accordion.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;

const AccordionElement = ({
  title,
  headerOne,
  headerTwo,
  headerThree,
  collapsible,
  text,
  accordion,
  bordered,
  showArrow,
  display,
}) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Card title={title} data-testid="accordion-card">
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          accordion={accordion}
          bordered={bordered}
        >
          <Panel header={headerOne} key="1" showArrow={showArrow}>
            <p data-testid="first-pannel">{text}</p>
          </Panel>
          <Panel
            header={headerTwo}
            key="2"
            style={{ display: `${display || "visible"}` }}
            showArrow={showArrow}
          >
            <p data-testid="second-pannel">{text}</p>
          </Panel>
          <Panel
            header={headerThree}
            key="3"
            collapsible={collapsible}
            showArrow={showArrow}
            style={{ display: `${display || "visible"}` }}
          >
            <p data-testid="third-pannel">{text}</p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default AccordionElement;
