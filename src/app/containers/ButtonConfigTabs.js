import React from "react";
import { Tabs, Switch } from "antd";
import {
  Row,
  Col,
  TabsStyled,
  Button,
  StyledSwitch,
  Box,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { syncBackground } from "../../features/HoverButtonBackgroundSlice";
import { syncBorder } from "../../features/HoverButtonBorderSlice";
import {
  setEnableHover,
  syncDefault,
} from "../../features/HoverButtonDefaultSlice";
import { syncShadow } from "../../features/HoverButtonShadowSlice";

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
  const defaultState = useSelector((state) => state.present.hoverButtonDefault);
  const dispatch = useDispatch();
  const sync = () => {
    dispatch(syncDefault());
    dispatch(syncBorder());
    dispatch(syncBackground());
    dispatch(syncShadow());
  };
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
        <Row alignItems="center" mb="10px">
          <Col
            width={[1, 1, 1 / 2, 50 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", 0, 0]}
          >
            <Button onClick={sync}>Sync with Default State</Button>
          </Col>
          <Col
            width={[1, 1, 1 / 2, 50 / 100]}
            display="flex"
            alignItems="center"
            my={["10px", "10px", "10px", "10px"]}
            justifyContent="space-between"
          >
            <Col>Enable Hover</Col>
            <Col pr="15px">
              <StyledSwitch>
                <Switch
                  checked={defaultState.enableHover}
                  onChange={() => dispatch(setEnableHover())}
                  aria-label="Toggle button hover"
                ></Switch>
              </StyledSwitch>
            </Col>
          </Col>
        </Row>
        <Box disabled={!defaultState.enableHover}>
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
        </Box>
      </TabPane>
    </TabsStyled>
  );
};

export default ButtonConfigTabs;
