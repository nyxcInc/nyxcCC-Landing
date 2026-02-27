"use client";
import type { NextPage } from "next";
import Development from "./development";
import HowTo from "./how-to";
import styles from "./mainPage.module.css";
import Image from "next/image";
import AboutSection from "./about";
import Header from "./header";
import PartnerLogos from "./partnerlogos";
import Borrower from "./borrower";
import Team from "./team";
import Learn from "./learn";
import SellingPoint from "./sellingpoint";
import Tagline from "./tagline";  
import Footer from "./footer"
import CustomerTestimony from "./customerTestimony";


type MainPageProps = {
  className?: string;
};

const MainPage: NextPage<MainPageProps> = ({ className = "" }) => {
  return (
    <div className={[styles.mainPage, className].join(" ")}>
      <div className={styles.pageContainer}></div>
      <Header />
      <Tagline />
      <AboutSection />
      <SellingPoint />
      <CustomerTestimony />
      <PartnerLogos />
      <Development />
      <Borrower />
      <HowTo />
      <Team />
      <Learn />
      <div className={styles.floatingBlob}></div>
      <Footer />
    </div>
  );
};

export default MainPage;