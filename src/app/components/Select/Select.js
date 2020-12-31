import styled from "styled-components";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const SelectStyled = styled(AntSelect)`
  width: 100%;
  .ant-select-selector {
    height: 45px !important;
    border: 0 !important;
    outline: 0 !important;
    height: 45px;
    background-color: #f1f3f7 !important;
    border-radius: 5px !important;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff;
    transition: all 0.2s ease-in-out;
    appearance: none;
    &:focus-within {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff !important;
    }
  }
  .ant-select-selection-search-input {
    height: 45px !important;
    border: 0;
    outline: none !important;
  }
  .ant-select-selection-placeholder {
    align-self: center;
  }
  .ant-select-selection-item {
    align-self: center;
  }
`;

const Select = ({ placeholder, values, action, selected }) => {
  return (
    <SelectStyled placeholder={placeholder} value={selected} onChange={action}>
      {values.map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </SelectStyled>
  );
};

export default Select;
