import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Box, Row, Text } from ".";

const FooterContainer = styled(Box)`
  background: #f7f7f8;
`;

const GetInTouch = styled.a`
  font-size: 1rem;
  color: #ffffff;
  padding: 10px 15px;
  background: #fdbb2c;
  box-shadow: 0px 0px 0px 0px #ffffff;
  border: solid #ffffff 1px;
  border-radius: 5px;
  &:hover {
    background: #ef8d23;
    color: #ffffff;
    border-radius: 5px;
  }
`;

const India = styled.span`
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
    <FooterContainer mt="40px" pt="10px">
      <Text
        fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}
        textAlign="center"
      >
        I'd love to hear any feedback/suggestions
      </Text>
      <Box display="flex" justifyContent="center" alignItems="center" my="10px">
        <GetInTouch
          href="mailto:shivam.n.bhanushali@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </GetInTouch>
      </Box>

      <Row alignItems="center" justifyContent="center" my="20px">
        <Text fontSize="1rem">
          Made in <India>🇮🇳</India> by Shivam Bhanushali
        </Text>
      </Row>
      <Row justifyContent="center">
        <Link
          href="https://www.linkedin.com/in/shivam-bhanushali/"
          target="_blank"
          rel="noopener noreferrer"
          alt="linkedin/shivam-bhanushali"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/Shivbhanushali"
          target="_blank"
          rel="noopener noreferrer"
          alt="twitter/Shivbhanushali"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://github.com/SBhanushali"
          target="_blank"
          rel="noopener noreferrer"
          alt="github/SBhanushali"
        >
          <FaGithub />
        </Link>
        <Link
          href="mailto:shivam.n.bhanushali@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </Link>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
