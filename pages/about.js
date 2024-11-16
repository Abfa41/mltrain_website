// pages/about.js
import React from "react";
import styles from "@/styles/About.module.css";
import Head from "next/head";


const About = () => {
  return (
    <>
      <Head>
        <title>mltrain - About</title>
        <meta name="description" content="Learn more about mltrain, mltrain is a Machine Learning Library created by Abdul Faatih Siddiqui. It provides Supervised and Unsupervised ML Models. It has simple functionality. Ideal for learners and professionals.">
        <meta name="keywords" content="mltrain, machine learning, ML package, ML training, deep learning, ML tools, Abdul Faatih Siddiqui, About mltrain">
        <meta name="author" content="Abdul Faatih Siddiqui">
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={`${styles.part2}`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4324.64588327936!2d78.45132178303699!3d17.403450034838425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97403c59aefb%3A0x979eb4a9704c45e8!2sGovernment%20Polytechnic%20college!5e0!3m2!1sen!2sin!4v1725530225835!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`${styles.part1}`}>
          <div className={""}>
            <h1 className={styles.heading}>About mltrain</h1>
            <p className={styles.subheading}>Who Built it???</p>
            <p className={styles.paragraph}>
              mltrain is a Machine Learning Library created by Abdul Faatih Siddiqui. 
              It provides Supervised and Unsupervised ML Models. It has simple functionality.
            </p>

            <p className={styles.paragraph}>
              It is an inspiration from Scikit-Learn. This Library is for My Learning Purpose in the field of AI/ML.
              So, feel free to use the Models which r built from scratch. 
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
