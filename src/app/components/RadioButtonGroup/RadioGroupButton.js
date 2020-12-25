import React from "react";

import {
  RadioButton,
  RadioGroup,
  RadioInput,
} from "./RadioButtonGroup.elements";

const RadioButtonGroup = ({ values, selected, onChange, width }) => {
  return (
    <RadioGroup mt="4px" width={width}>
      {values.map((value, key) => (
        <RadioButton
          key={key}
          active={selected === value}
          margin="1px"
          fontSize={[null, null, null, "1rem"]}
          padding="0.5rem"
          tabIndex="0"
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
