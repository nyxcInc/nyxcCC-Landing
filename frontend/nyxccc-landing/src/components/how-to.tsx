import type { NextPage } from "next";
import Image from "next/image";
import styles from "./how-to.module.css";

export type HowToType = {
  className?: string;
};

  const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


const HowTo: NextPage<HowToType> = ({ className = "" }) => {
  return (
   <div id="loan-qualification" className={styles.confirmTerms1}>
          <div className={styles.howToContainer}>
      {/* Title */}
      <div className={styles.howToTitle}>
      Loan Qualification Process
      </div>
    <div className={[styles.tray31, className].join(" ")}>
      <section className={styles.tray31}>
        <Image
          className={styles.rightBoxChild3}
          loading="lazy"
          width={400}
          height={460}
          sizes="100vw"
          alt=""
          src="/nyxccc-img/RightBox.png"
        />
      </section>
      <section className={styles.text1}>
        <h1 className={styles.confirmTerms1}>Explore Financing</h1>
        <div className={styles.optIntoFlexible1}>
          Learn how nyxc’s streamlined lending process can help you grow your business.
        </div>
      </section>
      <div className={[styles.centerBox, className].join(" ")}>
        <section className={styles.CenterBox}>
          <Image
            className={styles.centerBoxChild3}
            loading="lazy"
            width={400}
            height={460}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/CenterBox.png"
          />
        </section>
        <section className={styles.signUpGroup}>
          <h1 className={styles.signUp1}>Sign Up</h1>
          <div className={styles.take30Seconds1}>
            Take 30 seconds to create a profile and schedule an introductory call.
          </div>
          <div className={styles.getStartedWrapper}>
            <Image
              src="/nyxccc-img/get-started.png"
               onClick={() => openExternalLink("https://calendly.com/brittany-salas/nyxc-community-capital")}
              alt="Beta access button"
              className={styles.getStartedButton}
              width={107}
              height={31}
            />
          </div>
        </section>
      </div>
      <div className={[styles.tray12, className].join(" ")}>
        <section className={styles.leftBox2}>
          <Image
            className={styles.leftBox2}
            loading="lazy"
            width={401}
            height={460}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/LeftBox.png"
          />
        </section>
        <section className={styles.titleAndDescription2}>
          <h1 className={styles.companyDetails2}>Discover Opportunities</h1>
          <div className={styles.preQualifiedBorrowersSubmit2}>
            Find opportunities for new revenue by providing an overview of your 
            company and business goals.  
          </div>
        </section>
      </div>
    </div>
    </div>
   </div>
  );
  
};

export default HowTo;


