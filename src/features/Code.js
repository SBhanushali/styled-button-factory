import React from "react";
import styled from "styled-components";
import { typography } from "styled-system";
import { IoCodeSlash } from "react-icons/io5";
import { IconContainer } from "../app/components";

const CodeIcon = styled(IoCodeSlash)`
  ${typography}
  color: rgba(0, 0, 0, 0.54);
  margin: 10px;
`;

const Code = ({ handleOpenModal }) => {
  return (
    <IconContainer
      tabIndex="0"
      as="button"
      onClick={() => handleOpenModal(true)}
    >
      <CodeIcon fontSize={[24, 24, 24, 36]} />
    </IconContainer>
  );
};

export default Code;
