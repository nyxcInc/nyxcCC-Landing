import Image from 'next/image';
import AboutCanvas from './AboutCanvas';
import styles from './sellingpoint.module.css';
import type { NextPage } from "next";


type sellingPointProps = {
  className?: string;
};

const SellingPoint: NextPage<sellingPointProps> = ({ className = '' }) => {
    return (
        <div className={styles.sellingPoints}>
          <div className={styles.sellingPointsFrameDesign}>
            <div className={styles.fadedBox}>
              <div className={styles.fadedBoxChild} />
              <div className={styles.fadedBoxItem} />
            </div>
            <div className={styles.lineElementsParent}>
              <Image
                className={styles.lineElements}
                width={252}
                height={303}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/Line Elements.png"
              />
              <Image
                className={styles.lineElements}
                width={252}
                height={303}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/Line Elements.png"
              />
            </div>
          </div>
          <div className={styles.sellingPointL}>
            <div className={styles.dataStackBox}>
              <Image
                className={styles.databaseIcon}
                width={24}
                height={33}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/Database.png"
              />
              <div className={styles.iconBox}>
                <div className={styles.iconBoxChild} />
                <div className={styles.iconBoxItem} />
              </div>
            </div>
            <div className={styles.smallBusinessLoans}>
              Technical <br /> Assistance
            </div>
          </div>
          <div className={styles.sellingPointC}>
            <div className={styles.binocularsBox}>
              <Image
                className={styles.binocularsIcon}
                width={37}
                height={24}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/Binoculars Icon.png"
              />
              <div className={styles.iconBox1}>
                <div className={styles.iconBoxChild} />
                <div className={styles.iconBoxItem} />
              </div>
            </div>
            <div className={styles.smallBusinessLoans}>
              Small Business Loans
            </div>
          </div>
          <div className={styles.sellingPointR}>
            <div className={styles.plantBox}>
              <Image
                className={styles.plantIcon}
                width={34}
                height={31}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/Plant Icon.png"
              />
              <div className={styles.iconBox2}>
                <div className={styles.iconBoxChild} />
                <div className={styles.iconBoxItem} />
              </div>
            </div>
            <div className={styles.technicalSupport}>
              AI Technology Reserach
            </div>
          </div>
        </div>
    );
}

export default SellingPoint;