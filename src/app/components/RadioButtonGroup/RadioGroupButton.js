import React from "react";

import {
  RadioButton,
  RadioGroup,
  RadioInput,
} from "./RadioButtonGroup.elements";

const RadioButtonGroup = ({ values, selected, onChange }) => {
  return (
    <RadioGroup height="41px" mt="4px">
      {values.map((value, key) => (
        <RadioButton key={key} active={selected === value} margin="3px">
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
