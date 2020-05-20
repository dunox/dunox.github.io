import React, {useState} from "react";
import classes from './Day.module.scss';
import clock from './../../images/clock.png';
const Day = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // state = {
    //     isOpen: false,
    // };
    const descriptionHandler = () => {
        setIsOpen(!isOpen);
    }
    // render() {
        const {course} = props;
    const dateNow = course.event.length > 0 ? <h3>Уроки на {course.date} мая</h3> : <h3>На сегодня уроков не запланировано</h3>;
        const dayDescription = isOpen && <div className={classes.Detail}>
            {dateNow}
            {course.event.map(({ title, name, time, duration}) => {
                return (
                        <div className={classes.Event}>
                            <span className={classes.Time}>{time}</span>
                            <span className={classes.Title}>{title}</span>
                            <span className={classes.Name}>{name}</span>
                            <span className={classes.Duration}><img className={classes.Clock} src={clock} alt=""/>{duration} минут</span>
                        </div>

                    )
            })}
        </div>
    const amount = course.event.length > 0 && <span>{course.event.length} Событий</span>;
        return (
            <React.Fragment>
                <div className={classes.Day} onClick={descriptionHandler}>
                    <p>{course.date <  31 && course.date}</p>
                    {amount}
                </div>
                {dayDescription}
            </React.Fragment>

        )

    // }

}
export default Day;