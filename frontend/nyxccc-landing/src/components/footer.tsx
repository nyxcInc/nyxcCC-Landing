"use client";
import type { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./footer.module.css";

type FooterProps = {
    className?: string;
};

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Footer: NextPage<FooterProps> = ({ className = "" }) => {

const onLogoClick = () => {
  const element = document.getElementById("back-to-top");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};


useEffect(() => {
  const learnSection = document.querySelector('[class*="learn"]');
  const logo = document.querySelector(`.${styles.nyxcLogoWhite11}`);
  
  if (!learnSection || !logo) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          logo.classList.add(styles.visible);
        } else {
          logo.classList.remove(styles.visible);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(learnSection);
  
  return () => observer.disconnect();
}, []);

  return (
    <div className={[styles.footer1, className].join(" ")}>
      <section className={styles.footer2}>
        <div className={styles.footerColumn}>
          <div className={styles.footerNav}>
            <Image
              className={styles.nyxcLogoWhite11}
              loading="lazy"
              width={173.2}
              height={41}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/nyxc logo white.svg"
              onClick={onLogoClick}
              style={{cursor:"pointer"}}            
            />
     
            <div className={styles.contactBlock}>
              <div className={styles.contactWrapper}>
                <div className={styles.newsletter}>
                  <a
                    href="https://www.linkedin.com/company/nyxcc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contact}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={styles.divider} />
            </div>

            <div className={styles.contactBlock}>
              <div className={styles.contactWrapper}>
                <div className={styles.newsletter}>
                  <a
                    href="https://nyxc.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contact}
                  >
                    Substack
                  </a>
                </div>
              </div>
              <div className={styles.divider} />
            </div>

            <div className={styles.supportBlock}>
              <div className={styles.supportnyxcnetWrapper}>
                <div className={styles.supportnyxcnet}>support@nyxc.net</div>
              </div>
              <div className={styles.divider} />
            </div>

            <div className={styles.toTopBlock}>
              <div className={styles.toTopWrapper}>
                <div 
                  className={styles.toTop}
                  onClick={onLogoClick}
                  style={{ cursor: "pointer" }}
                >
                  Intro
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className={styles.div}> © 2026 nyxc Community Capital 501(c)(3)</div>
    </div>
  );
};

export default Footer;
