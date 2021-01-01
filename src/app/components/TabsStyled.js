import styled from "styled-components";
import { Tabs } from "antd";

const TabsStyled = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-around;
  }

  .ant-tabs-nav-wrap {
    line-height: 1;
  }

  .ant-tabs-tab {
    font-size: 1rem;
    padding-top: 0%;
    padding-bottom: 12px;
    &:hover {
      color: #fdbb2c;
    }
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

export default TabsStyled;
