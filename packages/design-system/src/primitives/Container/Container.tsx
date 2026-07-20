import type { HTMLAttributes } from "react";
import styles from "./Container.module.css";

export type ContainerMaxWidth = "sm" | "md" | "lg" | "xl";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth?: ContainerMaxWidth;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Container({ maxWidth = "lg", className, ...rest }: ContainerProps) {
  return <div {...rest} className={cx(styles.container, styles[`max-${maxWidth}`], className)} />;
}
