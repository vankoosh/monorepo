import styled from "styled-components";

const styledSystemCard = styled.div`
  width: 10vw;
  height: 10vw;
  outline: 1px solid black;
  background-color: grey;
`;

export default function SystemCard({ children, src, alt, id }) {
  return (
    <styledSystemCard>
      <h1>Image</h1>
      <img src={src} alt={alt} id={id} />
    </styledSystemCard>
  );
}
