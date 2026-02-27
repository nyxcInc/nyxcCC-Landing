"use client";
import type { NextPage } from "next";
import { useRef } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export type Header= {
  className?: string;
};

type HeaderProps = {
  className?: string;
};



const Navigate: NextPage<HeaderProps> = ({ className = "" }) => {


  const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


const onAboutButtonTextClick = () => {
  const element = document.getElementById("company-description");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

const onSupporterButtonTextClick = () => {
   const element = document.getElementById("partner-logos");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

const onLendingButtonTextClick = () => {
  const element = document.getElementById("loan-qualification");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

const onImpactButtonTextClick = () => {
  const element = document.getElementById("community-development");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

  return (
    <section className={[styles.headerNav, className].join(" ")}>
      <section className={styles.headerNav}>
        <div id="back-to-top" className={styles.glowLogo}></div>
        <div className={styles.rectangle} />
        <div className={styles.navBar}>
          <div className={styles.navCenter}>
            <div className={styles.commandBar} />
            <div className={styles.commandBar} />
            <div className={styles.commandBar2} />
          </div>
          <div className={styles.commandsWrapper}>
            <nav className={styles.commands}>
              <div className={styles.commandButtons}>
                <h2
                  className={styles.aboutButton}
                  onClick={onAboutButtonTextClick}
                >{`About`}</h2>
              </div>
              <div className={styles.commandButtons1}>
                <h2
                  className={styles.supportersButton}
                  onClick={onSupporterButtonTextClick}
                >{`Supporters`}</h2>
              </div>
              <div className={styles.commandButtons2}>
                <h2 
                  className={styles.lendingButton}
                  onClick={onLendingButtonTextClick}
                >{`Lending`}</h2>
              </div>
              <div className={styles.commandButtons3}>
                <h2
                  className={styles.impactButton}
                  onClick={onImpactButtonTextClick}
                >{`Impact`}</h2>
              </div>
            </nav>
          </div>
        </div>
        <div className={styles.glowLogo}>
        <Image
        src="/nyxccc-img/Glow Logo.png"
        alt="nyxcLogo" 
        className={styles.glowLogo}
        loading="lazy"
        width={177}
        height={31.5}
         />
         </div>
        <div className={styles.getStartedWrapper}>
          <div className={styles.getStartedButton}>
          <Image
            src="/nyxccc-img/get-started.png"
            alt="Beta access button"
            className={styles.getStartedButton}
            width={140}
            height={40}
            onClick={() => openExternalLink("https://calendly.com/brittany-salas/nyxc-community-capital")}
          />
        </div>
        </div>
      </section>
    </section>
  );
};

export default Navigate
