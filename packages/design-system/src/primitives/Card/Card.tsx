import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

export type CardPadding = "sm" | "md" | "lg";
export type CardRadius = "sm" | "md" | "xl";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  padding?: CardPadding;
  radius?: CardRadius;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Card({ padding = "md", radius = "md", className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cx(styles.card, styles[`padding-${padding}`], styles[`radius-${radius}`], className)}
    />
  );
}
