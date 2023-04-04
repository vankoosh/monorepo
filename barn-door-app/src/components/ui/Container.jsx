import { Flex } from "./Flex";
import styled from "styled-components";

const styledFullDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: auto;
  position: relative;
  outline: 1px solid black;
  background-color: yellow;
`;

const styledWideDiv = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 80vw;
  height: auto;
  outline: 1px solid black;
  background-color: yellow;
`;

export const Full = ({ children }) => {
  return (
    <styledFullDiv>
      <Flex direction="column" justifyContent="flex-start">
        {children}
      </Flex>
    </styledFullDiv>
  );
};

export const Wide = ({ children }) => {
  return (
    <styledWideDiv>
      <Flex direction="column" justifyContent="flex-start">
        {children}
      </Flex>
    </styledWideDiv>
  );
};
