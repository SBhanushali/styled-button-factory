import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const TabsStyled = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-around;
  }

  .ant-tabs-tab {
    font-size: 1rem;
  }

  .ant-tabs-tab-btn {
    &:hover {
      color: #fdbb2c;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fdbb2c;
  }
  .ant-tabs-ink-bar {
    background: #fdbb2c;
  }
`;

function callback(key) {
  console.log(key);
}

const ButtonConfigTabs = () => {
  return (
    <TabsStyled defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Default" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Hover" key="2">
        Content of Tab Pane 2
      </TabPane>
    </TabsStyled>
  );
};

export default ButtonConfigTabs;
