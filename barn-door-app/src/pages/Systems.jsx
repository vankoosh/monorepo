import SystemCard from "../components/SystemCard";
import { Flex } from "../ui/Flex";
import * as Container from "../ui/Container";
import { Navbar } from "../components/Navbar";

export default function Systems() {
  return (
    <>
      <Navbar />
      <Container.Wide>
        <Flex direction={"column"}>
          <Flex>
            <SystemCard />
            <SystemCard />
            <SystemCard />
          </Flex>
          <Flex>
            <SystemCard />
            <SystemCard />
            <SystemCard />
          </Flex>
        </Flex>
      </Container.Wide>
    </>
  );
}
