import React, { useState } from "react";
import dayjs from "dayjs";
import DateItem from "./DateItem";
import { isHighlighted, isToday } from "../utils/helpers";
import { WeekDaysProps } from "../commons/types";
import { dayStringFormat } from "../commons/constants";

const WeekDays = ({ today, weekDays }: WeekDaysProps) => {
    const [selected, setSelected] = useState<dayjs.Dayjs | null>(null);

    const handleClick = (event: React.MouseEvent, date: dayjs.Dayjs) => {
        setSelected(date);
        if (isToday(today, date)) setSelected(null);
    };

    return (
      <div className="weekdays">
          {weekDays.map((day, id) => {
              return <DateItem key={id}
                               minName={day.format(dayStringFormat)} day={day}
                               active={isToday(today, day) ? !selected ? "active" : "active_custom" : ""}
                               selected={isHighlighted(selected, day) ? "active" : ""}
                               handleClick={handleClick}
              />;
          })}
      </div>

    );
};
export default WeekDays;