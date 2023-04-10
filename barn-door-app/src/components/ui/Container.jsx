import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  height: string;
};

export const Full = ({ children, height }: ContainerProps) => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100vw",
        height: height,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export const Wide = ({ children, height }: ContainerProps) => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        position: "relative",
        width: "80vw",
        height: height,
      }}
    >
      {children}
    </div>
  );
};
