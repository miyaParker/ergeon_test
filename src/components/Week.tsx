import DateItem from "./DateItem";
import React, {useState} from "react";
import dayjs from "dayjs";

const Week = ({today, weekDays}: { today: dayjs.Dayjs, weekDays: dayjs.Dayjs[] }) => {
    const [customDay, setCustomDay] = useState<dayjs.Dayjs | null>(null);

    const handleClick = (event: React.MouseEvent, date: dayjs.Dayjs) => {
        setCustomDay(date)
        if (isToday(date)) setCustomDay(null)

    }


    const isToday = (day: dayjs.Dayjs) => {
        if (today.format("D") === day.format("D") && today.format("M") === day.format("M") && today.format("YYYY") === day.format("YYYY")) return true
        return false
    }

    return (
        <div className="weekdays">
            {weekDays.map((day, id) => {
                return <DateItem key={id} minName={day.format("dd")} day={day}
                                 active={isToday(day) ? !customDay ? "active" : "active_custom" : ""}
                                 customDay={day === customDay ? "active" : ""}
                                 handleClick={handleClick}
                />
            })}
        </div>

    )
}
export default Week