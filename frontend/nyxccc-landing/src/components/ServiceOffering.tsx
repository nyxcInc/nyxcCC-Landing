import type { NextPage } from "next";
import Image from "next/image";
import styles from "./ServiceOffering.module.css";

export type ServiceOfferingType = {
  className?: string;
};


const ServiceOffering: NextPage<ServiceOfferingType> = ({ className = "" }) => {
  return (
    <div id="service-offering" className={[styles.serviceOfferingContainer, className].join(" ")}>
      <div className={styles.fiSection}>
        {/* Background Ellipse */}
        <div className={styles.ellipse}>
          <Image
            className={styles.ellipse}
            width={1440}
            height={687}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/new Ellipse 20.png"
            unoptimized
          />
        </div>

        {/* Text Content */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Financial Institutions and CDFIs
          </h2>
          <p className={styles.description}>
            Get started to connect with small businesses that match your lending
            criteria. Speed up underwriting by reviewing profiles before meeting
            with the businesses that match your requirements. Institutions that
            need to bring their portfolio in line with regulatory requirements
            can get access to verified impact data across social and
            environmental measurements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffering;

