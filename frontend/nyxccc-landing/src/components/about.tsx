import type { NextPage } from "next";
import Image from "next/image";
import styles from "./about.module.css";





const About: NextPage = () => {
  return (
    <div id="company-description" className={styles.about}>
      <section className={styles.pronouncedNixSeeTheNameCWrapper}>
        <div className={styles.pronouncedNixSeeTheContainer}>
          <span>{`Pronounced `}</span>
          <span>{`nix-see, `}</span>
          <span>the name comes from Nyx</span>
          <span>{`, `}</span>
          <span>{`the primordial Greek goddess of night, daughter of Chaos and mother of Aether, 
          the brightness in the sky. `}</span>
        </div>
      </section>
      <div className={styles.nyxcIsDedicated}>
          <span>{` nyxc is dedicated to transforming economic opportunities in underserved communities 
          by addressing critical barriers to financial inclusion and climate resilience.`}</span>
      </div>
      <section className={styles.environmentalMarketsPose}>
                  <span>{`Economic transitions and extreme whether pose challenges to small and mid-sized businesses.
                   nyxc provides technical assistance to business owners who help their communities respond 
                   to these events. Specifically, nyxc supports  financial planning, digital marketing, technology
                   adoption, and access to finance with the goal of empowering communities to build resilience.`}</span>
      </section>
      <Image
        className={styles.aboutChild}
        width={1440}
        height={687}
        sizes="100vw"
        alt=""
        src="/nyxccc-img/new Ellipse 20.png"
        unoptimized
      />
    </div>
  );
};

export default About;
