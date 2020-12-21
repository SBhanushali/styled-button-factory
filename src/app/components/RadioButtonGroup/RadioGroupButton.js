import React from "react";

import {
  RadioButton,
  RadioGroup,
  RadioInput,
  Label,
  Wrapper,
} from "./RadioButtonGroup.elements";

const RadioButtonGroup = ({ values, selected, onChange }) => {
  return (
    <RadioGroup width="max-content" height="54px">
      {values.map((value, key) => (
        <RadioButton
          key={key}
          active={selected === value}
          height="50px"
          margin="3px"
        >
          <RadioInput
            type="radio"
            value={value}
            checked={selected === value}
            onChange={onChange}
            hidden
          />
          {value}
        </RadioButton>
      ))}
    </RadioGroup>
  );
};

export default RadioButtonGroup;
