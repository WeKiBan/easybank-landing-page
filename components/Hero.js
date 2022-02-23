/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import bgMobile from '../public/bg-intro-mobile.svg';
import bgDesktop from '../public/bg-intro-desktop.svg';
import mockUp from '../public/image-mockups.png';

function Hero() {
  const mobile = true;
  const [isMobile, setIsMobile] = useState('');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
  }, []);
  return (
    <section className={styles.hero}>
      {/* Phone and bg Image start */}
      <div className={styles.mockUpContainer}>
        <img src="/image-mockups.png" className={styles.mockUp} />
      </div>
      <div className={styles.bgImg}></div>

      {/* Phone and bg Image end */}

      {/* Text and button start */}
      <div className={styles.textContainer}>
        <h1>
          Next generation <br /> digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <button className="requestInvite">Request Invite</button>
      </div>
      {/* Text and button end */}
    </section>
  );
}

export default Hero;
