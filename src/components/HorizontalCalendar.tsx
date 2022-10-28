import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getCurrentWeekDays } from "../utils/helpers";
import WeekDays from "./WeekDays";
import { today } from "../commons/constants";
import Header from "./Header";

const HorizontalCalendar = () => {
    const [day, setDay] = useState(dayjs());
    const [weekDays, setWeekDays] = useState<dayjs.Dayjs[]>(getCurrentWeekDays(+day.startOf("week")));

    const handleNextClick = () => setDay(day.add(7, "day"));
    const handlePrevClick = () => setDay(day.subtract(7, "day"));

    useEffect(() => {
        setWeekDays(getCurrentWeekDays(+day.startOf("week")));
    }, [day]);

    return (
      <div className="calendar">
          <Header day={day} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
          <WeekDays today={today} weekDays={weekDays} />
      </div>

    );
};
export default HorizontalCalendar;