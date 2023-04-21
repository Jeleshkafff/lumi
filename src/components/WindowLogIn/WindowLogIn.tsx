import React from 'react'
import styles from "./Header.module.css"
// import { BrowserRouter, NavLink } from "react-router-dom";

 function Header() {
  return (
<div>
<input className={styles.rectangle48} type="text" />
      <input className={styles.rectangle49} type="text" />
     <div className={styles.unnamed3}>Пароль</div>
      <div className={styles.unnamed4}>Логин</div>
<a className={styles.unnamed5}href="#">Забыли пароль?</a>
<div className={styles.QR}>Войти с помощью QR-кота </div>
</div>
  )
}
export default Header