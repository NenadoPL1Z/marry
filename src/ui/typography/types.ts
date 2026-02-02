import type { ReactNode } from "react";

type Font = "SNPro" | "GREATVibes";
type Size = "small" | "middle" | "large";

export type TypographyProps = {
  className?: string;
  font?: Font;
  fontSize?: Size;
  children: ReactNode;
};
