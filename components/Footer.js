import React from 'react';
import styles from '@/styles/Footer.module.css';  // Assuming you're using CSS modules
import Link from 'next/link';
import { FaFacebookF, FaGithub,FaInstagram,FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles['footer-col']}>
            <h4>Imp links</h4>
            <ul className={`${styles.ul}`}>
              <Link href={'/'}><li className={`${styles.li}`}>Home</li></Link>
              <Link href={'/docs/introduction'}><li className={`${styles.li}`}>Docs</li></Link>
              <Link href={'/about'}><li className={`${styles.li}`}>About</li></Link>
              <Link href={'https://github.com/Abfa41/mltrain_python.git'}><li className={`${styles.li}`}>GitHub Repo Link</li></Link>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>Imp Supervised Models</h4>
            <ul className={`${styles.ul}`}>
            <Link href={'/docs/linearregression'}><li className={`${styles.li}`}>Linear Regression</li></Link>
            <Link href={'/docs/logisticregression'}><li className={`${styles.li}`}>Logistic Regression</li></Link>
            <Link href={'/docs/kernelsvm'}><li className={`${styles.li}`}>KernelSVM</li></Link>
            <Link href={'/docs/decisiontree'}><li className={`${styles.li}`}>Decision Tree</li></Link>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>Imp Unsupervised Models</h4>
            <ul className={`${styles.ul}`} >
            <Link href={'/docs/kmeans'}><li className={`${styles.li}`}>K-Means Clustering</li></Link>
            <Link href={'/docs/dbscan'}><li className={`${styles.li}`}>DBSCAN Clustering</li></Link>
            <Link href={'/docs/pca'}><li className={`${styles.li}`}>PCA</li></Link>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h4>follow us</h4>
            <div className={styles['social-links']}>
              <Link href={'/'} style={{backgroundColor: 'blue'}}><FaFacebookF /></Link>
              <Link href={'https://github.com/Abfa41/mltrain_python.git'} style={{backgroundColor: 'black'}}><FaGithub /></Link>
              <Link href={'/'} style={{backgroundColor: '#1DA1F2'}}><FaTwitter /></Link>
              <Link href={'/'} style={{backgroundColor: '#E1306C'}}><FaInstagram /></Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
