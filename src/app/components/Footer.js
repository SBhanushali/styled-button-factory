import React from "react";
import styled from "styled-components";
import india from "../assets/india.png";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Box, Row, Text } from ".";

const FooterContainer = styled(Box)`
  background: #f7f7f8;
`;

const GetInTouch = styled.a`
  font-size: 24px;
  color: #ffffff;
  padding: 10px 15px;
  background: #fdbb2c;
  box-shadow: 0px 0px 0px 0px #ffffff;
  border: solid #ffffff 1px;
  border-radius: 5px;
  &:hover {
    background: #fdbb2d;
    color: #ffffff;
    border-radius: 5px;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: 0 5px;
  display: inline;
`;

const Link = styled.a`
  margin: 0 10px;
  font-size: 24px;
  color: #a0aec0;
  &:hover {
    color: #fbdd2c;
  }
`;

const Footer = () => {
  return (
    <FooterContainer mt="40px">
      <Box display="flex" justifyContent="center" alignItems="center" pt="20px">
        <GetInTouch href="mailto:shivam.n.bhanushali@gmail.com">
          Get in touch
        </GetInTouch>
      </Box>

      <Row alignItems="center" justifyContent="center" my="20px">
        <Text fontSize="24px">
          Made in <Icon src={india} /> by Shivam Bhanushali
        </Text>
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
    </FooterContainer>
  );
};

export default Footer;
