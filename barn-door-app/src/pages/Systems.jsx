import SystemCard from "../components/SystemCard";
import { Flex } from "../components/ui/Flex";
import * as Container from "../components/ui/Container";
import { Navbar } from "../components/Navbar";
import React from "react";

const Systems = () => {
  return (
    <>
      <Navbar />
      <Container.Wide height="20vh">
        <Flex direction="column" width="100vw">
          <Flex width={"100vw"}>hello</Flex>
          <Flex direction="column" width="100vw">
            hello
          </Flex>
        </Flex>
      </Container.Wide>
    </>
  );
};

export default Systems;
