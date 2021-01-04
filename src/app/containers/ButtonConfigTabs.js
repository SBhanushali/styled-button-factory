import React from "react";
import { Tabs } from "antd";
import { Row, Col, TabsStyled } from "../components/index";

import ButtonBackground from "./ButtonBackground";
import ButtonBorder from "./ButtonBorder";
import ButtonShadow from "./ButtonShadow";
import ButtonDefault from "./ButtonDefault";
import HoverButtonBackground from "./HoverButtonBackground";
import HoverButtonShadow from "./HoverButtonShadow";
import HoverButtonBorder from "./HoverButtonBorder";
import HoverButtonDefault from "./HoverButtonDefault";

const { TabPane } = Tabs;

const ButtonConfigTabs = () => {
  return (
    <TabsStyled
      defaultActiveKey="1"
      style={{ padding: "10px", height: "auto" }}
    >
      <TabPane tab="Default" key="1">
        <ButtonDefault />
        <Row>
          <ButtonShadow />
        </Row>
        <Row>
          <Col
            width={[1, 1, 1 / 2, 55 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "10px"]}
          >
            <ButtonBackground />
          </Col>
          <Col
            width={[1, 1, 1 / 2, 40 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "0"]}
          >
            <ButtonBorder />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Hover" key="2">
        <HoverButtonDefault />
        <Row>
          <HoverButtonShadow />
        </Row>
        <Row>
          <Col
            width={[1, 1, 1 / 2, 55 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "10px"]}
          >
            <HoverButtonBackground />
          </Col>
          <Col
            width={[1, 1, 1 / 2, 40 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "0"]}
          >
            <HoverButtonBorder />
          </Col>
        </Row>
      </TabPane>
    </TabsStyled>
  );
};

export default ButtonConfigTabs;
