import type { HTMLAttributes } from "react";
import styles from "./Section.module.css";

export type SectionSpacing = "sm" | "md" | "lg";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: SectionSpacing;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Section({ spacing = "md", className, ...rest }: SectionProps) {
  return <section {...rest} className={cx(styles.section, styles[`spacing-${spacing}`], className)} />;
}
