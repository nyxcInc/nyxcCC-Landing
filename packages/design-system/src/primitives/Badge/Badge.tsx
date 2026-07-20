import type { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

export type BadgeVariant = "accent" | "neutral" | "outline";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Badge({ variant = "neutral", className, ...rest }: BadgeProps) {
  return <span {...rest} className={cx(styles.badge, styles[`variant-${variant}`], className)} />;
}
