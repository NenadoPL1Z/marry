import styles from "./typography.module.css";
import type { TypographyProps } from "./types";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const Typography = ({ className, children }: TypographyProps) => {
  return <p className={cn(className)}>{children}</p>;
};
