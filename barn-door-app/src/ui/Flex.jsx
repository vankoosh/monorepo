import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => {
    if (justifyContent === "flex-start") {
      return "flex-start";
    }
    if (justifyContent === "center") {
      return "center";
    }
    if (justifyContent === "flex-end") {
      return "flex-end";
    }
    if (justifyContent === "space-between") {
      return "space-between";
    }
    if (justifyContent === "space-around") {
      return "space-around";
    }
  }}
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
    
`;

export const Flex = ({ children, direction, justifyContent }) => {
  return (
    <FlexDiv direction={direction} justifyContent={justifyContent}>
      {children}
    </FlexDiv>
  );
};