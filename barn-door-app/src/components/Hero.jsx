import React from "react";
import styled from "styled-components";

const theme = {
  color: "orange",
};

const styledHeroText = styled.div`
  postition: absolute;
  color: ({theme.color}) => {
    ${theme.color}
  }
  font-size: 5rem;
  font-weight: bold;
`;

export default function Hero() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "4rem",
        left: "0",
        backgroundImage: 'url("barn-door-hero.png")',
      }}
    >
      <styledHeroText>
        <p>MODERNE</p>
        <p>&nbsp;&nbsp;ELEGANTNE</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;NEPREHLIADNUTELNE</p>
      </styledHeroText>
    </div>
  );
}
