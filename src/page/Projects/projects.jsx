import React from 'react';
import styles from './projects.module.scss';
import lokatsiya from './lokatsiya.svg';
import phone from './phone.svg';
import samalyot from './samalyot.svg';
import telll  from './telll.svg';
import tort from './tort.svg';
import font from './font.svg';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.Projects__title}>
        <div className={styles.Projects__item}>
          <h2 className={styles.Projects__item__logo}>Наш офис</h2>
          <iframe className={styles.Projects__item__in} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95911.05971916986!2d69.2158464!3d41.304064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1670340131994!5m2!1sru!2s" width="722" height="424" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className={styles.Projects__item__inner}>
            <img src={lokatsiya} alt="lokatsiya" width='21' height='22' />
            <div className={styles.Projects__item__title}>
              <h2 className={styles.Projects__item__on}>Аксай-3а, 62ф, Алматы, Казахстан</h2>
              <p className={styles.Projects__item__text}>3 этаж 35 кабинет</p>
            </div>
          </div>
        </div>
        <div className={styles.Projects__inner}>
          <a className={styles.Projects__inner__href} href="https://www.whatsapp.com/"><img className={styles.Projects__inner__img} src={phone} alt="phone" width='39' height='39' /></a>
          <a className={styles.Projects__inner__href} href="https://www.vk.com/"><img className={styles.Projects__inner__img} src={font} alt="font" width='39' height='39' /></a>
          <a className={styles.Projects__inner__href} href="https://www.instagram.com/"><img className={styles.Projects__inner__img} src={tort} alt="tort" width='39' height='39' /></a>
          <a className={styles.Projects__inner__href} href="https://telegram.org/"><img className={styles.Projects__inner__img} src={samalyot} alt="samalyot" width='39' height='39' /></a>   
        </div>
      </div>
      <div className={styles.Projects__text}>
        <img className={styles.Projects__text__img} src={telll} alt="tel" />
        <a  className={styles.Projects__text__in} href="tel:+77777777777">+7 777 777 77 77</a>
      </div>
    </div>
  );
}

export default Projects;
