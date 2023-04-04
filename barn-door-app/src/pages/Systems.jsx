import SystemCard from "../components/SystemCard";
import { Flex } from "../components/ui/Flex";
import * as Container from "../components/ui/Container";
import { Navbar } from "../components/Navbar";

const Systems = () => {
  return (
    <>
      <Navbar />
      <Container.Wide>
        <Flex direction="column" gap="2rem">
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
};

export default Systems;
