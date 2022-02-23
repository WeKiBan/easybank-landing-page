import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../public/logo.svg';
import hamburgerMenu from '../public/icon-hamburger.svg';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.imageContainer}>
        <Image src={logo} />
      </div>
      <ul className={styles.desktopNav}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
      </ul>
      <div className={styles.hamburger}>
        <Image src={hamburgerMenu} />
      </div>
      <button className="requestInvite desktopOnly">Request Invite</button>
    </nav>
  );
}

export default Navbar;
