import styled from "styled-components";
import { Flex } from "./ui/Flex";

const styledContactCard = styled.div`
  width: 30vw;
  height: 30vw;
  background-color: grey;
`;

export default function Contact() {
  return (
    <Flex justifyContent={"space-around"}>
      <styledContactCard>
        <p>Telefon:</p>
      </styledContactCard>
      <styledContactCard>
        <p>Adresa:</p>
      </styledContactCard>
    </Flex>
  );
}
