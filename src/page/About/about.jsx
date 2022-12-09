import React from 'react';
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.About}>
      <h2 className={styles.About__logo}>Избранное</h2>
      <p className={styles.About__text}>Нет избранных товаров</p>
    </div>
  );
}

export default About;
