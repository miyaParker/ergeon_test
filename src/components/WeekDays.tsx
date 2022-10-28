import React, { useState } from "react";
import dayjs from "dayjs"
import DateItem from "./DateItem";
import { isToday } from "../utils/helpers";
import { WeekDaysProps } from "../commons/types";
import { dayStringFormat } from "../commons/constants";

const WeekDays = ({ today, weekDays }: WeekDaysProps) => {
  const [customDay, setCustomDay] = useState<dayjs.Dayjs | null>(null);

  const handleClick = (event: React.MouseEvent, date: dayjs.Dayjs) => {
    setCustomDay(date);
    if (isToday(today, date)) setCustomDay(null);
  };

  return (
    <div className="weekdays">
      {weekDays.map((day, id) => {
        return <DateItem key={id}
                         minName={day.format(dayStringFormat)} day={day}
                         active={isToday(today, day) ? !customDay ? "active" : "active_custom" : ""}
                         customDay={day === customDay ? "active" : ""}
                         handleClick={handleClick}
        />;
      })}
    </div>

  );
};
export default WeekDays;