import * as React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./headerNavigation.module.css";
const HeaderNavigation: FC = () => {
  return (
    <nav className={styles.nav_cont}>
      <nav className={styles.nav_menu_func}>
        <Link to="/market" className={styles.nav_menu_func_title}>
          <div className={styles.nav_menu_img_market}></div>Рынки
        </Link>
        <Link to="/singleAction" className={styles.nav_menu_func_title}>
          <div className={styles.nav_menu_img_sing_action}></div>Акции
        </Link>
        <Link to="/select"  className={styles.nav_menu_func_title}>
          <div className={styles.nav_menu_img_select}></div>Избраное
        </Link>
        <Link to="/portfolio" className={styles.nav_menu_func_title}>
          <div className={styles.nav_menu_img_portfolio}></div>Портфель
        </Link>
      </nav>
      <nav className={styles.nav_menu_settings}>
        <p className={styles.nav_menu_set_title}>
          <div className={styles.nav_menu_img_search}></div>Найти
        </p>
        <p className={styles.nav_menu_set_title}>
          <div className={styles.nav_menu_img_question}></div>Помощь
        </p>
        <p className={styles.nav_menu_set_title}>
          <div className={styles.nav_menu_img_avatar}></div>
        </p>
      </nav>
    </nav>
  );
};

export default HeaderNavigation;
