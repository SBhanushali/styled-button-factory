import styled from "styled-components";
import { layout, space } from "styled-system";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  ${layout}
  ${space}
  /* width: 150px;
  max-width: 150px; */
  padding: 4px 12px;
  border: 1px solid #bfc9d9;
  border-radius: 4px;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 24px;
      height: 24px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;

const ColorPicker = (props) => {
  return (
    <Container>
      <input type="color" {...props} />
      <input type="text" {...props} />
    </Container>
  );
};

export default ColorPicker;
