import Image from 'next/image';
import styles from './tagline.module.css';
import type { NextPage } from "next";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: object) => void;
    };
  }
}

  const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

type TaglineProps = {
  className?: string;
};



const Tagline: NextPage<TaglineProps> = ({ className = "" }) => {
  return (
    <section className={[styles.tagline, className].join(" ")}>
      {/* Placeholder image below nav bar */}
      <div className={styles.planetGlbPlaceholderWrapper}>
        <Image
          className={styles.planetGlbPlaceholder}
          loading="lazy"
          width={600}
          height={600}
          sizes="100vw"
          alt="Planet"
          src="/nyxccc-img/planet-glb-placeholder@2x.png"
        />
      </div>
   
      {/* Company name and tagline below placeholder image */}
      <section className={styles.nameTaglineWrapper}>
        <div className={styles.nameTagline}>
          <div className={styles.nameAndTag}>
            <h1 className={styles.companyName}>nyxc</h1>
            <div className={styles.tagLine}>
              A non-profit loan fund for small businesses 
              that build resilient communities.
            </div>
          </div>
          <Image
            src="/nyxccc-img/get-started.png"
            alt="Beta access button"
            width={120}
            height={40}
            onClick={() => openExternalLink("https://calendly.com/brittany-salas/nyxc-community-capital")}
          />
 
        </div>
       
      </section>
    </section>
  );
};

export default Tagline;
