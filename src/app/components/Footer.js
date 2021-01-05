import React from "react";
import styled from "styled-components";
import india from "../assets/india.png";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Box, Row } from ".";

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: 0 5px;
  display: inline;
`;

const Link = styled.a`
  margin: 0 10px;
  color: #a0aec0;
  &:hover {
    color: #fbdd2c;
  }
`;

const Footer = () => {
  return (
    <Box py="20px">
      <Row alignItems="center" justifyContent="center">
        Made in <Icon src={india} /> by Shivam Bhanushali
      </Row>
      <Row justifyContent="center">
        <Link href="https://www.linkedin.com/in/shivam-bhanushali/">
          <FaLinkedin />
        </Link>
        <Link href="https://twitter.com/Shivbhanushali">
          <FaTwitter />
        </Link>
        <Link href="https://github.com/SBhanushali">
          <FaGithub />
        </Link>
        <Link href="mailto:shivam.n.bhanushali@gmail.com">
          <FaEnvelope />
        </Link>
      </Row>
    </Box>
  );
};

export default Footer;
