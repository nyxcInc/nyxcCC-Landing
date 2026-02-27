import styles from "./learn.module.css";
import Image from "next/image";
import type { NextPage } from "next";


const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

type LearnProps = {
  className?: string;
};  

const Learn: NextPage<LearnProps> = ({ className = "" }) => {
  return (
   
    <div className={[styles.learn, className].join(" ")}>
     <div className={styles.learnContainer}>
        
        {/* CTA 1 - Learn */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaDescription}>
            Get to know us at our next event.
          </div>
          <div className={styles.ctaButton}>
            <div 
              className={styles.ctaButtonText}
              onClick={() => openExternalLink("https://lu.ma/user/usr-2xnTQA0eH8a83EM")}
            >
              Learn
            </div>
            <div className={styles.ctaUnderline} />
          </div>
        </div>

        {/* CTA 2 - Donate */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaDescription}>
            Support our work to make communities more resilient.
          </div>
          <div className={styles.ctaButton}>
            <div 
              className={styles.ctaButtonText}
              onClick={() => openExternalLink("https://donate.stripe.com/3cI7sK7aib6jebM1CSfnO00")}
            >
              Donate
            </div>
            <div className={styles.ctaUnderline} />
          </div>
        </div>

        {/* CTA 3 - Follow */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaDescription}>
            Join the community and get access to research.
          </div>
          <div className={styles.ctaButton}>
            <div 
              className={styles.ctaButtonText}
              onClick={() => openExternalLink("https://nyxc.substack.com/")}
            >
              Follow
            </div>
            <div className={styles.ctaUnderline} />
          </div>
        </div>

      </div>
    </div>
  );
  };

export default Learn;