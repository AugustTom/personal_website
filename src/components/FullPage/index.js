import React from 'react';
import styles from './FullPage.module.css';
import classNames from 'classnames';

export default ({children, label = '', visible = true}) => {
  return (
    <section id={label.toLowerCase()}
             className={classNames(styles.page, {
               [styles.hide]: !visible,
               [styles.show]: visible
             })}>
      {children}
    </section>
  );
};
