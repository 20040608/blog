import React from 'react';
import styles from './footer.module.scss'
import {NavLink} from 'react-router-dom'
import plan from './plan.svg'
import vk from './VK.svg'
import insta from './Instagram.svg'
import teleg from './Telegram.svg'
import sapp from './Whatsapp.svg'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <NavLink to='/' className={styles.Footer__logo}>QPICK</NavLink>
        <div className={styles.Footer__link}>
        <NavLink className={styles.Footer__link__in} to='/about'>Избранное</NavLink>
        <NavLink className={styles.Footer__link__in} to='/blog'>Корзина</NavLink>
        <NavLink className={styles.Footer__link__in} to='/projects'>Контакты</NavLink>
        </div>
        <div className={styles.Footer__title}>
        <NavLink className={styles.Footer__link__inner} to='/service'>Условия сервиса</NavLink>
        <div className={styles.Footer__title__item}>
          <img src={plan} alt="plan" />
          <button className={styles.Footer__title__item__button}>Каз</button>
          <button className={styles.Footer__title__item__button__in}>Рус</button>
          <button className={styles.Footer__title__item__button}>Eng</button>
        </div>
        </div>
        <div className={styles.Footer__inner}>
          <a className={styles.Footer__inner__img} href="https://www.vk.com/"><img src={vk} alt="VK" /></a>
          <a className={styles.Footer__inner__img} href="https://www.instagram.com/"><img src={insta} alt="Instagram" /></a>
          <a className={styles.Footer__inner__img} href="https://www.telegram.com/"><img src={teleg} alt="Telegram" /></a>
          <a className={styles.Footer__inner__img} href="https://www.whatsapp.com/"><img src={sapp} alt="Whatsapp" /></a>
        </div>
    </div>
  );
}

export default Footer;
