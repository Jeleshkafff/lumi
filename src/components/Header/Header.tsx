import React from 'react'
import styles from "./Header.module.css"
// import { BrowserRouter, NavLink } from "react-router-dom";

 function Header() {
  return (
       <header className={styles.header}>

        <img src="./logo.svg" alt=""></img>
        <input className={styles.input} type="text" name="" ></input>
       </header>
  )
}
export default Header