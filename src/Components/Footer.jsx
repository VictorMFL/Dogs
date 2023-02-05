import React from 'react';
import styles from './Footer.module.css';
import DogsFooterSvg from '../Assets/DogsFooterSvg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooterSvg />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )  
};

export default Footer;
