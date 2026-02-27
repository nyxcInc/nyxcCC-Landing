import type { NextPage } from "next";
import Image from "next/image";
import styles from "./development.module.css";

export type DevelopmentType = {
  className?: string;
};

const Development: NextPage<DevelopmentType> = ({ className = "" }) => {
  return (
    <section className={[styles.developmentContainer, className].join(" ")}>
      <section id="community-development" className={[styles.developmentContainer, 
  className].join(" ")}></section>
         {/* Title */}
          <div className={styles.developmentTitle}>
            Community Development and Resilience
          </div>

        <div className={styles.trayRow}>
          <div className={styles.trayLeft}>  {/* Community Box Left PNG as background */}
            <Image
              className={styles.communityBoxLeft}
              width={420}
              height={500}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Community Box Left.png"
            />
            {/* Text content positioned over the background */}
            <div className={styles.trayBoxLeft}>
              Through targeted educational programs and technical assistance,
              nyxc enables businesses to enter environmental markets,
              develop climate-smart business practices,
              and create opportunities for ecosystem restoration and carbon removal.
            </div>
          </div>
          <div className={styles.trayLeft}>
            {/* Community Box Right PNG as background */}
            <Image
              className={styles.communityBoxRight}
              width={420}
              height={500}
              sizes="100vw"
              alt=""
              src="/nyxccc-img/Community Box Right.png"
            />
            {/* Text content positioned over the background */}
            <div className={styles.trayBoxRight}>
              nyxc builds community-level economic development by creating sustainable job opportunities, 
              in addition to contributing industry leading research. Research falls within the scope of 
              finance and technology for climate resilience, public infrastructure, and democratic governance. 
            </div>
          </div>
        </div>
    </section>
  );
};

export default Development;