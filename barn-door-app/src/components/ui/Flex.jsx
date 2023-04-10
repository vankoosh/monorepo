import React, { ReactNode } from "react";

export type FlexProps = {
  children?: ReactNode;
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  align?: "flex-start" | "flex-end" | "center";
  gap?: string;
  width: string;
};

export const Flex = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  gap,
  width,
}: FlexProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
