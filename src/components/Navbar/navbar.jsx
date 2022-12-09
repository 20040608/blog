import React, { useState } from 'react';
import styles from './navbar.module.scss'
import {NavLink} from 'react-router-dom'
import love from './love.svg'
import korzina from './korzina.svg'
import tell from './tell.svg'
import Select from '../select/select';

const Navbar = () => {
  const data = [{title:'apple'},{title:'samsung'},{title:'lg'}]
  return (
    <div className={styles.Navbar}>
       <div className={styles.Navbar__logo}>
       <NavLink to='/' className={styles.Navbar__logo__in}>QPICK</NavLink>
        <div className={styles.Navbar__logo__inner}>
        <div className={styles.Navbar__logo__inner__in}><img src={tell} alt="tell" /></div>
        <select className={styles.Navbar__logo__select} name="da"><option selected disabled value>Выбрать модель телефона</option><Select data={data} /></select>
        </div>
       </div>
       <div className={styles.Navbar__item}>
       <NavLink className={styles.Navbar__item__link} to='/about'>
        <img src={love} alt="like" />
       </NavLink>
       <NavLink className={styles.Navbar__item__link} to='/blog'>
        <img src={korzina} alt="korzina" />
       </NavLink>
       </div>
    </div>
  );
}

export default Navbar;
