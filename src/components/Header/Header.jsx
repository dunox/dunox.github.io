import React, {Component} from "react";
import classes from './Header.module.scss';

const Header = () => {
        return (
              <div className={classes.Header}>
                  <div className={classes.Month}><p>Май <span>2020</span></p></div>
                  <a href="">Все уроки</a>
              </div>
        )
}
export default Header;