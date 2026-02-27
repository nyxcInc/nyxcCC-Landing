import type { NextPage } from "next";
import Image from "next/image";
import styles from "./partnerlogos.module.css";

export type PartnerLogosType = {
  className?: string;
};

const PartnerLogos: NextPage<PartnerLogosType> = ({ className = "" }) => {
  return (
    <div className={[styles.partnerLogos, className].join(" ")}>
      <div id="partner-logos" className={styles.partnerLogos}></div>
      <div className={styles.partnerLogos1}>
        <div className={styles.supporterWrapper}>
          
          {/* Title */}
          <div className={styles.nyxcSupporterNetwork}>
            nyxc Supporter Network
          </div>
          
          {/* Logo Container */}
          <div className={styles.logosInTray}>
            
            {/* Background Tray */}
            <div className={styles.logoTray} />
            
            {/* Top Row Logos */}
            <Image
              className={styles.watsonLogo}
              width={186}
              height={47}
              alt="Watson Institute"
              src="/nyxccc-img/Watson-logo-footer.svg"
            />
            <Image
              className={styles.bmoLogo}
              width={205}
              height={74}
              alt="Bank of Montreal"
              src="/nyxccc-img/bank-of-montreal-logo 1.png"
            />
            <Image
              className={styles.xlabsLogo}
              width={399}
              height={100}
              alt="Conservation X Labs"
              src="/nyxccc-img/consXlabs.png"
            />
            
            {/* Bottom Row Logos */}
            <Image
              className={styles.scroobiousLogo}
              width={246}
              height={32}
              alt="Scroobious"
              src="/nyxccc-img/scroobious.png"
            />
            <Image
              className={styles.startoutLogo}
              width={227}
              height={56}
              alt="StartOut"
              src="/nyxccc-img/startout.png"
            />
            <Image
              className={styles.cvwbcLogo}
              width={103}
              height={55}
              alt="CVWBC"
              src="/nyxccc-img/cvwbdc.jpg"
            />
            
          </div>
        </div>
      </div>
    </div>
  );

};

export default PartnerLogos;