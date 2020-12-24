import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import { MdContentCopy } from "react-icons/md";
import { IconContainer } from "../../app/components";

const CopyIcon = styled(MdContentCopy)`
  ${typography};
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Copy = () => {
  return (
    <IconContainer shadow>
      <CopyIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Copy;
