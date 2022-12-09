import React, { useEffect, useState } from 'react';
import styles from './home.module.scss'
import iPhone from './iPhone.png'
import axios from 'axios'
// import { context } from '../../components/Context/Context';


const Home = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => 
      setCount(response.data)
    )
  });

  // const click = function(evt) {
  //   for (const e of count) {
  //     if(evt.id === context.id){
  //       push(context())
  //     }
  //   }
  // }

  return (
    <div className={styles.Home}>
      <div className={styles.Home__logo}>
        <h2 className={styles.Home__logo__text}>Аксессуары для <br/> Iphone 13 Pro Max</h2>
        <img className={styles.Home__logo__img} src={iPhone} alt="iphone" width='321' height='226' />
      </div>
      <div className={styles.Home__item}>
        {
          count.map((e) => {
            return (
              <div className={styles.Home__item__in}>
                  <img src={e.image} alt="foto" width='200' height='250' />
                  <h3 className={styles.Home__item__text}>{e.title}</h3>
                  <p className={styles.Home__item__p}>{e.price} $</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;
