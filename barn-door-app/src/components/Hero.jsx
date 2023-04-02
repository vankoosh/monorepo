import styled from "styled-components";

const theme = {
  color: "orange",
};

const styledHeroBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 4rem;
  left: 0;
  background-image: url("barn-door-hero.png");
`;

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
    <styledHeroBackground>
      <styledHeroText>
        <p>MODERNE</p>
        <p>&nbsp;&nbsp;ELEGANTNE</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;NEPREHLIADNUTELNE</p>
      </styledHeroText>
    </styledHeroBackground>
  );
}
