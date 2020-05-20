import React from "react";
import Day from "../Day/Day";
import classes from './Month.module.scss';
const Month = ({courses}) => {
    const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const dayElement = courses.map( course =>
        <div key={course.date}><Day course={course} /></div>
    )
    const weekdayElement = weekdays.map( day =>
        <div className={classes.Item}><p>{day}</p></div>
    )
    return (
        <div>
            <div className={classes.Weekday}>{weekdayElement}</div>
            <div className={classes.Month}>
                {dayElement}
            </div>
        </div>


    )
}
export default Month;