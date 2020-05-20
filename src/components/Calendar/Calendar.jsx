import React from "react";
import Month from "../Month/Month";
import courses from '../../fixtures'
import classes from './Calendar.module.scss';
import Header from "../Header/Header";
const Calendar = () => {
    return (
        <div className={classes.Calendar}>
            <Header />
            <Month courses={courses}/>
        </div>

    )
}
export default Calendar;