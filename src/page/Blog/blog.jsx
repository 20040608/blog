import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './blog.module.scss'
import korzinka from './korzinka.svg'

const Blog = () => {
  return (
    <div className={styles.Blog}>
      <img src={korzinka} alt="korzinka" width='409' height='315' />
      <h2 className={styles.Blog__logo}>Корзина пуста</h2>
      <p className={styles.Blog__text}>Но это никогда не поздно исправить :)</p>
      <NavLink className={styles.Blog__link} to='/'>В каталог товаров</NavLink>
    </div>
  );
}

export default Blog;
