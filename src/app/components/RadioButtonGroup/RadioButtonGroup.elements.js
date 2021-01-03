import styled, { css } from "styled-components";
import { space, layout, typography } from "styled-system";

export const RadioGroup = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: bolder;
  background: #fdbb2c;
  border-radius: 4px;
`;

export const RadioButton = styled.label`
  ${({ active }) => active && activeState};
  text-align: center;
  ${typography};
  ${space}
  &:focus {
    outline: none;
    background: #fdbb2c;
    color: #000000;
    font-weight: bolder;
    border-radius: 4px;
  }
  &:hover {
    color: #000000;
    font-weight: bolder;
    border-radius: 4px;
  }
`;
