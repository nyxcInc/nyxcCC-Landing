import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Footer.module.css";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterLinkColumn = {
  title?: string;
  links: FooterLink[];
};

export type FooterProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  logo: ReactNode;
  linkColumns?: FooterLinkColumn[];
  legalText?: ReactNode;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Footer({ logo, linkColumns = [], legalText, className, ...rest }: FooterProps) {
  return (
    <footer {...rest} className={cx(styles.footer, className)}>
      <div className={styles.top}>
        <div className={styles.logo}>{logo}</div>
        {linkColumns.length > 0 && (
          <div className={styles.columns}>
            {linkColumns.map((column) => (
              <div key={column.title ?? column.links[0]?.label} className={styles.column}>
                {column.title && <div className={styles.columnTitle}>{column.title}</div>}
                {column.links.map((link) => {
                  const isExternal = link.external ?? link.href.startsWith("http");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
      {legalText && <div className={styles.legal}>{legalText}</div>}
    </footer>
  );
}
