import React from 'react';
import style from "./FooterLink.module.css";

export default ({onClick, children}) => {
  return (
    <h5 className={style.link} >
      <a onClick={onClick}>{children}</a>
    </h5>
  );
};