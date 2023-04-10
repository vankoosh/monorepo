import React from "react";
import styled from "styled-components";

export default function SystemCard({ children, src, alt, id }) {
  return (
    <div style={{ width: "10vw", height: "10vw", backgroundColor: "grey" }}>
      <h1>Image</h1>
      <img src={src} alt={alt} id={id} />
    </div>
  );
}
