import React from 'react';
import { useState } from 'react';
import styles from './login.module.scss'

const Login = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className={styles.Login}>
      <input placeholder='todo' type='text' />
      <input placeholder='complated' type="text" />
      <button>submit</button>
    </div>
  );
}

export default Login;
