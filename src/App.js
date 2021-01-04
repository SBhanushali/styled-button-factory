import React, { useState } from "react";
import GlobalStyles from "./app/globalStyles";
import "antd/dist/antd.css";
import { Navbar, Row, Col, Box } from "./app/components";
import Reset from "./features/Reset";
import Code from "./features/Code";
import Redo from "./features/Redo";
import Undo from "./features/Undo";
import ButtonConfigTabs from "./app/containers/ButtonConfigTabs";
import CanvasBackground from "./app/containers/CanvasBackground";
import Playground from "./app/containers/Playground";
import ShowCodeModal from "./app/containers/ShowCodeModal";

function App() {
  const [isOpen, toggle] = useState(false);

  const handleOpenModal = () => {
    toggle((prev) => !prev);
  };
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ShowCodeModal isOpen={isOpen} handleOpenModal={handleOpenModal} />
      <Row m="21px">
        <Col width={[1, 1, 1, 4 / 10]}>
          <Row
            flexDirection="column"
            justifyContent="space-between"
            height={["45vh", "45vh", "45vh", "86vh"]}
          >
            <Col width={[1]}>
              <Playground />
            </Col>
            <Col width={[1]}>
              <Row>
                <Col width="100%" alignSelf="center">
                  <Box
                    width="auto"
                    display="grid"
                    gridGap="1rem"
                    gridTemplateColumns="repeat(1, 1fr 1fr 1fr 1fr)"
                  >
                    <Undo />
                    <Redo />
                    <Reset />
                    <Code handleOpenModal={handleOpenModal} />
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col width={[1]} display={["none", "none", "none", "block"]}>
              <CanvasBackground />
            </Col>
          </Row>
        </Col>
        <Col
          width={[1, 1, 1, 55 / 100]}
          height={["45vh", "45vh", "45vh", "auto"]}
          mt={["20px", "20px", 0, 0]}
          overflowY={["auto", "auto", "auto", "inherit"]}
        >
          <Row
            display={["block", "block", "block", "none"]}
            mb={["20px", "20px", null, null]}
          >
            <CanvasBackground />
          </Row>
          <Box boundary>
            <ButtonConfigTabs />
          </Box>
        </Col>
      </Row>
    </>
  );
}

export default App;
