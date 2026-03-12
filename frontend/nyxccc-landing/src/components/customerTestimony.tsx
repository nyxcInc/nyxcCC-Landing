import type { NextPage } from "next";
import styles from './customerTestimony.module.css';

type CustomerTestimonyProps = {
 className?: string;
};

const customerTestimony: NextPage<CustomerTestimonyProps>  = ({ }) => {
  return (     
     
      <div className={styles.customerTestimony}>
        <img 
          className={styles.photoPlaceHolder}
          alt="Customer Photo"
          src="/nyxccc-img/SSPhoto.png"
            />
        <div className={styles.customerName}>
          <span className={styles.customerNameTxtContainer}>
            <p className={styles.firstNameLast}>{`Samantha Schweisthal `}</p>
            <p className={styles.firstNameLast}>{`Researcher at Auburn University`}</p>        
            <p className={styles.firstNameLast}> {'College of Forestry, Wildlife, and Environment'} </p>
          </span>
        </div>
        <div
          className={styles.customerQuote}
        >{`"Two common themes in terms of affordability regarding carbon projects are scalability and reoccurring 
          verification costs. Family-forest landowners have shared that these continue to 
          be concerns post-enrollment as generated income is often barely able to offset
          the start-up and maintenance costs." This limits the cash available to scale the business and reach a viable profit margin.`}
          </div>
      </div>
  )
}

export default customerTestimony;