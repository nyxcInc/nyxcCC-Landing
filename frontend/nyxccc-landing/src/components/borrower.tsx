import type { NextPage } from "next";
import Image from "next/image";
import styles from "./borrower.module.css";

const Example: NextPage = () => {
  return (
    <div className={styles.example}>
      <main className={styles.exampleSection}>
               <Image
                className={styles.aboutChild}
                width={1440}
                height={687}
                sizes="100vw"
                alt=""
                src="/nyxccc-img/new Ellipse 20.png"
              />
        <section className={styles.screenShotAndDescription}>
          <div className={styles.descriptionText}>
            nyxc goes beyond traditional financial services. The organization provides technical assistance to business owners, 
            plus an overview of financing pathways at no cost. If you run a small or family owned business, 
            select “Get Started” to learn more.
          </div>
          <Image
            className={styles.example730ef7ab1Icon}
            loading="lazy"
            width={663}
            height={320}
            sizes="100vw"
            alt=""
            src="/nyxccc-img/example.png"
          />
        </section>

      </main>
    </div>
  );
};

export default Example;


