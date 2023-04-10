import styled from "styled-components";
import Flex from "./ui/Flex";
import React from "react";

const styledContactCard = styled.div`
  width: 30vw;
  height: 30vw;
  background-color: grey;
`;

export default function Contact() {
  return (
    <Flex justify="space-around" width="80vw">
      <div>
        <p>Telefon:</p>
      </div>
      <div>
        <p>Adresa:</p>
      </div>
    </Flex>
  );
}
