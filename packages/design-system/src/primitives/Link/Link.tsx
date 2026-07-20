import type { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";

export type LinkSize = "sm" | "md";

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
  href: string;
  size?: LinkSize;
  className?: string;
  /** Adds target="_blank" rel="noopener noreferrer". Defaults to true when href starts with "http". */
  external?: boolean;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Link({ href, size = "md", className, external, ...rest }: LinkProps) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <a
      {...rest}
      href={href}
      className={cx(styles.link, styles[`size-${size}`], className)}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    />
  );
}
