import {generateCurrentWeekDays} from "../utils/helpers";
import prevIcon from "../assets/prev.png"
import nextIcon from "../assets/next.png"
import dayjs from "dayjs";
import Week from "./Week";
import {useEffect, useState} from "react";

const HorizontalCalendar = () => {
    const [day, setDay] = useState(dayjs())
    const [weekDays, setWeekDays] = useState<dayjs.Dayjs[]>(generateCurrentWeekDays(+day.startOf("week")))
    const today = dayjs()

    const handleNextClick = () => setDay(day.add(7, 'day'))
    const handlePrevClick = () => setDay(day.subtract(7, 'day'))

    useEffect(() => {
        setWeekDays(generateCurrentWeekDays(+day.startOf("week")))
    }, [day])
    return (
        <div className="calendar">
            <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
                <h3 className="month">{day.format("MMMM")} {day.format("YYYY")}</h3>
                <div className="nav">
                    <span className="btn prev">
                        <img src={prevIcon} onClick={handlePrevClick}/>
                    </span>
                    <span className="btn next">
                        <img src={nextIcon} onClick={handleNextClick}/>
                    </span>
                </div>

            </div>
            <Week today={today} weekDays={weekDays}/>
        </div>

    )
}
export default HorizontalCalendar