import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Header.module.css";

export type HeaderNavItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export type HeaderProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  /** Logo/mark rendered on the left. App-supplied — different logo assets/sizes per app. */
  logo: ReactNode;
  /**
   * Nav entries. Intentionally just {label, href?, onClick?} — this shell
   * does not know whether navigation means an in-page scroll (single-page
   * marketing sites) or a route change (multi-route apps). Each consumer
   * supplies its own handlers.
   */
  navItems?: HeaderNavItem[];
  /** Rendered on the right, e.g. a <Button> CTA. App-supplied so the shell has no opinion on CTA copy/destination. */
  cta?: ReactNode;
};

function cx(...classNames: Array<string | undefined | false>) {
  return classNames.filter(Boolean).join(" ");
}

export function Header({ logo, navItems = [], cta, className, ...rest }: HeaderProps) {
  return (
    <header {...rest} className={cx(styles.header, className)}>
      <div className={styles.logo}>{logo}</div>
      {navItems.length > 0 && (
        <nav className={styles.nav}>
          {navItems.map((item) =>
            item.href ? (
              <a key={item.label} href={item.href} className={styles.navItem}>
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className={styles.navItem}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      )}
      {cta && <div className={styles.cta}>{cta}</div>}
    </header>
  );
}
