import styled from "styled-components";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const SelectStyled = styled(AntSelect)`
  width: ${(props) => props.width};
  .ant-select-selector {
    height: 45px !important;
    border: 0 !important;
    outline: 0 !important;
    height: 45px;
    background-color: #f7f7f8 !important;
    border-radius: 5px !important;
    transition: all 0.2s ease-in-out;
    appearance: none;
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

const Select = ({ placeholder, values, action, selected, width }) => {
  return (
    <SelectStyled
      placeholder={placeholder}
      value={selected}
      onChange={action}
      width={width}
    >
      {values.map(({ option, value }) => (
        <Option key={value} value={value}>
          {option}
        </Option>
      ))}
    </SelectStyled>
  );
};

export default Select;
