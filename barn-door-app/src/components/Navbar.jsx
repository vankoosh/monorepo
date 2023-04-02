import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Systems from "../pages/Systems";
import { Flex } from "../ui/Flex";

export const Navbar = ({}) => {
  return (
    <>
      <Flex direction="column">
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
      </Flex>
      <Routes>
        <Route to="../" element={<Landing />} />
        <Route to="../systems" element={<Systems />} />
      </Routes>
    </>
  );
};
