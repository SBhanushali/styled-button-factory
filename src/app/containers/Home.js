import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import configure from "../lotties/configure.json";
import generate from "../lotties/generate.json";
import embed from "../assets/embed.svg";
import styledbutton from "../assets/styledbutton.png";
import { Text, Box, Row, Col } from "../components";
import CTAButton from "../components/CTAButton";

const Image = styled.img`
  width: 90%;
`;

const ImgContainer = styled(Box)`
  text-align: center;
`;

const Heading = styled(Text)`
  font-weight: bolder;
  margin: 0 10px;
`;

const SubHeading = styled(Text)`
  color: #84828d;
  font-weight: 400;
  margin: 0 10px;
`;

const Home = () => {
  const configureOptions = {
    loop: true,
    autoplay: true,
    animationData: configure,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const generateOptions = {
    loop: true,
    autoplay: true,
    animationData: generate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Box my="40px" mx="20px">
        <Heading
          fontSize={["3.5rem", "3.5rem", "4rem", "5rem"]}
          textAlign="center"
        >
          Design With Click
        </Heading>
        <SubHeading
          fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
          textAlign="center"
        >
          Effortlessly design buttons with styled-components.
        </SubHeading>
      </Box>
      <Box display="flex" justifyContent="center">
        <CTAButton to="/app">Get Started 🚀</CTAButton>
      </Box>
      <SubHeading textAlign="center">No Signup Required</SubHeading>
      <ImgContainer my={["50px", "50px", "50px", "100px"]}>
        <Image src={styledbutton} alt="" />
      </ImgContainer>
      <Box mx={["1rem", "1rem", "1rem", "2rem"]}>
        <Heading
          fontSize={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]}
          textAlign={["", "", "", "center"]}
        >
          How it works
        </Heading>
        <SubHeading
          fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
          textAlign={["", "", "", "center"]}
        >
          Get started with 3 easy steps.
        </SubHeading>
      </Box>
      <Row mx={["10px", "10px", "10px", "40px"]}>
        <Col width={[1, 1, 1, 1 / 3]} alignSelf="center">
          <Lottie options={configureOptions} height={300} width={300} />
          <Heading
            fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
            textAlign={["", "", "", "center"]}
          >
            Configure
          </Heading>
          <SubHeading fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}>
            Tweak font size, padding, shadow, background, border and hover state
            of button.
          </SubHeading>
        </Col>
        <Col width={[1, 1, 1, 1 / 3]}>
          <Lottie options={generateOptions} height={300} width={300} />
          <Heading
            fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
            textAlign={["", "", "", "center"]}
          >
            Generate
          </Heading>
          <SubHeading fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}>
            Get respective styled-components code for configured button.
          </SubHeading>
        </Col>
        <Col width={[1, 1, 1, 1 / 3]}>
          <ImgContainer>
            <object
              type="image/svg+xml"
              data={embed}
              height="292px"
              width="300px"
            >
              include
            </object>
          </ImgContainer>
          <Box>
            <Heading
              fontSize={["1.2rem", "2rem", "2rem", "2rem"]}
              textAlign={["", "", "", "center"]}
            >
              Embed
            </Heading>
            <SubHeading fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem"]}>
              Import and reuse this Styled Button Component inside your App.
            </SubHeading>
          </Box>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
