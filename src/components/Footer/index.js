import React from 'react';
import FooterLink from './FooterLink';
import styles from './Footer.module.css';
import FooterLinkStyle from "./FooterLink.module.css";
import Anchor from "./Anchor";

export default ({toggleAndShowContactForm}) => {

  return (
    <>
      <div className={styles.background}>
        <div className={styles.footer} data-testid={'footer'}>
          <FooterLink href={'https://www.linkedin.com/in/augusttom/'}>LinkedIn</FooterLink>
          <FooterLink href={'https://github.com/AugusteTomaseviciute'}>Github</FooterLink>
          <FooterLink href={'https://medium.com/@augusttomaeviit'}>Medium</FooterLink>
          <Anchor className={FooterLinkStyle.link} onClick={() => {toggleAndShowContactForm();}}>Contact Me</Anchor>
        </div>
        <div className={styles.copyright}>
          Copyright &copy;{new Date().getFullYear()} Auguste Tom. All Rights Reserved
        </div>
      </div>
    </>
  );
};