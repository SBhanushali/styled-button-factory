import styled, { css } from "styled-components";
import { space, layout, typography } from "styled-system";

export const RadioGroup = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f7f7f8;
  width: auto;
  ${space}
  ${layout}
`;

export const RadioInput = styled.input`
  display: none;
  &[type="radio"] {
  }
`;

const activeState = css`
  color: #fdbb2c;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border-radius: 4px;
`;

export const RadioButton = styled.label`
  ${({ active }) => active && activeState};
  text-align: center;
  ${typography};
  ${space}
  &:focus {
    outline: none;
    background: #ffffff;
    color: #fdbb2c;
    font-weight: 900;
    border-radius: 4px;
  }
  &:hover {
    color: #fdbb2c;
    font-weight: 900;
    border-radius: 4px;
  }
`;
